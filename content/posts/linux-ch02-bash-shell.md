---
title: "[리눅스] Ch02-2. BASH 쉘과 친숙해지기"
date: "2026-02-17"
description: "패스트캠퍼스 AI 부트캠프 리눅스 운영파트 - BASH 쉘의 핵심 기능과 활용법을 정리합니다."
tags: ["리눅스", "BASH", "쉘", "패스트캠퍼스"]
---

## BASH 쉘과 친숙해지기

> 패스트캠퍼스 AI 부트캠프 24기 | Part 10. 리눅스 운영파트  
> Ch 02. 리눅스 쉘과 CLI 명령어 - BASH 쉘과 친숙해지기 (07 ~ 09)

---

### 1. BASH(Bourne Again Shell)란?

**BASH**는 리눅스에서 가장 널리 사용되는 기본 쉘입니다. GNU 프로젝트의 일환으로 개발되었으며, 이전의 Bourne Shell(sh)을 대체합니다.

```bash
$ echo $SHELL
/bin/bash

$ bash --version
GNU bash, version 5.x.x
```

현재 사용 중인 쉘 확인:

```bash
$ cat /etc/shells     # 시스템에 설치된 쉘 목록
$ echo $0             # 현재 실행 중인 쉘
```

---

### 2. 환경 변수(Environment Variables)

환경 변수는 쉘 세션에서 사용할 수 있는 **전역 설정 값**입니다.

#### 주요 환경 변수

| 변수 | 설명 |
|------|------|
| `$HOME` | 사용자 홈 디렉토리 |
| `$USER` | 현재 사용자 이름 |
| `$PATH` | 실행 파일 검색 경로 |
| `$PWD` | 현재 작업 디렉토리 |
| `$SHELL` | 현재 사용 중인 쉘 |
| `$LANG` | 시스템 언어 설정 |

#### 환경 변수 설정 및 조회

```bash
$ echo $HOME                   # 환경 변수 값 출력
$ env                          # 모든 환경 변수 출력
$ export MY_VAR="hello"        # 환경 변수 설정 (현재 세션)
$ unset MY_VAR                 # 환경 변수 삭제
```

#### PATH 환경 변수

```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# PATH에 새 경로 추가
$ export PATH=$PATH:/new/path
```

---

### 3. BASH 설정 파일

BASH는 시작 시 여러 설정 파일을 순서대로 읽어들입니다.

| 파일 | 적용 시점 | 설명 |
|------|-----------|------|
| `/etc/profile` | 로그인 시 | 전체 사용자 공통 설정 |
| `~/.bash_profile` | 로그인 시 | 개인 로그인 설정 |
| `~/.bashrc` | 쉘 시작 시 | 개인 쉘 설정 (가장 많이 사용) |
| `~/.bash_logout` | 로그아웃 시 | 로그아웃 시 실행할 작업 |

```bash
# ~/.bashrc에 alias 추가 예시
$ vi ~/.bashrc

# 파일 내용:
alias ll='ls -la'
alias gs='git status'
export PATH=$PATH:$HOME/bin

# 변경 사항 즉시 적용
$ source ~/.bashrc
```

---

### 4. 리다이렉션(Redirection)

명령어의 입출력 방향을 변경하는 기능입니다.

#### 표준 스트림

| 스트림 | 파일 디스크립터 | 설명 |
|--------|----------------|------|
| stdin | 0 | 표준 입력 (키보드) |
| stdout | 1 | 표준 출력 (화면) |
| stderr | 2 | 표준 에러 (화면) |

#### 출력 리다이렉션

```bash
$ echo "Hello" > file.txt      # 파일에 덮어쓰기
$ echo "World" >> file.txt     # 파일에 추가(append)
$ ls /nonexist 2> error.log    # 에러만 파일로 저장
$ ls /home > out.txt 2>&1      # 표준 출력과 에러 모두 파일로 저장
$ command > /dev/null 2>&1     # 모든 출력 버리기
```

#### 입력 리다이렉션

```bash
$ wc -l < file.txt             # 파일 내용을 입력으로 전달
$ sort < unsorted.txt > sorted.txt  # 입력/출력 동시 리다이렉션
```

---

### 5. 파이프(Pipe)

파이프 `|`는 앞 명령어의 출력을 뒤 명령어의 입력으로 연결합니다.

```bash
$ ls -l | grep ".txt"          # .txt 파일만 필터링
$ cat file.txt | wc -l         # 파일 줄 수 세기
$ ps aux | grep python         # python 프로세스 찾기
$ history | tail -20           # 최근 20개 명령어
$ cat /etc/passwd | sort | head -5   # 정렬 후 상위 5개
```

> **파이프라인 흐름 다이어그램**

```mermaid
graph LR
    A[명령어 1<br/>stdout] -->|파이프| B[명령어 2<br/>stdin → stdout]
    B -->|파이프| C[명령어 3<br/>stdin → 결과]
```

---

### 6. 와일드카드(Wildcard)와 글로빙(Globbing)

쉘에서 파일 이름 패턴 매칭에 사용됩니다.

| 패턴 | 설명 | 예시 |
|------|------|------|
| `*` | 0개 이상의 임의 문자 | `*.txt` → 모든 .txt 파일 |
| `?` | 정확히 1개의 임의 문자 | `file?.txt` → file1.txt, fileA.txt |
| `[abc]` | 괄호 안 문자 중 하나 | `file[123].txt` → file1.txt, file2.txt |
| `[a-z]` | 범위 내 문자 중 하나 | `file[a-c].txt` → filea.txt ~ filec.txt |
| `{a,b}` | 중괄호 확장 | `file.{txt,log}` → file.txt, file.log |

```bash
$ ls *.txt                     # 모든 txt 파일
$ rm temp_???.log              # temp_001.log ~ temp_999.log 등 삭제
$ cp report_{jan,feb,mar}.pdf ~/backup/
```

---

### 7. 명령어 치환과 따옴표

#### 명령어 치환 (Command Substitution)

```bash
$ echo "현재 날짜: $(date)"
$ echo "현재 날짜: `date`"     # 백틱 방식 (구식)

$ files=$(ls *.txt)
$ echo "파일 목록: $files"
```

#### 따옴표 사용법

```bash
$ name="World"
$ echo "Hello $name"           # 큰따옴표: 변수 치환 O → Hello World
$ echo 'Hello $name'           # 작은따옴표: 변수 치환 X → Hello $name
$ echo "파일 수: $(ls | wc -l)"  # 큰따옴표 안에서 명령 치환
```

---

### 8. Alias (별칭)

자주 사용하는 긴 명령어를 짧게 줄여 사용할 수 있습니다.

```bash
# 임시 alias 설정 (현재 세션만)
$ alias ll='ls -la'
$ alias cls='clear'
$ alias rmf='rm -rf'

# alias 목록 확인
$ alias

# alias 삭제
$ unalias ll

# 영구 alias (~/.bashrc에 추가)
$ echo "alias ll='ls -la'" >> ~/.bashrc
$ source ~/.bashrc
```

---

### 9. 히스토리(History) 활용

```bash
$ history                      # 전체 히스토리
$ history 20                   # 최근 20개
$ !100                         # 히스토리 100번 명령 재실행
$ !!                           # 바로 직전 명령 재실행
$ !ls                          # ls로 시작하는 마지막 명령 재실행
$ Ctrl + R                     # 히스토리 역방향 검색 (매우 유용!)
```

---

### 정리

BASH 쉘의 핵심 기능을 정리하면 다음과 같습니다:

| 기능 | 핵심 개념 |
|------|-----------|
| 환경 변수 | `export`, `$PATH`, `$HOME` 등 시스템 설정 |
| 설정 파일 | `~/.bashrc`가 가장 핵심 |
| 리다이렉션 | `>`, `>>`, `2>`, `<`로 입출력 방향 제어 |
| 파이프 | `\|`로 명령어 간 데이터 흐름 연결 |
| 와일드카드 | `*`, `?`, `[]`로 파일 패턴 매칭 |
| 명령어 치환 | `$(command)`로 명령 결과를 변수처럼 사용 |
| Alias | 자주 쓰는 명령어를 짧은 별칭으로 등록 |

> **Tip**: `~/.bashrc` 파일을 잘 관리하면 자신만의 효율적인 쉘 환경을 구축할 수 있습니다.  
> 개인 설정을 Git으로 관리하는 **dotfiles** 패턴도 추천합니다!

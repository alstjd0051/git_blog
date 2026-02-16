---
title: "[리눅스] Ch02-1. 리눅스 쉘과 CLI 기본 명령어 다루기"
date: "2026-02-17"
description: "패스트캠퍼스 AI 부트캠프 리눅스 운영파트 - 리눅스 쉘 환경에서 자주 사용하는 기본 CLI 명령어를 정리합니다."
tags: ["리눅스", "CLI", "쉘", "패스트캠퍼스"]
---

## 리눅스 쉘과 CLI 기본 명령어

> 패스트캠퍼스 AI 부트캠프 24기 | Part 10. 리눅스 운영파트  
> Ch 02. 리눅스 쉘과 CLI 명령어 - 기본 명령어 다루기 (01 ~ 03)

---

### 1. 쉘(Shell)이란?

쉘은 사용자와 운영체제 커널 사이에서 명령을 해석하고 전달하는 **인터페이스**입니다.

```
사용자 → 쉘(Shell) → 커널(Kernel) → 하드웨어
```

- **CLI(Command Line Interface)**: 텍스트 기반 명령어 입력 방식
- **GUI(Graphical User Interface)**: 그래픽 기반 마우스 클릭 방식

리눅스 서버 환경에서는 대부분 **CLI**를 사용합니다.

---

### 2. 파일 및 디렉토리 탐색 명령어

#### `pwd` - 현재 작업 디렉토리 확인

```bash
$ pwd
/home/user
```

#### `ls` - 디렉토리 내용 목록 출력

```bash
$ ls          # 기본 목록
$ ls -l       # 상세 정보 (권한, 소유자, 크기, 날짜)
$ ls -a       # 숨김 파일 포함
$ ls -la      # 상세 + 숨김 파일
$ ls -lh      # 사람이 읽기 쉬운 크기 표시
$ ls -R       # 하위 디렉토리까지 재귀적 출력
```

#### `cd` - 디렉토리 이동

```bash
$ cd /home/user    # 절대 경로로 이동
$ cd Documents     # 상대 경로로 이동
$ cd ..            # 상위 디렉토리로 이동
$ cd ~             # 홈 디렉토리로 이동
$ cd -             # 이전 디렉토리로 이동
```

---

### 3. 파일 및 디렉토리 관리 명령어

#### `mkdir` - 디렉토리 생성

```bash
$ mkdir mydir              # 단일 디렉토리 생성
$ mkdir -p a/b/c           # 중간 경로 포함 생성 (parent)
```

#### `touch` - 빈 파일 생성 / 타임스탬프 갱신

```bash
$ touch newfile.txt        # 빈 파일 생성
$ touch file1 file2 file3  # 여러 파일 동시 생성
```

#### `cp` - 파일/디렉토리 복사

```bash
$ cp source.txt dest.txt         # 파일 복사
$ cp -r sourcedir/ destdir/      # 디렉토리 재귀 복사
$ cp -i source.txt dest.txt      # 덮어쓰기 전 확인
```

#### `mv` - 파일/디렉토리 이동 및 이름 변경

```bash
$ mv old.txt new.txt             # 이름 변경
$ mv file.txt /home/user/docs/   # 파일 이동
```

#### `rm` - 파일/디렉토리 삭제

```bash
$ rm file.txt              # 파일 삭제
$ rm -r mydir/             # 디렉토리 재귀 삭제
$ rm -rf mydir/            # 강제 삭제 (확인 없이)
$ rm -i file.txt           # 삭제 전 확인
```

> **주의**: `rm -rf /` 같은 명령은 시스템 전체를 삭제할 수 있으므로 절대 실행하지 마세요!

---

### 4. 파일 내용 확인 명령어

#### `cat` - 파일 전체 내용 출력

```bash
$ cat file.txt
$ cat -n file.txt          # 줄 번호 포함 출력
```

#### `head` / `tail` - 파일의 앞/뒤 부분 출력

```bash
$ head file.txt            # 처음 10줄
$ head -n 20 file.txt      # 처음 20줄
$ tail file.txt            # 마지막 10줄
$ tail -f logfile.log      # 실시간 로그 모니터링
```

#### `less` / `more` - 페이지 단위 파일 열람

```bash
$ less largefile.txt       # 페이지 단위 탐색 (q로 종료)
$ more largefile.txt       # 한 페이지씩 출력
```

---

### 5. 파일 검색 및 찾기

#### `find` - 파일/디렉토리 검색

```bash
$ find / -name "*.txt"             # 전체에서 .txt 파일 검색
$ find /home -type d -name "docs"  # 디렉토리만 검색
$ find . -size +10M                # 10MB 이상 파일 검색
$ find . -mtime -7                 # 최근 7일 내 수정된 파일
```

#### `which` - 명령어 경로 확인

```bash
$ which python
/usr/bin/python
```

---

### 6. 기타 유용한 기본 명령어

| 명령어 | 설명 |
|--------|------|
| `whoami` | 현재 로그인된 사용자 이름 |
| `hostname` | 호스트 이름 출력 |
| `date` | 현재 날짜/시간 출력 |
| `cal` | 달력 출력 |
| `clear` | 터미널 화면 지우기 |
| `echo "text"` | 문자열 출력 |
| `man [명령어]` | 명령어 매뉴얼 확인 |
| `history` | 명령어 히스토리 확인 |

---

### 정리

리눅스 CLI의 기본 명령어들은 파일/디렉토리 **탐색**, **관리**, **내용 확인**, **검색**으로 크게 나눌 수 있습니다. 이 명령어들은 리눅스를 다루는 데 있어 가장 기초적이면서도 매일 사용하는 핵심 도구들입니다.

> **Tip**: `man` 명령어를 활용하면 각 명령어의 상세한 옵션과 사용법을 확인할 수 있습니다.  
> 예: `man ls`, `man cp`, `man find`

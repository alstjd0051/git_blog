---
title: "Next.js로 GitHub Pages 블로그 만들기"
date: "2026-02-17"
description: "Next.js의 정적 내보내기 기능을 활용하여 GitHub Pages에 블로그를 배포하는 방법을 정리합니다."
tags: ["Next.js", "GitHub Pages", "튜토리얼"]
---

## Next.js 정적 내보내기란?

Next.js는 `output: 'export'` 설정을 통해 정적 HTML 파일을 생성할 수 있습니다. 이를 활용하면 GitHub Pages와 같은 정적 호스팅 서비스에 배포가 가능합니다.

### next.config.ts 설정

```typescript
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

### 글 작성 방법

`content/posts/` 폴더에 마크다운 파일을 추가하면 자동으로 블로그에 반영됩니다.

각 마크다운 파일의 상단에는 **frontmatter**를 작성합니다:

```yaml
---
title: "글 제목"
date: "2026-02-17"
description: "글에 대한 설명"
tags: ["태그1", "태그2"]
---
```

### 배포

GitHub에 push하면 GitHub Actions를 통해 자동으로 빌드 및 배포됩니다.

> 별도의 서버 없이 무료로 블로그를 운영할 수 있는 것이 가장 큰 장점입니다.

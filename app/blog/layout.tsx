import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | TylerSong Blog",
  },
  description: "개발, AI, 그리고 기술에 대한 블로그 글 모음입니다.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

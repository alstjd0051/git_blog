import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/components/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "TylerSong Blog",
  description: "개발, AI, 머신러닝, 그리고 기술에 대한 이야기를 기록합니다.",
};

export default async function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="mb-3 text-sm font-medium text-blue-400">
          안녕하세요!
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white/95 sm:text-5xl">
          TylerSong의 개발 블로그
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
          개발, AI, 머신러닝, 그리고 기술에 대한 이야기를 기록합니다.
          <br />
          배운 것들을 정리하고 공유하는 공간입니다.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/80 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm border border-blue-400/30 shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500/90 hover:shadow-blue-500/35"
          >
            블로그 보기
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-white/8 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-md border border-white/15 transition-all hover:bg-white/14 hover:text-white/90"
          >
            소개
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white/90">
              최근 글
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {recentPosts.length === 0 && (
        <section className="pb-20">
          <div className="glass-card glass-refraction rounded-2xl border-dashed px-8 py-16 text-center">
            <p className="text-lg font-medium text-white/50">
              아직 작성된 글이 없습니다.
            </p>
            <p className="mt-2 text-sm text-white/30">
              <code className="rounded bg-white/8 px-2 py-1 text-xs border border-white/6">
                content/posts/
              </code>{" "}
              폴더에 마크다운 파일을 추가해보세요.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

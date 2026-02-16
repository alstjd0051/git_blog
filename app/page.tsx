import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "../components/lib/posts";
import PostCard from "../components/PostCard";

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
        <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
          안녕하세요!
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          TylerSong의 개발 블로그
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          개발, AI, 머신러닝, 그리고 기술에 대한 이야기를 기록합니다.
          <br />
          배운 것들을 정리하고 공유하는 공간입니다.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
            className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            소개
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              최근 글
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
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
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
              아직 작성된 글이 없습니다.
            </p>
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
              <code className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">
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

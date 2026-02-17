import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/components/lib/posts";
import PostCard from "@/components/features/blog/PostCard";

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
        <p className="mb-3 text-sm font-medium text-blue-400">안녕하세요!</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white/95 sm:text-5xl">
          TylerSong 의 개발 블로그
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
          개발, AI, 머신러닝, 그리고 기술에 대한 이야기를 기록합니다.
          <br />
          배운 것들을 정리하고 공유하는 공간입니다.
        </p>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="pb-20">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {recentPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
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

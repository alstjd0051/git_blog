import { getAllPosts } from "@/components/lib/posts";
import PostCard from "@/components/PostCard";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        총 {posts.length}개의 글이 있습니다.
      </p>

      {posts.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900">
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
      )}
    </div>
  );
}

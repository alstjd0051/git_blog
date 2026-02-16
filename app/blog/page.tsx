import { getAllPosts, getAllTags } from "@/components/lib/posts";
import BlogContent from "@/components/BlogContent";

export default async function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        총 {posts.length}개의 글이 있습니다.
      </p>

      <BlogContent posts={posts} allTags={allTags} />
    </div>
  );
}

import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700 dark:hover:shadow-blue-950/30">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <time className="mt-4 block text-xs text-zinc-400 dark:text-zinc-500">
          {format(new Date(post.date), "yyyy년 M월 d일", { locale: ko })}
        </time>
      </Link>
    </article>
  );
}

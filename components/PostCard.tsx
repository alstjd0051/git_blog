import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import type { PostMeta } from "./lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="glass-card glass-card-hover glass-refraction group rounded-2xl p-6 transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur-sm border border-blue-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-white/90 transition-colors group-hover:text-blue-400">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
          {post.description}
        </p>
        <time className="mt-4 block text-xs text-white/30">
          {format(new Date(post.date), "yyyy년 M월 d일", { locale: ko })}
        </time>
      </Link>
    </article>
  );
}

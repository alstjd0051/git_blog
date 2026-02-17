import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { getPostBySlug, getAllPostSlugs } from "@/components/lib/posts";
import { notFound } from "next/navigation";
import Utterances from "@/components/features/blog/Utterances";
import BlogArticle from "@/components/features/blog/BlogArticle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Back button */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/80"
      >
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        목록으로 돌아가기
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur-sm border border-blue-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-tight text-white/95 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-white/50">
          {post.description}
        </p>
        <time className="mt-4 block text-sm text-white/30">
          {format(new Date(post.date), "yyyy년 M월 d일", { locale: ko })}
        </time>
      </header>

      {/* Divider */}
      <hr className="mb-10 border-white/8" />

      {/* Post content */}
      <BlogArticle contentHtml={post.contentHtml} />

      {/* Comments */}
      <Utterances />
    </div>
  );
}

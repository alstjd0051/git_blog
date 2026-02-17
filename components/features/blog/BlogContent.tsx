"use client";

import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostMeta } from "@/components/lib/posts";
import PostCard from "./PostCard";

const blogFilterSchema = z.object({
  sortBy: z.enum(["newest", "oldest", "title-asc", "title-desc"]),
  selectedTag: z.string().nullable(),
});

type BlogFilterForm = z.infer<typeof blogFilterSchema>;

const sortLabels: Record<BlogFilterForm["sortBy"], string> = {
  newest: "최신순",
  oldest: "오래된순",
  "title-asc": "제목 ↑",
  "title-desc": "제목 ↓",
};

interface BlogContentProps {
  posts: PostMeta[];
  allTags: string[];
}

export default function BlogContent({ posts, allTags }: BlogContentProps) {
  const { setValue, control } = useForm<BlogFilterForm>({
    resolver: zodResolver(blogFilterSchema),
    defaultValues: {
      sortBy: "newest",
      selectedTag: null,
    },
  });

  const sortBy = useWatch({ control, name: "sortBy" });
  const selectedTag = useWatch({ control, name: "selectedTag" });

  const filteredAndSorted = useMemo(() => {
    let result = [...posts];

    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => (a.date > b.date ? -1 : 1));
        break;
      case "oldest":
        result.sort((a, b) => (a.date < b.date ? -1 : 1));
        break;
      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title, "ko"));
        break;
      case "title-desc":
        result.sort((a, b) => b.title.localeCompare(a.title, "ko"));
        break;
    }

    return result;
  }, [posts, sortBy, selectedTag]);

  return (
    <>
      {/* 필터 & 정렬 컨트롤 */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* 태그 필터 */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setValue("selectedTag", null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all backdrop-blur-sm border ${
              selectedTag === null
                ? "bg-white/20 text-white border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                : "bg-white/6 text-white/50 border-white/8 hover:bg-white/12 hover:text-white/80"
            }`}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() =>
                setValue("selectedTag", selectedTag === tag ? null : tag)
              }
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all backdrop-blur-sm border ${
                selectedTag === tag
                  ? "bg-blue-500/25 text-blue-400 border-blue-400/30 shadow-[inset_0_1px_0_rgba(96,165,250,0.15)]"
                  : "bg-white/6 text-white/50 border-white/8 hover:bg-white/12 hover:text-white/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 정렬 버튼 */}
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/4 p-1 backdrop-blur-md">
          {(
            Object.keys(sortLabels) as Array<BlogFilterForm["sortBy"]>
          ).map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setValue("sortBy", option)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${
                sortBy === option
                  ? "bg-white/12 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {sortLabels[option]}
            </button>
          ))}
        </div>
      </div>

      {/* 결과 카운트 */}
      <p className="mt-4 text-sm text-white/40">
        {selectedTag && (
          <span className="mr-1 inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 text-xs text-blue-400 border border-blue-400/20">
            {selectedTag}
            <button
              type="button"
              onClick={() => setValue("selectedTag", null)}
              className="ml-0.5 hover:text-blue-300"
              aria-label="태그 필터 해제"
            >
              ×
            </button>
          </span>
        )}
        {filteredAndSorted.length}개의 글
      </p>

      {/* 포스트 목록 */}
      {filteredAndSorted.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {filteredAndSorted.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="glass-card glass-refraction mt-6 rounded-2xl border border-dashed border-white/12 px-8 py-16 text-center">
          <p className="text-lg font-medium text-white/50">
            {selectedTag
              ? `"${selectedTag}" 태그의 글이 없습니다.`
              : "아직 작성된 글이 없습니다."}
          </p>
          {selectedTag && (
            <button
              type="button"
              onClick={() => setValue("selectedTag", null)}
              className="mt-3 text-sm text-blue-400 hover:underline"
            >
              전체 글 보기
            </button>
          )}
        </div>
      )}
    </>
  );
}

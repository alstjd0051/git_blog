"use client";

import { useState, useMemo } from "react";
import type { PostMeta } from "./lib/posts";
import PostCard from "./PostCard";

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

const sortLabels: Record<SortOption, string> = {
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
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              selectedTag === null
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                selectedTag === tag
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 정렬 버튼 */}
        <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-700 dark:bg-zinc-800/50">
          {(Object.keys(sortLabels) as SortOption[]).map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${
                sortBy === option
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {sortLabels[option]}
            </button>
          ))}
        </div>
      </div>

      {/* 결과 카운트 */}
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {selectedTag && (
          <span className="mr-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            {selectedTag}
            <button
              onClick={() => setSelectedTag(null)}
              className="ml-0.5 hover:text-blue-800 dark:hover:text-blue-200"
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
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {selectedTag
              ? `"${selectedTag}" 태그의 글이 없습니다.`
              : "아직 작성된 글이 없습니다."}
          </p>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-3 text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              전체 글 보기
            </button>
          )}
        </div>
      )}
    </>
  );
}

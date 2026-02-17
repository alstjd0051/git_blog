"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { PostMeta } from "@/components/lib/posts";

export default function PostCard({ post, index = 0 }: { post: PostMeta; index?: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.6,
        delay: index * 0.12,
        ease: "power3.out",
      });

      gsap.set(patternRef.current, { opacity: 0 });
      gsap.set(spotlightRef.current, { opacity: 0 });
      gsap.set(borderGlowRef.current, { opacity: 0 });
    },
    { scope: cardRef }
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.to(patternRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(spotlightRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(borderGlowRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(patternRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(spotlightRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(borderGlowRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!cardRef.current || !spotlightRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        background: `radial-gradient(300px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 60%)`,
        duration: 0.2,
        overwrite: true,
      });

      gsap.to(borderGlowRef.current, {
        background: `radial-gradient(200px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.4), transparent 70%)`,
        duration: 0.2,
        overwrite: true,
      });
    },
    []
  );

  return (
    <article
      ref={cardRef}
      className="post-card-gsap glass-card glass-refraction group relative rounded-2xl p-6 will-change-transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* 호버 시 나타나는 회로 패턴 */}
      <div ref={patternRef} className="post-card-pattern" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`circuit-${post.slug}`}
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              {/* 수평/수직 회로 라인 */}
              <path
                d="M0 20h15M25 20h15M20 0v15M20 25v15"
                stroke="rgba(59,130,246,0.25)"
                strokeWidth="0.5"
                fill="none"
              />
              {/* 노드 포인트 */}
              <circle cx="20" cy="20" r="1.5" fill="rgba(59,130,246,0.35)" />
              <circle cx="0" cy="20" r="1" fill="rgba(139,92,246,0.3)" />
              <circle cx="40" cy="20" r="1" fill="rgba(139,92,246,0.3)" />
              <circle cx="20" cy="0" r="1" fill="rgba(139,92,246,0.3)" />
              <circle cx="20" cy="40" r="1" fill="rgba(139,92,246,0.3)" />
              {/* 대각선 연결 */}
              <path
                d="M5 5l5 5M35 5l-5 5M5 35l5-5M35 35l-5-5"
                stroke="rgba(6,182,212,0.2)"
                strokeWidth="0.4"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#circuit-${post.slug})`} />
        </svg>
      </div>

      {/* 마우스 따라다니는 스포트라이트 */}
      <div ref={spotlightRef} className="post-card-spotlight" aria-hidden="true" />

      {/* 보더 글로우 */}
      <div ref={borderGlowRef} className="post-card-border-glow" aria-hidden="true" />

      <Link href={`/blog/${post.slug}`} className="relative z-10 block">
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

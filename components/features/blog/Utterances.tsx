"use client";

import { useEffect, useRef } from "react";

const REPO = "alstjd0051/alstjd0051.github.io";

interface UtterancesProps {
  issueTerm?: "pathname" | "url" | "title";
  theme?: string;
  label?: string;
}

export default function Utterances({
  issueTerm = "pathname",
  theme = "github-dark",
  label = "comments",
}: UtterancesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Strict Mode 이중 마운트 방지: 이미 스크립트가 있으면 건너뜀
    if (container.querySelector('script[src*="utteranc"]')) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", REPO);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", theme);
    script.setAttribute("label", label);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
  }, [issueTerm, theme, label]);

  return (
    <section className="mt-16 border-t border-white/10 pt-10">
      <h2 className="mb-6 text-lg font-semibold text-white/80">댓글</h2>
      <div ref={containerRef} />
    </section>
  );
}

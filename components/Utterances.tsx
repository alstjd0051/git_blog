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

    // 이미 로드된 utterances가 있으면 제거
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", REPO);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", theme);
    script.setAttribute("label", label);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [issueTerm, theme, label]);

  return (
    <section className="mt-16 border-t border-white/10 pt-10">
      <h2 className="mb-6 text-lg font-semibold text-white/80">댓글</h2>
      <div ref={containerRef} />
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useMermaidModal } from "@/components/stores/useMermaidModal";

interface BlogArticleProps {
  contentHtml: string;
}

export default function BlogArticle({ contentHtml }: BlogArticleProps) {
  const articleRef = useRef<HTMLDivElement>(null);
  const openModal = useMermaidModal((s) => s.open);

  useEffect(() => {
    if (!articleRef.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "#1e3a5f",
        primaryTextColor: "#e2e8f0",
        primaryBorderColor: "#3b82f6",
        lineColor: "#475569",
        secondaryColor: "#1e293b",
        tertiaryColor: "#0f172a",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        fontSize: "14px",
        nodeBorder: "#3b82f6",
        mainBkg: "#1e293b",
        clusterBkg: "#0f172a",
        edgeLabelBackground: "#1e293b",
      },
      flowchart: {
        htmlLabels: true,
        curve: "basis",
        padding: 16,
      },
    });

    const diagrams = articleRef.current.querySelectorAll(".mermaid-diagram");

    diagrams.forEach(async (el, i) => {
      const source = el.getAttribute("data-mermaid");
      if (!source) return;

      const id = `mermaid-graph-${i}-${Date.now()}`;

      try {
        const { svg } = await mermaid.render(id, source);

        el.innerHTML = `
          <div class="mermaid-svg-wrap">${svg}</div>
          <div class="mermaid-inline-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            <span>클릭하여 확대</span>
          </div>
        `;
        el.classList.add("mermaid-rendered");

        el.addEventListener("click", () => openModal(svg));
      } catch {
        el.innerHTML = `<pre class="mermaid-error"><code>${source}</code></pre>`;
      }
    });
  }, [contentHtml, openModal]);

  return (
    <article
      ref={articleRef}
      className="prose"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}

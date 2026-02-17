"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface GitHubAvatarProps {
  username: string;
  fallback: string;
  size?: number;
}

export default function GitHubAvatar({
  username,
  fallback,
  size = 72,
}: GitHubAvatarProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef<SVGCircleElement>(null);

  const avatarUrl = `https://github.com/${username}.png?size=${size * 2}`;

  useEffect(() => {
    const img = new Image();
    img.src = avatarUrl;
    img.onload = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
  }, [avatarUrl]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    e.currentTarget.style.transform = `perspective(200px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
  }, []);

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform =
        "perspective(200px) rotateY(0deg) rotateX(0deg) scale(1)";
      setHovered(false);
    },
    [],
  );

  const circumference = Math.PI * (size - 4);

  return (
    <div
      className="group relative shrink-0 cursor-pointer select-none"
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar */}
      <div
        className="absolute inset-[3px] overflow-hidden rounded-full transition-[transform,box-shadow] duration-300 ease-out"
        style={{
          boxShadow: hovered
            ? "0 0 24px rgba(99,102,241,0.35), 0 0 48px rgba(168,85,247,0.15)"
            : "0 0 0 rgba(99,102,241,0)",
        }}
      >
        {status === "loaded" ? (
          <img
            src={avatarUrl}
            alt={`${username} GitHub avatar`}
            width={size}
            height={size}
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/80 to-purple-600/80 text-2xl font-bold text-white backdrop-blur-sm">
            {status === "loading" ? (
              <span className="animate-pulse text-lg">···</span>
            ) : (
              fallback
            )}
          </div>
        )}
      </div>

      {/* Online-style indicator dot */}
      <span
        className="absolute bottom-0 right-0 block h-4 w-4 rounded-full border-2 border-[#0a0a0f] bg-emerald-400 transition-transform duration-300"
        style={{ transform: hovered ? "scale(1.3)" : "scale(1)" }}
      />
    </div>
  );
}

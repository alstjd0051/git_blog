"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Poppins, Chocolate_Classical_Sans } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const chocolateClassicalSans = Chocolate_Classical_Sans({
  variable: "--font-chocolate-classical-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Header 등장 애니메이션
  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    );
  });

  // 로고 글자 등장 애니메이션 + hover/active 핸들러
  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        ".logo-char",
        { y: 30, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.06,
          duration: 0.7,
          delay: 0.15,
          ease: "back.out(1.7)",
        },
      );
    },
    { scope: logoRef },
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.to(".logo-char", {
      y: -4,
      scale: 1.15,
      stagger: { each: 0.03, from: "center" },
      duration: 0.35,
      ease: "back.out(1.7)",
      overwrite: "auto",
    });
    gsap.to(".logo-underline", {
      scaleX: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(".logo-char", {
      y: 0,
      scale: 1,
      stagger: { each: 0.02, from: "edges" },
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: "auto",
    });
    gsap.to(".logo-underline", {
      scaleX: 0,
      duration: 0.3,
      ease: "power3.in",
    });
  });

  const handleMouseDown = contextSafe(() => {
    gsap.to(".logo-char", {
      scale: 0.88,
      y: 2,
      duration: 0.12,
      ease: "power2.in",
      overwrite: "auto",
    });
  });

  const handleMouseUp = contextSafe(() => {
    gsap.to(".logo-char", {
      scale: 1.15,
      y: -4,
      duration: 0.3,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  });

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div
          ref={logoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="relative"
        >
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 ${chocolateClassicalSans.variable} flex items-center gap-0.5`}
            style={{
              lineHeight: 1,
              fontFamily: "var(--font-chocolate-classical-sans)",
            }}
          >
            {["T", "y", "l", "e", "r"].map((char, i) => (
              <span
                key={i}
                className="logo-char inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
            <span className="inline-block w-1" />
            <span className="text-blue-600 dark:text-blue-400 flex">
              {["S", "o", "n", "g"].map((char, i) => (
                <span
                  key={`s-${i}`}
                  className="logo-char inline-block will-change-transform"
                >
                  {char}
                </span>
              ))}
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-zinc-700 transition-all dark:bg-zinc-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-700 dark:bg-zinc-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-700 transition-all dark:bg-zinc-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-zinc-200 px-6 py-4 dark:border-zinc-800 sm:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

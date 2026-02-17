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

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -30, opacity: 0, backdropFilter: "blur(0px)" },
      {
        y: 0,
        opacity: 1,
        backdropFilter: "blur(40px)",
        duration: 0.8,
        ease: "power3.out",
      },
    );
  });

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
      className="sticky top-0 z-50 border-b border-white/10 bg-white/6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_30px_rgba(0,0,0,0.15)]"
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
            className={`text-xl font-bold tracking-tight text-white/90 ${chocolateClassicalSans.variable} flex items-center gap-0.5`}
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
            <span className="flex text-blue-400">
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
                className={`text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-400"
                    : "text-white/50 hover:text-white/90"
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
            className={`h-0.5 w-5 bg-white/70 transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-white/70 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-white/70 transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/8 bg-white/4 px-6 py-4 backdrop-blur-xl sm:hidden">
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
                    ? "text-blue-400"
                    : "text-white/50"
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

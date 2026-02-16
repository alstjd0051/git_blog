import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "TylerSong에 대한 소개입니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        About
      </h1>

      <div className="mt-10 space-y-8">
        {/* Profile section */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
              TS
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                TylerSong
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Developer & AI Enthusiast
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! 개발과 AI에 관심이 많은 TylerSong입니다.
            <br />
            새로운 기술을 배우고 경험을 공유하는 것을 좋아합니다.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            기술 스택
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Machine Learning",
              "Docker",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            링크
          </h3>
          <div className="mt-4 space-y-3">
            <a
              href="https://github.com/alstjd0051"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

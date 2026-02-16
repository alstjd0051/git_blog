import { backendStacks, frontendStacks } from "@/components/lib/about_data";
import SkillBar from "@/components/pages/about/SkillBar";

export default function TechStackSection() {
  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <h3 className="text-lg font-bold text-white/90">기술 스택</h3>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-400/80">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
              />
            </svg>
            Backend
          </h4>
          <div className="space-y-3">
            {backendStacks.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-purple-400/80">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Frontend
          </h4>
          <div className="space-y-3">
            {frontendStacks.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

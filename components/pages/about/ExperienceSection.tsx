import { experiences } from "@/components/lib/about_data";

export default function ExperienceSection() {
  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <h3 className="text-lg font-bold text-white/90">경력 요약</h3>

      <div className="mt-6 space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:bg-linear-to-br before:from-blue-400 before:to-purple-500"
          >
            <span className="inline-block rounded-md bg-white/8 px-2 py-0.5 text-xs font-semibold text-white/50">
              {exp.period}
            </span>
            <h4 className="mt-1 font-semibold text-white/80">{exp.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-white/45">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

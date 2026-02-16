import { values } from "@/components/lib/about_data";

export default function ValuesSection() {
  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <h3 className="text-lg font-bold text-white/90">개발 철학</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-xl bg-white/4 p-4 border border-white/5 transition-colors hover:bg-white/8"
          >
            <div className="text-2xl">{v.icon}</div>
            <h4 className="mt-2 font-semibold text-white/80">{v.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-white/45">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

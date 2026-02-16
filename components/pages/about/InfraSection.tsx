import {
  cicdStacks,
  dbStacks,
  devopsStacks,
  toolStacks,
} from "@/components/lib/about_data";
import TagChip from "@/components/pages/about/TagChip";

export default function InfraSection() {
  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <h3 className="text-lg font-bold text-white/90">
        DevOps · CI/CD · Database · Tools
      </h3>

      <div className="mt-6 space-y-5">
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
            DevOps &amp; Infra
          </h4>
          <div className="flex flex-wrap gap-2">
            {devopsStacks.map((t) => (
              <TagChip key={t} label={t} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
            CI / CD
          </h4>
          <div className="flex flex-wrap gap-2">
            {cicdStacks.map((t) => (
              <TagChip key={t} label={t} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
            Database &amp; ORM
          </h4>
          <div className="flex flex-wrap gap-2">
            {dbStacks.map((t) => (
              <TagChip key={t} label={t} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
            Tools &amp; Collaboration
          </h4>
          <div className="flex flex-wrap gap-2">
            {toolStacks.map((t) => (
              <TagChip key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

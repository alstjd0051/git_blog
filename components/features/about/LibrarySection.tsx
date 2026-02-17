import { backendLibs, frontendLibs } from "@/components/lib/about_data";
import TagChip from "./TagChip";

export default function LibrarySection() {
  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <h3 className="text-lg font-bold text-white/90">
        라이브러리 &amp; 에코시스템
      </h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-blue-400/80">
            Backend Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {backendLibs.map((lib) => (
              <TagChip key={lib} label={lib} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-purple-400/80">
            Frontend Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {frontendLibs.map((lib) => (
              <TagChip key={lib} label={lib} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import GitHubAvatar from "@/components/shared/ui/GitHubAvatar";
import {
  CAREER_START_YEAR,
  GITHUB_USERNAME,
} from "@/components/lib/about_data";

export default function ProfileSection() {
  const years = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <section className="glass-card glass-refraction rounded-2xl p-8">
      <div className="flex items-center gap-5">
        <GitHubAvatar
          username={GITHUB_USERNAME}
          fallback="TylerSong"
          size={72}
        />
        <div>
          <h2 className="text-xl font-bold text-white/90">송민성</h2>
          <p className="text-sm text-white/40">
            Fullstack Web Developer · {years}년차
          </p>
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-white/55">
        안녕하세요, 만 {years}년 차 풀스택 웹 개발자{" "}
        <span className="font-semibold text-white/80">송민성</span>
        입니다.
        <br />
        백엔드에서는 <strong className="text-white/75">NestJS</strong>,{" "}
        <strong className="text-white/75">Java</strong>,{" "}
        <strong className="text-white/75">Node.js</strong>를 주력으로 사용하고,
        프론트엔드에서는 <strong className="text-white/75">Next.js</strong>와{" "}
        <strong className="text-white/75">React</strong>로 사용자 중심의 웹
        경험을 만들어 왔습니다.
      </p>
      <p className="mt-3 leading-relaxed text-white/55">
        확장 가능한 아키텍처 설계와 깔끔한 코드, 그리고 최적의 사용자 경험을
        추구합니다. 새로운 기술을 빠르게 습득하고, 팀과 함께 성장하는 것을
        중요하게 생각합니다.
      </p>
    </section>
  );
}

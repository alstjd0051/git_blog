import type { Metadata } from "next";
import ProfileSection from "@/components/features/about/ProfileSection";
import ExperienceSection from "@/components/features/about/ExperienceSection";
import TechStackSection from "@/components/features/about/TechStackSection";
import LibrarySection from "@/components/features/about/LibrarySection";
import InfraSection from "@/components/features/about/InfraSection";
import ValuesSection from "@/components/features/about/ValuesSection";
import LinksSection from "@/components/features/about/LinksSection";

export const metadata: Metadata = {
  title: "About",
  description: "풀스택 웹 개발자 송민성을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white/95">About</h1>

      <div className="mt-10 space-y-8">
        <ProfileSection />
        <ExperienceSection />
        <TechStackSection />
        <LibrarySection />
        <InfraSection />
        <ValuesSection />
        <LinksSection />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import ProfileSection from "@/components/pages/about/ProfileSection";
import ExperienceSection from "@/components/pages/about/ExperienceSection";
import TechStackSection from "@/components/pages/about/TechStackSection";
import LibrarySection from "@/components/pages/about/LibrarySection";
import InfraSection from "@/components/pages/about/InfraSection";
import ValuesSection from "@/components/pages/about/ValuesSection";
import LinksSection from "@/components/pages/about/LinksSection";

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

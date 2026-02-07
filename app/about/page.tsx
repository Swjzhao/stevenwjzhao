import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/HeroSection";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import SkillsSection from "@/components/about/SkillsSection";

export const metadata: Metadata = {
  title: "About | We Are Dreamers",
  description:
    "Learn about Steven Zhao — from 2x Google intern to CTO. Computer Engineering at University of Toronto.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <ExperienceTimeline />
      <SkillsSection />
    </main>
  );
}

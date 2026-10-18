import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GitHubActivity } from "@/components/GitHubActivity";
import { PhotoCollageSection } from "@/components/PhotoCollageSection";
import { QuoteSection } from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 00 Hero Section with Terminal & Install Snippet */}
      <Hero />

      {/* Categorized Skills & Tech Stack Marquee */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* GitHub & Activity Feed */}
      <GitHubActivity />

      {/* Heart Photo Collage Section (Curated Vibes) */}
      <PhotoCollageSection />

      {/* Quote Card */}
      <QuoteSection />
    </main>
  );
}

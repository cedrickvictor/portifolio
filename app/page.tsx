import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main
      id="home"
      className="relative flex-1 text-slate-900 dark:text-slate-100"
    >
      <Navbar />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="absolute -top-24 left-1/2 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.32),transparent_55%)] blur-2xl" />
        <div className="absolute top-24 left-1/3 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.24),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 right-0 h-[520px] w-[920px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 noise" />
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

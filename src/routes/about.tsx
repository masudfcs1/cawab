import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { AboutSection, TimelineSection, FoundersSection, ExecutiveBoardSection } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About CAWAB" },
    { name: "description", content: "About the Cantonmentians' Alliance & Welfare Association of Bangladesh." },
    { property: "og:title", content: "About CAWAB" },
    { property: "og:description", content: "Mission, vision, founders and executive committee of CAWAB." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <AboutSection />
      <TimelineSection />
      <FoundersSection />
      <ExecutiveBoardSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

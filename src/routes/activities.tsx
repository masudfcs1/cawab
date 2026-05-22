import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { EventsSection, AlumniVolunteerSection } from "@/components/sections";

export const Route = createFileRoute("/activities")({
  head: () => ({ meta: [
    { title: "Activities — CAWAB" },
    { name: "description", content: "Events, sports, cultural programs, volunteer work and relief by CAWAB." },
    { property: "og:title", content: "CAWAB Activities" },
    { property: "og:description", content: "Where the alliance comes alive — programs throughout the year." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <EventsSection />
      <AlumniVolunteerSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

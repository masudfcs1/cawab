import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { HeroSection } from "@/components/HeroSection";
import {
  AboutSection, TimelineSection, FoundersSection, DepartmentsSection,
  InstitutionsSection, ExecutiveBoardSection, EventsSection,
  AlumniVolunteerSection, NewsSection, ContactSection,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <AnimatedNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <FoundersSection />
        <DepartmentsSection />
        <InstitutionsSection />
        <ExecutiveBoardSection />
        <EventsSection />
        <AlumniVolunteerSection />
        <NewsSection />
        <ContactSection />
      </main>
      <AnimatedFooter />
      <BackToTop />
    </>
  );
}

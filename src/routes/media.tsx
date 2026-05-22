import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { NewsSection } from "@/components/sections";

export const Route = createFileRoute("/media")({
  head: () => ({ meta: [
    { title: "Media — CAWAB" },
    { name: "description", content: "Gallery, videos, publications and press releases from CAWAB." },
    { property: "og:title", content: "CAWAB Media" },
    { property: "og:description", content: "Stories and dispatches from the alliance." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <NewsSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

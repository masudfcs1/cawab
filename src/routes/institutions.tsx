import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { InstitutionsSection } from "@/components/sections";

export const Route = createFileRoute("/institutions")({
  head: () => ({ meta: [
    { title: "Institutions — CAWAB" },
    { name: "description", content: "60+ cantonment institutions under the CAWAB family." },
    { property: "og:title", content: "CAWAB Institutions" },
    { property: "og:description", content: "Browse cantonment public, English, board, BN and BAF Shaheen colleges." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <InstitutionsSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

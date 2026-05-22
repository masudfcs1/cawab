import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { ContactSection } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — CAWAB" },
    { name: "description", content: "Contact CAWAB for membership, partnerships, press or volunteering." },
    { property: "og:title", content: "Contact CAWAB" },
    { property: "og:description", content: "Get in touch with the Cantonmentians' Alliance secretariat." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <ContactSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

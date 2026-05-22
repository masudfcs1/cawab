import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { DepartmentsSection } from "@/components/sections";

export const Route = createFileRoute("/departments")({
  head: () => ({ meta: [
    { title: "Departments — CAWAB" },
    { name: "description", content: "Seventeen CAWAB departments leading welfare across domains." },
    { property: "og:title", content: "CAWAB Departments" },
    { property: "og:description", content: "Explore the 17 wings of the Cantonmentians' Alliance." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <DepartmentsSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

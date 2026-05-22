import { createFileRoute } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { BackToTop } from "@/components/BackToTop";
import { AlumniVolunteerSection, ContactSection } from "@/components/sections";
import { Reveal, SectionTitle } from "@/components/ui-bits";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({ meta: [
    { title: "Membership — CAWAB" },
    { name: "description", content: "Become a CAWAB member. Benefits, verification and alumni registration." },
    { property: "og:title", content: "Join CAWAB" },
    { property: "og:description", content: "Verified alumni membership for cantonmentians of Bangladesh." },
  ]}),
  component: () => (
    <>
      <AnimatedNavbar />
      <div className="h-20 bg-gradient-hero" />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><SectionTitle eyebrow="Membership" title="Join the alliance. Stand with cantonmentians." subtitle="Verified members gain access to the alumni registry, events, scholarships and welfare programs." center /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Standard", price: "৳ 1,500 / yr", perks: ["Verified alumni profile","Event invitations","Newsletter access"] },
              { name: "Patron", price: "৳ 5,000 / yr", perks: ["Everything in Standard","Priority event seating","Welfare voting rights","Patron badge"], featured: true },
              { name: "Lifetime", price: "৳ 25,000", perks: ["All Patron benefits","Lifetime registry access","Permanent CAWAB ID"] },
            ].map((p) => (
              <div key={p.name} className={`relative rounded-3xl p-8 ${p.featured ? "bg-gradient-hero text-white shadow-elevated" : "border border-border bg-card"}`}>
                {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">Most chosen</div>}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <div className={`mt-2 font-display text-3xl ${p.featured ? "text-accent" : "text-primary"}`}>{p.price}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.perks.map((x) => <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {x}</li>)}
                </ul>
                <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${p.featured ? "bg-gradient-gold text-accent-foreground shadow-glow" : "border border-border hover:border-accent"}`}>Apply now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AlumniVolunteerSection />
      <ContactSection />
      <AnimatedFooter />
      <BackToTop />
    </>
  ),
});

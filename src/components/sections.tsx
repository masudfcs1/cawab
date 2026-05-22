import { motion } from "framer-motion";
import { TIMELINE, DEPARTMENTS, INSTITUTION_CATEGORIES } from "@/data/site";
import { Reveal, SectionTitle } from "./ui-bits";
import { useState } from "react";
import { Search, Calendar, MapPin, Users, HeartHandshake, Newspaper, Mail, Phone, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionTitle eyebrow="About CAWAB" title="A national fellowship forged in cantonment classrooms." subtitle="CAWAB is a non-profit alliance of cantonmentians — alumni of Bangladesh's cantonment schools, colleges and academies — united to advance welfare, education and service to society." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Mission", d: "Empower cantonmentians through welfare, scholarship and structured service to the nation." },
              { t: "Vision", d: "A united, disciplined alumni network that shapes responsible citizens and leaders." },
              { t: "Values", d: "Honor, integrity, fellowship, excellence and unwavering commitment to community." },
              { t: "Reach", d: "60+ institutions, 17 departments, and growing chapters across Bangladesh and abroad." },
            ].map((b) => (
              <div key={b.t} className="glass rounded-2xl p-5">
                <div className="font-display text-lg font-semibold text-primary">{b.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" />
            <div className="glass-strong rounded-[2rem] p-2">
              <div className="overflow-hidden rounded-[1.75rem] bg-gradient-hero p-10 text-white shadow-elevated">
                <Quote className="h-10 w-10 text-accent" />
                <p className="mt-6 font-display text-2xl leading-snug">
                  "Once a cantonmentian, always a cantonmentian. CAWAB is the bond that keeps us in formation — long after the bugle fades."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-gold" />
                  <div>
                    <div className="font-semibold">Maj. Gen. (Retd.) A. Rahman</div>
                    <div className="text-xs text-white/60">Founding Patron</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section id="history" className="relative bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><SectionTitle eyebrow="Our Story" title="A decade of fellowship and service." center /></Reveal>
        <div className="relative mt-10">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-primary to-transparent md:left-1/2" />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="font-display text-5xl font-bold text-gradient-gold">{t.year}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                  <div className="hidden md:block" />
                  <motion.span
                    className="absolute left-4 top-2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-gradient-gold shadow-glow md:left-1/2"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-army-deep" />
                  </motion.span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FoundersSection() {
  const founders = [
    { name: "Maj. Gen. (Retd.) A. Rahman", role: "Founding Patron" },
    { name: "Brig. Gen. (Retd.) S. Karim", role: "Co-Founder" },
    { name: "Col. (Retd.) M. Hossain", role: "Co-Founder & Secretary" },
    { name: "Dr. Tahmina Akter", role: "Founding Trustee" },
  ];
  return (
    <section id="founders" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><SectionTitle eyebrow="Founders" title="The visionaries behind the alliance." center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-elevated">
                <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-gold opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                <div className="relative">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-hero text-3xl font-display text-accent">
                    {f.name.split(" ").pop()?.[0]}
                  </div>
                  <h3 className="mt-5 text-center font-display text-lg font-semibold text-foreground">{f.name}</h3>
                  <p className="mt-1 text-center text-xs uppercase tracking-[0.2em] text-accent">{f.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DepartmentsSection() {
  return (
    <section id="departments" className="relative bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><SectionTitle eyebrow="Departments" title="Seventeen wings, one mission." subtitle="Each department leads a domain of welfare, from disaster relief to education to global outreach." /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-elevated">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                <d.icon className="h-9 w-9 text-primary transition-colors group-hover:text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstitutionsSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const all = INSTITUTION_CATEGORIES.flatMap((c) => c.items.map((i) => ({ name: i, cat: c.key, label: c.label })));
  const filtered = all.filter((i) => (cat === "all" || i.cat === cat) && i.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <section id="institutions" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><SectionTitle eyebrow="Institutions" title="60+ cantonment institutions. One family." subtitle="From cantonment public schools to BAF Shaheen and BN colleges — every cantonmentian belongs." /></Reveal>

        <div className="glass mb-8 flex flex-col gap-4 rounded-2xl p-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search institutions…"
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCat("all")} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${cat === "all" ? "bg-gradient-gold text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>All</button>
            {INSTITUTION_CATEGORIES.map((c) => (
              <button key={c.key} onClick={() => setCat(c.key)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${cat === c.key ? "bg-gradient-gold text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>{c.label}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i, idx) => (
            <motion.div
              key={i.name + idx}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 hover:shadow-elevated"
            >
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-gold" />
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{i.label}</div>
              <h3 className="mt-2 font-display text-base font-semibold text-foreground">{i.name}</h3>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-12 text-center text-sm text-muted-foreground">No institutions match your search.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ExecutiveBoardSection() {
  const board = [
    { name: "Brig. Gen. (Retd.) S. Karim", role: "President" },
    { name: "Col. (Retd.) M. Hossain", role: "General Secretary" },
    { name: "Lt. Col. (Retd.) F. Ahmed", role: "Treasurer" },
    { name: "Dr. Tahmina Akter", role: "Vice President" },
    { name: "Engr. Rashed Iqbal", role: "Joint Secretary" },
    { name: "Adv. N. Chowdhury", role: "Legal Advisor" },
  ];
  return (
    <section id="executive" className="relative bg-gradient-hero py-28 text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Executive Board
            </div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">The standing committee leading CAWAB.</h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold font-display text-xl text-accent-foreground">
                    {b.name.split(" ").pop()?.[0]}
                  </div>
                  <div>
                    <div className="font-display text-lg">{b.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent">{b.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsSection() {
  const events = [
    { date: "Dec 16", title: "Victory Day National Convention", place: "Dhaka Cantonment", icon: Calendar },
    { date: "Feb 21", title: "Mother Language Memorial March", place: "Central Shaheed Minar", icon: HeartHandshake },
    { date: "Mar 26", title: "Independence Day Service Drive", place: "Nationwide chapters", icon: Users },
    { date: "Jun 10", title: "Inter-Cantonment Sports Meet", place: "Mirpur Cantonment", icon: MapPin },
  ];
  return (
    <section id="events" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><SectionTitle eyebrow="Events & Activities" title="Where the alliance comes alive." /></Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="group flex items-start gap-5 rounded-3xl border border-border bg-card p-6 hover:shadow-elevated">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-hero text-white">
                  <div className="text-center">
                    <e.icon className="mx-auto h-5 w-5 text-accent" />
                    <div className="mt-1 text-xs font-bold">{e.date}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{e.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {e.place}</p>
                  <button className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition group-hover:translate-x-1">Details →</button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AlumniVolunteerSection() {
  return (
    <section className="relative bg-secondary/40 py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        {[
          { icon: Users, title: "Alumni Network", desc: "Reconnect with batchmates across 60+ institutions. Verified registry, regional chapters and lifelong fellowship.", cta: "Register as Alumni" },
          { icon: HeartHandshake, title: "Volunteer Programs", desc: "Join disaster response teams, health camps, education drives, and skill-building initiatives across Bangladesh.", cta: "Become a Volunteer" },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-hero p-10 text-white shadow-elevated">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-gold opacity-20 blur-3xl transition-opacity group-hover:opacity-40" />
              <c.icon className="h-12 w-12 text-accent" />
              <h3 className="mt-6 font-display text-3xl font-bold">{c.title}</h3>
              <p className="mt-3 text-white/70">{c.desc}</p>
              <Link to="/membership" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-accent-foreground">
                {c.cta} →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function NewsSection() {
  const posts = [
    { tag: "Announcement", title: "CAWAB launches 2026 National Scholarship Fund", date: "May 12, 2026" },
    { tag: "Report", title: "Annual welfare report: 18,000 beneficiaries served", date: "Apr 30, 2026" },
    { tag: "Story", title: "Inside the CAWAB disaster response in Sylhet floods", date: "Apr 04, 2026" },
  ];
  return (
    <section id="press" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow="News & Publications" title="Dispatches from the alliance." />
            <Link to="/media" className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground hover:border-accent hover:text-accent">All publications →</Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.article whileHover={{ y: -6 }} className="group h-full overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative h-44 overflow-hidden bg-gradient-hero">
                  <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
                  <Newspaper className="absolute right-6 top-6 h-12 w-12 text-accent/60" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{p.tag}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground">{p.date}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-gradient-hero py-28 text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" /> Contact
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Get in touch with CAWAB.</h2>
          <p className="mt-4 max-w-md text-white/70">Reach out for membership, partnerships, press, or to volunteer with one of our wings.</p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> CAWAB Secretariat, Dhaka Cantonment 1206</div>
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> info@cawab.org.bd</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> +880 2 8870000</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={(e) => e.preventDefault()} className="glass-strong space-y-4 rounded-3xl p-8 text-foreground">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
              <input placeholder="Email" type="email" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <input placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            <textarea placeholder="Your message…" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            <button type="submit" className="w-full rounded-xl bg-gradient-gold py-3 font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.02]">Send Message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

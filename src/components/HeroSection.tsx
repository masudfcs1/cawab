import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-cantonment.jpg";
import logo from "@/assets/cawab-logo.png";
import { STATS } from "@/data/site";
import { Counter } from "./ui-bits";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-army-deep text-white selection:bg-accent selection:text-accent-foreground">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Cantonment parade ground at golden hour"
          className="h-full w-full scale-105 object-cover opacity-40 mix-blend-overlay"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-army-deep/90 via-army/60 to-army-deep" />
        {/* Cinematic gold spotlight */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)" }}
        />
        {/* Subtle drifting particles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/70"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.85, 0.15] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>

      {/* Corner insignia framing */}
      <div className="pointer-events-none absolute left-8 top-24 h-20 w-20 border-l border-t border-accent/25" />
      <div className="pointer-events-none absolute right-8 top-24 h-20 w-20 border-r border-t border-accent/25" />
      <div className="pointer-events-none absolute bottom-8 left-8 h-20 w-20 border-b border-l border-accent/25" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 border-b border-r border-accent/25" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        {/* Logo crest with rotating insignia ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-8 flex h-32 w-32 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full border border-dashed border-accent/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-3 rotate-45 rounded-xl border border-accent/50" />
          <motion.img
            src={logo}
            alt="CAWAB crest"
            className="relative h-20 w-20 drop-shadow-[0_10px_40px_rgba(212,175,55,0.55)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Eyebrow with ribbon lines */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            Official Portal of CAWAB
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
        </motion.div>

        {/* Main headline */}
        <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-[7.5rem]">
          {["Discipline.", "Honor."].map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="mr-4 inline-block text-white"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.8 }}
            className="block italic"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #F3E5AB 0%, #D4AF37 55%, #B8860B 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Welfare.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-2xl text-base font-light leading-relaxed tracking-wide text-white/70 md:text-lg"
        >
          The Cantonmentians' Alliance & Welfare Association of Bangladesh — a national
          fellowship of alumni from cantonment schools, colleges and academies serving
          community and country with unwavering discipline.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/membership"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-glow transition-transform hover:scale-[1.04]"
          >
            Become a Member
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-accent/10 hover:text-accent"
          >
            Discover CAWAB
          </Link>
        </motion.div>

        {/* Premium stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.8 }}
          className="mt-20 grid w-full max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-army/20 shadow-elevated backdrop-blur-2xl lg:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`group relative p-8 lg:p-10 ${
                i < STATS.length - 1 ? "lg:border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "border-r lg:border-r" : ""} border-white/5 text-left`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-accent/70">
                {s.label}
              </p>
              <h3 className="relative font-display text-4xl font-bold text-white lg:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </h3>
              <div className="relative mt-2 h-0.5 w-6 bg-accent/30 transition-all group-hover:w-14 group-hover:bg-accent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

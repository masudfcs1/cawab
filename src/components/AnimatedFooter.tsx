import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "@/assets/cawab-logo.png";

export function AnimatedFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img src={logo} alt="CAWAB" className="h-14 w-14" />
            <div>
              <h3 className="font-display text-2xl font-bold">CAWAB</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">Est. 2015 · Bangladesh</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/70">
            Cantonmentians' Alliance & Welfare Association of Bangladesh — a national fellowship
            uniting alumni of cantonment institutions for service, scholarship and solidarity.
          </p>
          <div className="mt-6 flex gap-3">
            {[FaFacebook, FaYoutube, FaLinkedin, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3 }}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:border-accent hover:text-accent"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["About","Departments","Institutions","Activities","Membership","Contact"].map(l => (
              <li key={l}><Link to={`/${l.toLowerCase()}` as any} className="hover:text-accent">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Headquarters</h4>
          <p className="mt-4 text-sm text-white/70">
            CAWAB Secretariat<br />
            Dhaka Cantonment, Dhaka 1206<br />
            Bangladesh
          </p>
          <p className="mt-3 text-sm text-white/70">info@cawab.org.bd</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} CAWAB. All rights reserved.</span>
          <span>Crafted with discipline & honor.</span>
        </div>
      </div>
    </footer>
  );
}

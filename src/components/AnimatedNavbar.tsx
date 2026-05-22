import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/cawab-logo.png";
import { NAV, DEPARTMENTS, INSTITUTION_CATEGORIES } from "@/data/site";

export function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobile(false); setOpen(null); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="CAWAB"
            className="h-12 w-12 object-contain drop-shadow"
            whileHover={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.6 }}
          />
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="font-display text-lg font-bold tracking-wide">CAWAB</div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Alliance & Welfare</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            const hasMenu = "children" in item || "mega" in item;
            return (
              <div key={item.label} className="relative" onMouseEnter={() => hasMenu && setOpen(item.label)}>
                <Link
                  to={item.to as any}
                  className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-gold opacity-90"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {open === item.label && hasMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 ${
                        "mega" in item ? "w-[min(90vw,860px)]" : "w-64"
                      }`}
                    >
                      <div className="glass-strong rounded-2xl p-4 shadow-elevated">
                        {"mega" in item && (item as any).mega === "departments" && (
                          <div className="grid grid-cols-2 gap-1">
                            {DEPARTMENTS.slice(0, 12).map((d) => (
                              <Link key={d.name} to="/departments" className="flex items-center gap-3 rounded-lg p-2.5 text-sm hover:bg-accent/15">
                                <d.icon className="h-5 w-5 text-accent" />
                                <span className="text-foreground">{d.name}</span>
                              </Link>
                            ))}
                            <Link to="/departments" className="col-span-2 mt-2 rounded-lg bg-gradient-gold px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
                              View all 17 departments →
                            </Link>
                          </div>
                        )}
                        {"mega" in item && (item as any).mega === "institutions" && (
                          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                            {INSTITUTION_CATEGORIES.map((cat) => (
                              <div key={cat.key}>
                                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">{cat.label}</div>
                                <ul className="space-y-1">
                                  {cat.items.slice(0, 3).map((i) => (
                                    <li key={i}>
                                      <Link to="/institutions" className="block rounded px-1 py-0.5 text-xs text-muted-foreground hover:text-foreground">
                                        {i}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                        {"children" in item && (
                          <ul className="space-y-1">
                            {(item as any).children.map((c: any) => (
                              <li key={c.label}>
                                <Link to={c.to as any} className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent/15">
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/membership"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105"
          >
            Join CAWAB
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMobile((v) => !v)}
            className={`lg:hidden rounded-full p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to as any}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-accent/15"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

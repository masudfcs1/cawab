import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <motion.button
      aria-label="Back to top"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 30 }}
      style={{ scale }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-accent-foreground shadow-glow hover:scale-110 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}

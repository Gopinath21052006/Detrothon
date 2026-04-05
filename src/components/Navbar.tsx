import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#timeline", label: "Timeline" },
  { href: "#problems", label: "Problems" },
  { href: "#prizes", label: "Prizes" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "/documentation", label: "Proof" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-neon-cyan/20 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between overflow-hidden">

          {/* LOGO — FIXED */}
          <a
            href="#"
            className="relative z-10 font-display text-2xl font-black tracking-widest"
          >
            <span className="gradient-text">DETROTHON</span>
            {/* glow */}
            <span className="absolute inset-0 blur-xl bg-neon-cyan/30 -z-10" />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm uppercase tracking-widest font-accent text-muted-foreground hover:text-neon-cyan transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-neon group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA — DESKTOP ONLY */}
          <div className="hidden lg:block">
            <a href="#register" className="btn-neon px-6 py-2 text-sm">
              Enter Portal
            </a>
          </div>

          {/* MOBILE MENU BUTTON — FOR <1024px */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-neon-cyan"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-display tracking-widest text-neon-cyan hover:text-neon-magenta"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#register"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="btn-neon px-12 py-4 text-lg"
              onClick={() => setIsMobileOpen(false)}
            >
              ENTER DETROTHON
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

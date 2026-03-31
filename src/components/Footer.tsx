import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl">
      
      {/* Top scanning line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70"
      />

      <div className="section-container py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT – Brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-3xl font-black gradient-text">
              DETROTHON
            </h3>
            <p className="text-muted-foreground mt-2">
              SSM College of Arts & Science
            </p>
            <p className="text-neon-cyan text-sm uppercase tracking-widest mt-1">
              Detroit Team
            </p>
            <p className="text-muted-foreground mt-2">
              Smartiva Technologies
            </p>
          </motion.div>

          {/* CENTER – Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
            An inter-departmental hackathon designed to promote innovation,
           collaboration, and real-world problem solving among students.
            </p>

            <div className="mt-4 flex justify-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Hackathon</span>
              <span>•</span>
              <span>Innovation</span>
              <span>•</span>
              <span>Technology</span>
            </div>
          </motion.div>

          {/* RIGHT – Social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end gap-4"
          >
            {[
              { icon: Phone, href: "https://wa.me/918778304114" },
              { icon: Instagram, href: "https://instagram.com/detroithack" },
              { icon: Mail, href: "mailto:gopinath02105@gmail.com" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-muted-foreground text-sm">
          © 2026 Detrothon — Designed & built by the Detroit Team
        </div>
      </div>
    </footer>
  );
}

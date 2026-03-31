import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Medal, Award, FileText } from "lucide-react";

const prizes = [
  {
    icon: Medal,
    title: "Winner",
    description: "Medals",
    color: "from-yellow-400 to-amber-600"
  },
  {
    icon: Award,
    title: "Runner-Up",
    description: "Merit Certificates",
    color: "from-neon-cyan to-blue-500"
  },
  {
    icon: FileText,
    title: "All Participants",
    description: "Participation Certificates",
    color: "from-neon-magenta to-pink-600"
  }
];


export default function PrizesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Prizes & Recognition</h2>
          <p className="section-subtitle mx-auto">
            Prestige. Achievement. Legacy.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {prizes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass-card p-12 text-center relative overflow-hidden">

                {/* Hologram shimmer */}
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(0,255,255,0.12),transparent)]"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Soft breathing glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`relative w-28 h-28 mx-auto mb-10 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center`}
                >
                  <p.icon className="w-14 h-14 text-white" />
                </motion.div>

                <h3 className="font-display text-2xl font-bold mb-2">
                  {p.title}
                </h3>
                <p className="uppercase tracking-widest text-muted-foreground text-sm">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground mt-20 max-w-2xl mx-auto"
        >
          Detrothon recognizes academic excellence, innovation, and interdisciplinary achievement.
        </motion.p>
      </div>
    </section>
  );
}

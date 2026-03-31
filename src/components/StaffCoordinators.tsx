import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, User } from "lucide-react";

const coordinators = [
  { name: "Ms. Deepika. S", year: "I Year" },
  { name: "Mrs. Banumathi. B", year: "II Year" },
  { name: "Mr. Sudhanesh. R", year: "III Year" },
];

export default function StaffCoordinators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">

      {/* Cyber glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl">
            Staff Command Unit
          </h2>
          <p className="section-subtitle mx-auto">
            Faculty mentors powering Detrothon operations
          </p>
        </motion.div>

        {/* Hologram Panel */}
        <div className="relative max-w-5xl mx-auto">

          {/* Frame */}
          <div className="absolute inset-0 rounded-3xl border border-neon-purple/30 blur-md" />
          <div className="absolute inset-0 rounded-3xl border border-neon-purple/60" />

          <div className="relative glass-card rounded-3xl p-8 md:p-12">


            {/* Coordinators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coordinators.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="glass-card p-8 text-center border border-white/5 hover:border-neon-purple/40 transition">

                    {/* Hologram Icon */}
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-neon-purple/40">
                      <User className="w-8 h-8 text-neon-purple" />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-neon-purple/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <h3 className="font-display text-lg md:text-xl font-bold">
                      {c.name}
                    </h3>

                    <p className="mt-2 text-neon-purple text-xs uppercase tracking-widest">
                      {c.year} Coordinator
                    </p>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

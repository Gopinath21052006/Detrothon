import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { id: 1, name: "Gopinath R.", role: "Technical Head", dept: "Computer Science", tag: "G" },
  { id: 3, name: "Ishwarya N.", role: "Design Lead", dept: "Computer Science (DSA)", tag: "I" },
  { id: 2, name: "Dharani R.", role: "Outreach Coordinator", dept: "Computer Science (DSA)", tag: "D" },
  { id: 4, name: "Karthikeyan J.", role: "Lead Organizer", dept: "Computer Science (AI)", tag: "K" }
];


export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="section-title">Detroit Core Team</h2>
          <p className="section-subtitle mx-auto">
            The organizing team behind Detrothon
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="glass-card p-4 md:p-6 text-center min-h-[300px] md:min-h-[360px] flex flex-col items-center">

                {/* ORB */}
                <div className="relative mb-6 flex items-center justify-center
                                w-[100px] h-[100px]
                                sm:w-[120px] sm:h-[120px]
                                md:w-[160px] md:h-[160px]">

                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-neon-cyan/40"
                    />

                    <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-black" />

                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-full h-full flex items-center justify-center font-display font-black text-neon-cyan"
                      style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}
                    >
                      {m.tag}
                    </motion.div>
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="font-display text-sm md:text-base font-bold leading-tight line-clamp-2">
                  {m.name}
                </h3>

                <p className="text-neon-cyan text-[10px] md:text-xs uppercase tracking-wider mt-2 line-clamp-2">
                  {m.role}
                </p>

                <p className="text-muted-foreground text-[10px] md:text-xs mt-1">
                  {m.dept}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

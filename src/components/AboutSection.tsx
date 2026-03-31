import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student-Led",
    description:
      "Organized by students, for students — an inter-departmental platform to showcase innovation and teamwork."
  },
  {
    icon: Lightbulb,
    title: "Inter-Departmental",
    description:
      "Bringing together Computer Science, Basic Science , and Commerce into one collaborative innovation arena."
  },
  {
    icon: Target,
    title: "Real-World Impact",
    description:
      "Solve practical problems and build solutions that address real academic, scientific, and business needs."
  }
];


const stats = [
  { value: "3", label: "Departments" },
  { value: "4", label: "Problem Statements" },
  { value: "7", label: "Days to Build" },
  { value: "∞", label: "Innovation Opportunities" }
];


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Cyber glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,150,0.08),transparent_60%)]" />

      <div className="section-container relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">What is Detrothon?</h2>
          <p className="section-subtitle mx-auto">
            An inter-departmental innovation hackathon where students 
            from Computer Science, Basic Science ,  and Commerce collaborate to solve real-world problems.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ y: -12 }}
                className="glass-card relative overflow-hidden p-8 group"
              >
                {/* Light sweep */}
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.05),transparent,rgba(255,0,150,0.05))] opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* Icon Portal */}
                <div className="relative mb-8 w-20 h-20 mx-auto flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-neon-cyan/40"
                  />
                  <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-center mb-4">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 text-center"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.08 }}
              className="glass-card p-8"
            >
              <div className="font-display text-5xl gradient-text mb-2">
                {s.value}
              </div>
              <div className="font-accent uppercase tracking-widest text-muted-foreground text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

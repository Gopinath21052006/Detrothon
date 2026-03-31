import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, FlaskConical, Briefcase } from "lucide-react";

const tracks = [
  {
    icon: Monitor,
    title: "Computer Science",
    color: "cyan",
    description:
      "Design and develop software solutions including web and mobile applications, AI/ML systems, and intelligent automation tools.",
    skills: ["Web Development", "Mobile Apps", "AI/ML", "Automation"]
  },
 {
  icon: FlaskConical,
  title: "Basic Science ",
  color: "magenta",
  description:
    "Apply biochemical and laboratory science principles to address challenges in healthcare, environmental science, and life-science research.",
  skills: ["Lab Research", "Biotechnology", "Healthcare", "Environmental Science"]
},
  {
    icon: Briefcase,
    title: "Commerce",
    color: "purple",
    description:
      "Develop business solutions including fintech applications, marketing platforms, and innovative entrepreneurial systems.",
    skills: ["FinTech", "Business Tools", "E-commerce", "Analytics"]
  }
];

const getColor = (c: string) => {
  if (c === "cyan") return { ring: "border-neon-cyan", text: "text-neon-cyan" };
  if (c === "magenta") return { ring: "border-neon-magenta", text: "text-neon-magenta" };
  return { ring: "border-neon-purple", text: "text-neon-purple" };
};

export default function TracksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="tracks" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,150,0.05),transparent_60%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Choose Your Track</h2>
          <p className="section-subtitle mx-auto">
            Each track offers a specialized innovation space. Choose the area where you can make the most impact.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            const color = getColor(track.color);

            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                whileHover={{ y: -12 }}
                className="glass-card p-8 relative group overflow-hidden"
              >
                {/* Light sweep */}
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.04),transparent,rgba(255,0,150,0.04))] opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* ICON CORE */}
                <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">
                  {/* Stable rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border-2 ${color.ring} opacity-30`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl glass-card flex items-center justify-center relative z-10 ${color.text}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Text */}
                <h3 className={`font-display text-2xl font-bold text-center mb-4 ${color.text}`}>
                  {track.title}
                </h3>

                <p className="text-muted-foreground text-center mb-6">
                  {track.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {track.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-accent uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

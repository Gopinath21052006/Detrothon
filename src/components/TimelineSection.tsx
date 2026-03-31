import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  FileText,
  UserPlus,
  Clock,
  CheckSquare,
  Trophy,
  Code,
  Presentation
} from "lucide-react";

const phases = [
 { 
  id: 1, 
  title: "Guidelines & PPT Format Released", 
  date: "12 Jan 2026", 
  icon: FileText, 
  description: "Official guidelines, problem statements, and PPT format released" 
},

{ 
  id: 2, 
  title: "Registration & PPT Submission Opens", 
  date: "13 Jan 2026", 
  icon: UserPlus, 
  description: "Teams register and submit their PPT through the Google Form" 
},

{
  id: 3,
  title: "Registration & PPT Submission Closes",
  date: "24 Jan 2026 · 11:59 PM",
  icon: Clock,
  description: "Last date to register your team and upload the PPT"
}
,

{ 
  id: 4, 
  title: "PPT Evaluation", 
  date: "25 Jan 2026", 
  icon: CheckSquare, 
  description: "Jury evaluates all submitted PPTs" 
},

{ 
  id: 5, 
  title: "Shortlisted Teams Announced", 
  date: "25 Jan 2026 after 08:00 PM", 
  icon: Trophy, 
  description: "Teams selected for the build phase are announced" 
},

{ 
  id: 6, 
  title: "Build Phase", 
  date: "26 – 30 Jan 2026", 
  icon: Code, 
  description: "Shortlisted teams develop their projects" 
},

{ 
  id: 7, 
  title: "Final Showcase", 
  date: "31 Jan 2026", 
  icon: Presentation, 
  description: "Final project demo and judging" 
},

{ 
  id: 8, 
  title: "Winners Announced", 
  date: "First Week of February 2026", 
  icon: Trophy, 
  description: "Final winners are declared" 
}
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="timeline" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.07),transparent_70%)]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Event Timeline</h2>
          <p className="section-subtitle mx-auto">
            Your journey from registration to the final battlefield
          </p>
        </motion.div>

        {/* DESKTOP VERSION */}
        {!isMobile && (
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2 }}
              className="absolute left-1/2 top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple"
            />

            <div className="space-y-24">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className="grid grid-cols-[1fr_80px_1fr] gap-6 items-center"
                >
                  {/* Left */}
                  <div className="flex justify-end">
                    {i % 2 === 0 && <TimelineCard phase={phase} align="right" />}
                  </div>

                  {/* Node */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-full bg-background border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.7)]"
                    >
                      <phase.icon className="w-5 h-5 text-neon-cyan" />
                    </motion.div>
                  </div>

                  {/* Right */}
                  <div className="flex justify-start">
                    {i % 2 !== 0 && <TimelineCard phase={phase} align="left" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* MOBILE VERSION */}
        {isMobile && (
          <div className="max-w-xl mx-auto space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  {i !== phases.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-neon-cyan to-neon-magenta" />
                  )}
                </div>

                <div className="glass-card p-4 w-full">
                  <span className="text-neon-cyan text-xs">{phase.date}</span>
                  <h3 className="font-display font-bold mt-1">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* Reusable Card */
function TimelineCard({ phase, align }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`glass-card p-6 max-w-md ${align === "right" ? "text-right" : "text-left"}`}
    >
      <span className="text-neon-cyan text-sm">{phase.date}</span>
      <h3 className="mt-2 text-xl font-display font-bold">{phase.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{phase.description}</p>
    </motion.div>
  );
}

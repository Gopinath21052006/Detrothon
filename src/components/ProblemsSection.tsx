import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Monitor, FlaskConical, Briefcase } from "lucide-react";

const problems = [
 {
  id: 1,
  title: "Smart Campus Student Support & Service Platform",
  track: "Computer Science",
  problem:
    "Students face difficulties in reporting and tracking academic, administrative, and campus service issues such as maintenance, cleanliness, internet connectivity, and other support needs due to the lack of a centralized digital system.",
  goal:
    "Design and develop a digital platform that allows students to submit service requests, track their status, and receive updates, while enabling administrators to manage requests and view basic reports to improve campus services.",
  expectedOutcome:
    "A functional web or mobile prototype that demonstrates student request submission, status tracking, and basic reporting for campus administrators."
},{
  id: 2,
  title: "Digital Expense & Budget Management System",
  track: "Commerce",
  problem:
    "Many students find it difficult to track daily expenses, manage budgets, and understand their spending patterns, which leads to poor financial planning.",
  goal:
    "Develop a digital system that allows students to record expenses, categorize spending, and generate monthly budget reports with simple financial insights.",
  expectedOutcome:
    "A working model or dashboard that records student expenses and displays summaries through charts, reports, and budget analysis."
},{
  id: 3,
  title: "Digital Nutrition & Diet Recommendation System",
  track: "Basic Science ",
  problem:
    "Many people lack proper guidance on nutrition and healthy eating based on their age, body metrics, and lifestyle, which leads to poor dietary habits and health issues.",
  goal:
    "Design a digital system that provides basic nutrition and diet recommendations using biochemical and nutritional principles to promote healthy food awareness.",
  expectedOutcome:
    "A functional prototype that generates diet suggestions based on predefined biochemical or nutritional rules."
}
, {
  id: 4,
  title: "Open Innovation",
  track: "Open Innovation",
  problem:
    "Participants can identify any real-world problem related to Computer Science, Basic Science , or Commerce that affects society, industry, or daily life.",
  goal:
    "Encourage teams to propose original, innovative, and practical solutions to problems of their own choice.",
  expectedOutcome:
    "A well-defined problem statement, a feasible solution, and a project proposal that demonstrates creativity, impact, and interdisciplinary thinking."
}
];

const getIcon = (track: string) => {
  if (track === "Computer Science") return Monitor;
  if (track === "Basic Science ") return FlaskConical;
  return Briefcase;
};

const getColor = (track: string) => {
  if (track === "Computer Science") return "text-neon-cyan border-neon-cyan/30";
  if (track === "Basic Science ") return "text-neon-magenta border-neon-magenta/30";
  return "text-neon-purple border-neon-purple/30";
};

export default function ProblemsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" ref={ref} className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.08),transparent_70%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Problem Statements</h2>
          <p className="section-subtitle mx-auto">
            Choose a challenge and build something extraordinary
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {problems.map((p, i) => {
            const Icon = getIcon(p.track);
            const color = getColor(p.track);
            const open = openId === p.id;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenId(open ? null : p.id)}
                  className={`w-full glass-card p-6 flex justify-between items-center transition-all ${
                    open
                      ? "border-neon-cyan/60 shadow-[0_0_40px_rgba(0,255,255,0.35)]"
                      : "hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg border ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className={`text-xs uppercase tracking-wider ${color}`}>
                        {p.track}
                      </span>
                      <h3 className="font-display text-lg font-bold mt-1">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div animate={{ rotate: open ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="glass-card border-t-0 rounded-t-none p-6 space-y-5 relative">
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.08),transparent,rgba(255,0,150,0.08))] opacity-50" />

                        <div>
                          <h4 className="text-neon-cyan uppercase text-sm mb-1">
                            Problem
                          </h4>
                          <p className="text-muted-foreground">{p.problem}</p>
                        </div>

                        <div>
                          <h4 className="text-neon-magenta uppercase text-sm mb-1">
                            Goal
                          </h4>
                          <p className="text-muted-foreground">{p.goal}</p>
                        </div>

                        <div>
                          <h4 className="text-neon-purple uppercase text-sm mb-1">
                            Expected Outcome
                          </h4>
                          <p className="text-muted-foreground">
                            {p.expectedOutcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

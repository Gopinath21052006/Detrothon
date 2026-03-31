import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Who can participate in Detrothon?",
    answer:
      "All students currently enrolled in SSM College of Arts & Science from Computer Science, Bio-Chemistry, and Commerce departments are eligible to participate."
  },
  {
    id: 2,
    question: "Is there any registration fee?",
    answer:
      "No, Detrothon is completely free to participate. There are no registration fees or hidden charges."
  },
  {
    id: 3,
    question: "What is the team size?",
    answer:
      "Teams can have 2 to 4 members. Students who are unable to form a team due to valid reasons are allowed to participate individually."
  },
  {
    id: 4,
    question: "Do I need coding experience?",
    answer:
      "Not necessarily. Computer Science teams may develop software solutions, while Bio-Chemistry and Commerce teams can focus on research, analysis, business models, or no-code solutions."
  },
  {
    id: 5,
    question: "What should the PPT include?",
    answer:
      "Your PPT should include the problem statement, proposed solution, technology or business approach, system workflow, impact, and team details, as per the official PPT format."
  },
  {
    id: 6,
    question: "How do we submit our team details and PPT?",
    answer:
      "Teams must submit both their registration details and project PPT through the official Google Form before the deadline."
  },
  {
    id: 7,
    question: "Where does the build phase take place?",
    answer:
      "The build phase is completely online. Shortlisted teams will work remotely from their own location."
  },
  {
    id: 8,
    question: "What are the prizes and certificates?",
    answer:
      "The winning team will receive Medals. Runner-up teams will receive Merit Certificates. All shortlisted teams will receive Participation Certificates."
  },
  {
    id: 9,
    question: "Can we change our track after submitting the form?",
    answer:
      "No. Once the Google Form is submitted, the selected track cannot be changed. Please choose carefully before submission."
  },
  {
    id: 10,
    question: "Will mentors or guidance be provided?",
    answer:
      "Yes. During the build phase, shortlisted teams will receive guidance and feedback from mentors and faculty members."
  },
  {
    id: 11,
    question: "Do we need to build a fully working project?",
    answer:
      "A working prototype is encouraged, but a clearly explained concept with a strong implementation plan is also acceptable."
  },
  {
    id: 12,
    question: "How will projects be evaluated?",
    answer:
      "Projects will be evaluated based on innovation, problem relevance, feasibility, presentation quality, and overall impact."
  },
  {
    id: 13,
    question: "Can students from different departments form a team?",
    answer:
      "Yes. Inter-departmental teams are highly encouraged to promote collaboration and innovative thinking."
  },
  {
    id: 14,
    question: "What happens if our team is not shortlisted?",
    answer:
      "Only shortlisted teams will receive Participation Certificates. Teams that are not shortlisted will not receive certificates."
  }
];





export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know before entering Detrothon
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={`w-full glass-card px-6 py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-neon-cyan/50 shadow-[0_0_30px_rgba(0,255,255,0.25)]"
                      : "hover:border-neon-cyan/30"
                  }`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-display text-base md:text-lg font-semibold">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neon-cyan" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="relative glass-card border-t-0 rounded-t-none px-6 py-5 text-muted-foreground">
                        {/* subtle animated glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-magenta/10"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        />
                        <p className="relative z-10">{faq.answer}</p>
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

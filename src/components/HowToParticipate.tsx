import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, FileText, CheckCircle, Code, Presentation } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Register & PPT',
    description: 'Submit team details and PPT via Google Form',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Evaluation',
    description: 'Jury reviews submitted PPTs',
  },
  {
    step: 3,
    icon: CheckCircle,
    title: 'Shortlisting',
    description: 'Selected teams move to the build phase',
  },
  {
    step: 4,
    icon: Code,
    title: 'Build',
    description: 'Teams develop their projects',
  },
  {
    step: 5,
    icon: Presentation,
    title: 'Finale',
    description: 'Final project presentation and judging',
  },
];



const HowToParticipate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How to Participate</h2>
          <p className="section-subtitle mx-auto">
            Your journey from idea to final showcase
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number and icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-neon-cyan flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                >
                  <item.icon className="w-8 h-8 text-neon-cyan" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-neon text-background text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="md:hidden mt-4 text-neon-cyan"
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = Math.max(target - now, 0);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="glass-card relative min-w-[80px] md:min-w-[110px] px-4 py-4 md:py-6 text-center"
        >
          {/* Subtle internal glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 opacity-60" />

          <AnimatePresence mode="popLayout">
            <motion.div
              key={unit.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative font-display text-3xl md:text-4xl font-bold gradient-text"
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-2 text-xs md:text-sm font-accent uppercase tracking-wider text-muted-foreground">
            {unit.label}
          </div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-xl border border-neon-cyan/30"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  );
}

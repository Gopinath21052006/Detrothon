import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center pt-24"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,120,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      {/* Scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
            style={{ top: `${25 + i * 15}%` }}
            animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-neon-cyan/50"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">

        {/* Badge */}
        {/* Sponsor + College */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-wrap justify-center items-center gap-6 mb-8"
>
  <br />
  {/* PARTNERS BAR */}
<div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-16 mb-16 px-6">

  {/* SSM College */}
  <div className="flex items-center gap-6 px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_0_60px_rgba(0,255,255,0.12)]">
    <img
      src="/ssm.png"
      alt="SSM College of Arts and Science"
      className="h-14 sm:h-16 w-auto object-contain"
    />
    <div className="leading-tight">
      <p className="text-sm uppercase tracking-widest text-white/50">
        {/* Organized By */}
      </p>
      <p className="text-lg sm:text-xl font-bold text-white">
        SSM College of Arts & Science
      </p>
    </div>
  </div>

  {/* Smartiva */}
  <div className="flex items-center gap-6 px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_0_60px_rgba(255,0,150,0.12)]">
    <img
      src="/smartiva.png"
      alt="Smartiva Technologies LLP"
      className="h-14 sm:h-16 w-auto object-contain"
    />
    <div className="leading-tight">
      <p className="text-sm uppercase tracking-widest text-white/50">
        {/* Powered By */}
      </p>
      <p className="text-lg sm:text-xl font-bold text-white">
        Smartiva Technologies LLP
      </p>
    </div>
  </div>

</div>

</motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-10"
        >
          <Zap className="w-4 h-4 text-neon-cyan" />
          <span className="font-accent text-sm uppercase tracking-widest text-neon-cyan">
            An Inter-Departmental Hackathon
          </span>
        </motion.div>

        {/* Title */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-black leading-none tracking-tight
                     text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]"
        >
          <span className="gradient-text">DETRO</span>
          <span className="text-foreground">THON</span>
          <span className="text-neon-magenta ml-3">2026</span>
        </motion.h1> */}


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-display font-black tracking-tight leading-none
            flex flex-wrap justify-center items-center
            whitespace-nowrap
            text-[clamp(2.5rem,7vw,8rem)]
          "
        >
          <span className="gradient-text">DETRO</span>
          <span className="text-foreground">THON</span>
          <span className="text-neon-magenta ml-3">2026</span>
        </motion.h1>
        


        {/* Organizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 mb-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Organized by <span className="text-primary font-semibold">Detroit Team</span>
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            SSM College of Arts & Science
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <p className="font-accent text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Registration & PPT submission closes in
          </p>
          <CountdownTimer targetDate="2026-01-25T00:00:00" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#register" className="btn-neon pulse-glow">
            Register Now
          </a>
          <a href="#about" className="btn-neon-outline ">
            Learn More
          </a>
        </motion.div>
<br />
      </div>

      
     

    </section>
  );
}

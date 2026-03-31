import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Lock, Clock, Upload, Download } from "lucide-react";

export default function RegisterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const now = new Date();
  const openDate = new Date("2026-01-13T00:00:00");
  const closeDate = new Date("2026-01-25T00:00:00");

  const status =
    now < openDate ? "coming" : now > closeDate ? "closed" : "open";

  const statusMap: any = {
    open: { text: "Registration & PPT Submission Open", color: "text-green-400", icon: Rocket },
    closed: { text: "Submission Portal Closed", color: "text-red-400", icon: Lock },
    coming: { text: "Opens 13 Jan 2026", color: "text-yellow-400", icon: Clock }
  };

  const StatusIcon = statusMap[status].icon;

  return (
    <section
      id="register"
      ref={ref}
      className="relative py-24 md:py-40 overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)]" />

      <div className="section-container relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="section-title">Enter Detrothon</h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-muted-foreground mt-4">
            Register your team and submit your PPT through a single official portal
          </p>
        </motion.div>

        {/* Portal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto glass-card px-6 sm:px-10 py-14 sm:py-20 text-center overflow-hidden"
        >
          {/* Upload Orb */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative z-10 mx-auto mb-8 
                       w-24 h-24 sm:w-32 sm:h-32 
                       rounded-full border-2 border-neon-cyan
                       flex items-center justify-center
                       shadow-[0_0_60px_rgba(0,255,255,0.6)]"
          >
            <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-neon-cyan" />
          </motion.div>

          {/* Text */}
          <h3 className="relative z-10 font-display text-2xl sm:text-3xl md:text-4xl mb-3">
            Detrothon Registration & Submission Portal
          </h3>

          <p
            className={`relative z-10 font-accent uppercase tracking-widest mb-6 text-xs sm:text-sm ${statusMap[status].color}`}
          >
            <StatusIcon className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {statusMap[status].text}
          </p>

          {/* Main Button */}
          <a
            href="https://forms.gle/zbdYVDaDWPd861d16"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 btn-neon text-sm sm:text-lg px-10 sm:px-14 py-4 sm:py-6 block ${
              status !== "open" ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            REGISTER & SUBMIT PPT
          </a>

          {/* PPT DOWNLOAD */}
          <a
            href="/DETROTHON_PPT_FORMAT.pptx"
            download
            className="relative z-10 mt-6 inline-flex items-center gap-3 px-8 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition"
          >
            <Download className="w-5 h-5" />
            Download PPT Format
          </a>

          <p className="relative z-10 text-muted-foreground text-xs sm:text-sm mt-6">
            Registration & PPT submission closes on Jan 24, 11:59 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}

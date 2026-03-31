import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function ShortlistPopup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="glass-card max-w-md w-full p-8 text-center relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              <h3 className="text-2xl font-display font-bold mb-3">
                Shortlisted Teams Announced 🎉
              </h3>

              <p className="text-muted-foreground mb-6">
                The shortlisted teams for DETROTHON 2026 have been officially announced.
                Check the list to see if your team has qualified for the build phase.
              </p>

              <button
                onClick={() => navigate("/shortlisted-teams")}
                className="btn-neon px-10 py-4"
              >
                View Shortlisted Teams
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

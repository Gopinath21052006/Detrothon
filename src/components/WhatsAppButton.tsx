import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  // ⏰ Auto popup every 1 hour
  useEffect(() => {
    const lastSeen = localStorage.getItem("detrothon_wa_seen");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastSeen || now - Number(lastSeen) > oneHour) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("detrothon_wa_seen", now.toString());
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.9)]"
      >
        <div className="w-7 h-7">
          <svg viewBox="0 0 32 32" className="w-full h-full fill-white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.56 2.133 8.012L0 32l8.241-2.104C10.636 31.264 13.297 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.091c-2.47 0-4.889-.664-6.993-1.922l-.502-.298-4.89 1.249 1.305-4.76-.327-.489C3.71 20.684 3 18.363 3 16c0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zm7.13-9.687c-.39-.195-2.313-1.14-2.67-1.273-.356-.13-.617-.195-.877.195-.26.39-1.008 1.273-1.235 1.533-.227.26-.454.292-.844.097-.39-.195-1.646-.606-3.137-1.93-1.16-1.033-1.943-2.308-2.17-2.698-.227-.39-.024-.6.17-.794.174-.173.39-.454.584-.682.195-.227.26-.39.39-.65.13-.26.065-.487-.032-.682-.097-.195-.877-2.11-1.2-2.89-.314-.757-.634-.655-.877-.668-.227-.012-.487-.015-.747-.015-.26 0-.682.097-1.04.487-.357.39-1.364 1.33-1.364 3.243s1.397 3.76 1.59 4.02c.195.26 2.75 4.204 6.67 5.89.932.402 1.66.643 2.227.823.936.297 1.79.255 2.463.155.75-.112 2.313-.946 2.64-1.86.325-.913.325-1.695.227-1.86-.097-.163-.357-.26-.747-.455z" />
          </svg>
        </div>
      </motion.button>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 60 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-md glass-card p-8 text-center">

                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* WhatsApp Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,1)]">
                  <div className="w-10 h-10">
                    <svg viewBox="0 0 32 32" className="w-full h-full fill-white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.56 2.133 8.012L0 32l8.241-2.104C10.636 31.264 13.297 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.091c-2.47 0-4.889-.664-6.993-1.922l-.502-.298-4.89 1.249 1.305-4.76-.327-.489C3.71 20.684 3 18.363 3 16c0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zm7.13-9.687c-.39-.195-2.313-1.14-2.67-1.273-.356-.13-.617-.195-.877.195-.26.39-1.008 1.273-1.235 1.533-.227.26-.454.292-.844.097-.39-.195-1.646-.606-3.137-1.93-1.16-1.033-1.943-2.308-2.17-2.698-.227-.39-.024-.6.17-.794.174-.173.39-.454.584-.682.195-.227.26-.39.39-.65.13-.26.065-.487-.032-.682-.097-.195-.877-2.11-1.2-2.89-.314-.757-.634-.655-.877-.668-.227-.012-.487-.015-.747-.015-.26 0-.682.097-1.04.487-.357.39-1.364 1.33-1.364 3.243s1.397 3.76 1.59 4.02c.195.26 2.75 4.204 6.67 5.89.932.402 1.66.643 2.227.823.936.297 1.79.255 2.463.155.75-.112 2.313-.946 2.64-1.86.325-.913.325-1.695.227-1.86-.097-.163-.357-.26-.747-.455z" />
          </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3">
                  Join Detrothon Community
                </h3>

                <p className="text-muted-foreground mb-6">
                  Get hackathon updates, deadlines, FAQs and announcements directly on WhatsApp.
                </p>

                <a
                  href="https://chat.whatsapp.com/L16GLZ7I0SE4i7SB9hJEib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-lg bg-[#25D366] font-bold text-black shadow-[0_0_25px_rgba(37,211,102,0.8)] hover:scale-105 transition"
                >
                  Join WhatsApp Group
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

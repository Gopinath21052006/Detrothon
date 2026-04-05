import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 AUTO GENERATE IMAGES
const generateImages = (level, count, ext = "jpeg") => {
  return Array.from({ length: count }, (_, i) =>
    `/docs/${level}/img${i + 1}.${ext}`
  );
};

export default function Documentation() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  const levelConfig = [
    { name: "Level 0", key: "level0", count: 11 },
    { name: "Level 1", key: "level1", count: 6 },
    { name: "Level 2", key: "level2", count: 14 },
    { name: "Level 3", key: "level3", count: 14 },
  ];

  // 🔥 OPEN IMAGE
  const openViewer = (images, index) => {
    setCurrentImages(images);
    setSelectedIndex(index);
  };

  const closeViewer = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  // 🔥 RENDER LEVEL
  const renderLevel = (title, images) => (
    <section className="section-container py-20">

      <h2 className="font-display gradient-text text-center mb-12 text-3xl">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass-card overflow-hidden cursor-pointer group"
            onClick={() => openViewer(images, i)}
          >
            <img
              src={src}
              alt="proof"
              className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">

      {/* HEADER */}
      <div className="section-container text-center mb-16">
        <h1 className="font-display gradient-text text-4xl">
          Project Proof & Evaluation
        </h1>
      </div>

      {/* LEVELS */}
      {levelConfig.map((lvl, index) => {
        const images = generateImages(lvl.key, lvl.count);
        return <div key={index}>{renderLevel(lvl.name, images)}</div>;
      })}

      {/* 🔥 FULLSCREEN GALLERY */}
      <AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* CLICK OUTSIDE */}
      <div
        className="absolute inset-0"
        onClick={closeViewer}
      />

      {/* CENTER WRAPPER */}
      <div
        className="
          relative 
          flex 
          items-center 
          justify-center 
          w-full 
          h-full 
          px-4 
          sm:px-6 
          md:px-10
        "
      >
        {/* IMAGE */}
      <motion.img
  key={selectedIndex}
  src={currentImages[selectedIndex]}
  alt="preview"
  className="
    block
    w-full
    h-full
    max-w-[95vw]
    max-h-[95vh]
    object-contain
  "
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ opacity: 0 }}
/>

        {/* CLOSE */}
        <button
          className="absolute top-4 right-5 md:top-6 md:right-8 text-white text-2xl md:text-3xl"
          onClick={closeViewer}
        >
          ✕
        </button>

        {/* LEFT */}
        <button
          className="absolute left-2 md:left-6 text-white text-3xl md:text-4xl"
          onClick={prevImage}
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          className="absolute right-2 md:right-6 text-white text-3xl md:text-4xl"
          onClick={nextImage}
        >
          ›
        </button>

        {/* COUNTER */}
<div className="fixed bottom-0 left-0 w-full flex justify-center pb-4 z-[10000]">
  <div className="text-white text-xs md:text-sm bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
    {selectedIndex + 1} / {currentImages.length}
  </div>
</div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
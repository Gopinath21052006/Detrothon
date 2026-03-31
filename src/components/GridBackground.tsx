import { motion } from 'framer-motion';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
      
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 grid-bg opacity-30"
        animate={{ y: [0, 50] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(340 100% 56% / 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 50% / 0.1) 2px, hsl(185 100% 50% / 0.1) 4px)',
          }}
        />
      </div>
    </div>
  );
};

export default GridBackground;

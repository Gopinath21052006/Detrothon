import { motion, useMotionValue, useSpring, useTransform,Variants } from "framer-motion";
import {  Zap,Sparkles,Users,Target,ChevronRight,Brain,Cpu,Atom,Code,Palette,Globe,Lightbulb,Rocket,Target as TargetIcon,Waves,} from "lucide-react";
import type { TargetAndTransition } from "framer-motion";

import { useRef, useState } from "react";

const teams = [
  {
    team: "Tech titans",
    leader: "Gowtham B",
    project: "Chemical treatment of grey water",
    dept: "BSc CS (AI)",
    year: "1st Year",
    icon: Waves,
    color: "from-emerald-400 to-green-600",
    accent: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
  },
  {
    team: "Smart soch",
    leader: "Kanzul Arshidha A",
    project: "Dynamic hackathon ideas and team matching",
    dept: "BSc CS (AI)",
    year: "1st Year",
    icon: Sparkles,
    color: "from-cyan-400 to-blue-600",
    accent: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
  },
  {
    team: "TRASHING DAZZLERS",
    leader: "RATCHANA G",
    project: "UNIFLOW",
    dept: "BSc CS (DSA)",
    year: "2nd Year",
    icon: Waves,
    color: "from-green-400 to-emerald-600",
    accent: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    team: "Impact Builders",
    leader: "SHOPIKAFARKHAN R",
    project: "FinVerse",
    dept: "BCOM (PA)",
    year: "1st Year",
    icon: Target,
    color: "from-amber-400 to-orange-600",
    accent: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
  },
  {
    team: "Quantum Quest",
    leader: "AISWARYA M",
    project: "Interview comfort index",
    dept: "BSc (CS)",
    year: "2nd Year",
    icon: Brain,
    color: "from-indigo-400 to-purple-600",
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    team: "Codekrafters",
    leader: "Ashra Aakiba A",
    project: "Campus helpdesk lite",
    dept: "BSc (CS)",
    year: "1st Year",
    icon: Code,
    color: "from-violet-400 to-purple-600",
    accent: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
  },
  {
    team: "Intelliforge",
    leader: "Karani Sri J",
    project: "CampusConnect – Smart Student Support System",
    dept: "BSc CS (AI)",
    year: "2nd Year",
    icon: Users,
    color: "from-sky-400 to-blue-600",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)",
  },
  {
    team: "InnoVengers",
    leader: "Jasvanth R",
    project: "FoodSaver – Smart Food Waste Reduction System ",
    dept: "BSc (CS)",
    year: "1st Year",
    icon: Lightbulb,
    color: "from-green-400 to-lime-600",
    accent: "#84cc16",
    gradient: "linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)",
  },
  {
    team: "SMART DUO",
    leader: "Safeeha Hasin I",
    project: "SMART-NUTRI CARE",
    dept: "Bsc.Biochemistry",
    year: "2nd Year",
    icon: Atom,
    color: "from-pink-400 to-fuchsia-600",
    accent: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #a21caf 100%)",
  },
  {
    team: "Tech Ttittans",
    leader: "Lakshmanaprabu M",
    project: "Integrated Student Grievance & Mentor Support System",
    dept: "BSc (CS)",
    year: "2nd Year",
    icon: Users,
    color: "from-indigo-400 to-blue-600",
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)",
  },
  {
    team: "Alphaforce",
    leader: "Megharaj A",
    project: "Style Smart AI",
    dept: "BSc CS (AI)",
    year: "1st Year",
    icon: Brain,
    color: "from-cyan-400 to-teal-600",
    accent: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0f766e 100%)",
  },
  {
    team: "Pathblaze hub",
    leader: "Gaisar Jahan S",
    project: "EduSphere",
    dept: "BSc (CS)",
    year: "2nd Year",
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    accent: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #4338ca 100%)",
  },
  {
    team: "Navio",
    leader: "Vinodhana M",
    project: "Campus bus rout clarity information system",
    dept: "BCOM (CA)",
    year: "1st Year",
    icon: Cpu,
    color: "from-amber-400 to-yellow-600",
    accent: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #ca8a04 100%)",
  },
  {
    team: "MarketMind AI",
    leader: "Rajalakshmi S",
    project: "stock price prediction",
    dept: "BSc (CS)",
    year: "3rd Year",
    icon: Brain,
    color: "from-orange-400 to-red-600",
    accent: "#f97316",
    gradient: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
  },
  {
    team: "Bio balance",
    leader: "Krithiga S J",
    project: "Digital Nutrition & Diet Recommendation System",
    dept: "BSc Biochemistry",
    year: "1st Year",
    icon: Atom,
    color: "from-rose-400 to-pink-600",
    accent: "#fb7185",
    gradient: "linear-gradient(135deg, #fb7185 0%, #be185d 100%)",
  },
  {
    team: "Campus connectors",
    leader: "Keerthana N",
    project: "Campus connect",
    dept: "BSc (CS)",
    year: "1st Year",
    icon: Users,
    color: "from-indigo-400 to-violet-600",
    accent: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
  },
  {
    team: "Team Insight",
    leader: "Janani T",
    project: "From Manual to Centralized: Rethinking Absentee Reporting.",
    dept: "BSc (CS)",
    year: "1st Year",
    icon: Target,
    color: "from-sky-400 to-cyan-600",
    accent: "#22d3ee",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)",
  },
  {
    team: "Spark Nova",
    leader: "Jerlin C",
    project: "Women safety applications with emergency alert system",
    dept: "BSc (CS)",
    year: "1st Year",
    icon: Zap,
    color: "from-red-400 to-pink-600",
    accent: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #db2777 100%)",
  },
  {
    team: "khagol",
    leader: "Harini K",
    project: "Astronaut Assistance Robot for Space Station",
    dept: "BSc (IT)",
    year: "1st Year",
    icon: Rocket,
    color: "from-sky-400 to-blue-600",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
  },
  {
    team: "Hack Heroes",
    leader: "Naveen Kumar P",
    project: "Smart class room and time table scheduling",
    dept: "BSc CS(AI)",
    year: "1st Year",
    icon: Cpu,
    color: "from-violet-400 to-indigo-600",
    accent: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
  },
  {
    team: "ZYTRIX",
    leader: "GOWTHAMI G",
    project: "LIFE SENTINEL",
    dept: "BSc CS(AI)",
    year: "3rd Year",
    icon: Target,
    color: "from-red-500 to-orange-600",
    accent: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
  },
  {
    team: "NEXORA",
    leader: "SUHAA SRI C M",
    project: "Smart Public Issue Reporting System",
    dept: "BSc (IT)",
    year: "1st Year",
    icon: Globe,
    color: "from-cyan-400 to-blue-600",
    accent: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
  },
  {
  team: "Tech Warriors",
  leader: "Vishnusabari N S",
  project: "Smart Ration Registration",
  dept: "BSc CS (DSA)",
  year: "3rd Year",
  icon: Cpu, 
  color: "from-blue-400 to-indigo-600",
  accent: "#3b82f6",
  gradient: "linear-gradient(135deg, #3b82f6 0%, #4338ca 100%)",
}
];

/* -------------------- ANIMATIONS -------------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const card = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.96 
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] ,
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const floatAnimation : TargetAndTransition =  {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const pulseGlow : TargetAndTransition =  {
  scale: [1, 1.05, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const shimmerEffect : TargetAndTransition =  {
  backgroundPosition: ["200% 0", "-200% 0"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
};

const AnimatedTeamCard = ({ team, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  
  const Icon = team.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={card}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-30 
                   transition-opacity duration-700 blur-2xl"
        style={{
          background: team.gradient,
        }}
        animate={isHovered ? pulseGlow : undefined}

      />
      
      {/* Outer Border */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${team.accent}, transparent)`,
        }}
        animate={isHovered ? { rotate: 360 } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Main Card */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 
                    border border-gray-800/50 shadow-2xl shadow-black/40
                    transform-gpu overflow-hidden isolate"
           style={{
             transform: "translateZ(20px)",
           }}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${team.accent}40 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, ${team.accent}40 0%, transparent 50%)`,
          }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: team.accent,
                left: `${20 + i * 25}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
          <motion.div
            className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 border-t border-r border-purple-400/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Team Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center relative"
              style={{ background: team.gradient }}
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-white font-bold text-xs">#{index + 1}</span>
              <motion.div
                className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-50"
                style={{ background: team.gradient }}
                animate={pulseGlow}
              />
            </motion.div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </motion.div>
          
          {/* Icon */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="w-14 h-14 rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{ background: team.gradient }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>
              
              <motion.div
                className="absolute -inset-1 border-2 rounded-xl"
                style={{ borderColor: team.accent }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>
            
            {/* Orbiting Particles */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    left: `${Math.cos((i * Math.PI)) * 28}px`,
                    top: `${Math.sin((i * Math.PI)) * 28}px`,
                    background: team.accent,
                  }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Team Name */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-white mb-2"
          >
            {team.team}
          </motion.h3>
          
          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4"
          />
          
          {/* Project */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg font-semibold mb-6 min-h-[4rem]"
            style={{
              background: team.gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {team.project}
          </motion.p>
          
          {/* Leader Info */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 
                     border border-gray-700/50 mb-4 backdrop-blur-sm"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 
                            flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {team.leader.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <motion.div
                className="absolute -inset-1 rounded-full border border-gray-600/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="flex-1">
              <p className="text-xs text-gray-400 mb-1">Team Lead</p>
              <p className="text-white font-medium">{team.leader}</p>
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TargetIcon className="w-5 h-5" style={{ color: team.accent }} />
            </motion.div>
          </motion.div>
          
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-2"
          >
            {[team.dept, team.year].map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.9 + tagIndex * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium 
                         bg-gray-800/50 text-gray-300 border border-gray-700/50
                         backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SelectedTeams() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
        
        {/* Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          animate={floatAnimation}
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
        />
        
        <motion.div
          animate={{
            ...floatAnimation,
            y: [0, 20, 0],
          }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />
        
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                     bg-gradient-to-r from-gray-900/80 to-gray-800/80 
                     border border-gray-700/50 backdrop-blur-sm mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-cyan-400 tracking-wider">
              FEATURED TEAMS
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-purple-400" />
            </motion.div>
          </motion.div>
          
          {/* Title */}
          <div className="relative mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 
                              bg-clip-text text-transparent">
                  SELECTED
                </span>
              </span>
              <span className="text-white ml-2">TEAMS</span>
            </motion.h2>
            
            {/* Underline */}
            <div className="relative h-1 w-48 md:w-64 mx-auto overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
                animate={shimmerEffect}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
          </div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto px-4"
          >
            <motion.p
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Pioneering innovation at{" "}
             <span className="text-cyan-400 font-medium">Detrothon 2026</span>. 
              These selected teams showcase exceptional creativity, problem-solving skills, and technical excellence.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {teams.map((team, index) => (
            <AnimatedTeamCard key={team.team} team={team} index={index} />
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-800/30"
        >
          <motion.p
            className="text-gray-500 text-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Showcasing top innovation teams • Detrothon 2026
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(6,182,212,0.05)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    </section>
  );
}
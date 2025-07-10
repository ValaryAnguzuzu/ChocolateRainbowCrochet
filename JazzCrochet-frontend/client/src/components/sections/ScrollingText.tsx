import { motion } from "framer-motion";

function ScrollingText() {
  const scrollingContent = [
    "H.U.M.A.N.™ Framework",
    "Chocolate Rainbow Crochet",
    "Therapeutic Art & Thoughtfulness",
    "Lived Experience Advocacy",
    "Healthcare Ethics",
    "Trauma-Informed Care",
    "Creative Healing",
    "Community Transformation",
    "Mindful Healing",
    "Restoring Dignity & Voice",
  ];

  return (
    <div className="bg-gradient-to-r from-pastel-pink to-pastel-purple py-3 overflow-hidden relative">
      {/* First row */}
      <motion.div
        className="flex whitespace-nowrap text-white font-semibold text-sm md:text-base"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {scrollingContent.map((item, index) => (
          <span key={index} className="mx-8 flex items-center">
            {item}
            <span className="mx-4 text-white/50">•</span>
          </span>
        ))}
      </motion.div>

      {/* Second row (reverse direction) */}
      <motion.div
        className="flex whitespace-nowrap text-white/80 font-medium text-sm md:text-base mt-2"
        animate={{ x: [-1000, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {scrollingContent
          .slice()
          .reverse()
          .map((item, index) => (
            <span key={index} className="mx-6 flex items-center">
              {item}
              <span className="mx-3 text-white/30">•</span>
            </span>
          ))}
      </motion.div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-pastel-pink to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-pastel-purple to-transparent pointer-events-none" />
    </div>
  );
}

export default ScrollingText;

import { motion } from "framer-motion";

function ScrollingText() {
  const scrollingContent = [
    "Chocolate Rainbow Crochet",
    "Therapeutic Art & Thoughtfulness",
    "Lived Experience Leadership",
    "Advocacy",
    "Trauma-Informed Care",
    "Creative Healing",
    "Community Building",
    "Mindful Healing",
    "Restoring Dignity & Voice",
  ];

  return (
    <div className="bg-white py-3 overflow-hidden relative border-t border-b border-gray-100">
      {/* First row */}
      <motion.div
        className="flex whitespace-nowrap text-gray-800 font-semibold text-sm md:text-base"
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
            <span className="mx-4 text-gray-400">•</span>
          </span>
        ))}
      </motion.div>

      {/* Second row (reverse direction) */}
      <motion.div
        className="flex whitespace-nowrap text-gray-600 font-medium text-sm md:text-base mt-2"
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
              <span className="mx-3 text-gray-300">•</span>
            </span>
          ))}
      </motion.div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

export default ScrollingText;

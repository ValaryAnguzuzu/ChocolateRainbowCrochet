import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import bgImg from "../../assets/bg-img.png";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-warm-cream relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center min-h-[80vh]">
          <motion.div
            className="space-y-8 w-11/12 max-w-md lg:w-1/2 lg:max-w-lg lg:mr-0 mr-auto ml-auto lg:ml-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Introduction Card */}
            <motion.div
              className="bg-pastel-purple backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 text-base lg:rounded-3xl lg:p-8 lg:text-lg"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <motion.div
                className="flex items-center mb-4 lg:mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    JP
                  </span>
                </div>
                <div>
                  <h1 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-6">
                    Jasmine Peña
                  </h1>
                  <p className="text-pastel-purple font-medium text-xs lg:text-base">
                    Patient advocate, Creative healer
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Welcome to my official platform. I am a
                trauma-informed educator living with disability and rooted in
                truth. I am the founder of{" "}
                <motion.span className="font-semibold text-pastel-purple">
                  {"Jasmine Liana Livingston Peña, LLC."
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 2 + index * 0.05,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                </motion.span>{" "}
                My work is dedicated to reshaping healthcare, amplifying lived
                experience, and healing intergenerational trauma through the
                power of humanity.
              </motion.p>

              <motion.div
                className="flex items-center text-xs lg:text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Sparkles className="text-pastel-pink mr-2" size={16} />
                <span>Chocolate Rainbow Crochet</span>
              </motion.div>
            </motion.div>

            {/* Mission Statement Card */}
            <motion.div
              className="relative bg-white/30 backdrop-blur-lg border border-pastel-purple/40 shadow-2xl rounded-2xl p-4 overflow-hidden text-base lg:rounded-3xl lg:p-8 lg:text-lg"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
            >
              {/* Pastel gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 pointer-events-none" />
              {/* Large low-opacity Heart icon */}
              <Heart className="absolute right-2 bottom-2 text-pastel-pink opacity-10 w-20 h-20 lg:w-32 lg:h-32 pointer-events-none" />
              <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-6 z-10 relative">
                My Mission
              </h2>
              <p className="text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 z-10 relative">
                "I believe healing is not only possible—it's necessary. And I
                build bridges where systems have burned them."
              </p>
              <div className="flex items-center z-10 relative text-xs lg:text-base">
                <Heart className="mr-2 text-pastel-pink" size={16} />
                <span className="font-medium text-pastel-purple">
                  Restoring dignity, voice, and possibility
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* CTA Button */}
        <div className="w-full flex justify-center mt-12">
          <a
            href="#services"
            className="bg-gradient-to-br from-pink-400 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Begin Your Healing Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

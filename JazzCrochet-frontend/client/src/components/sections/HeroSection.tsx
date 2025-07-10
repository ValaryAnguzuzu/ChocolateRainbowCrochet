import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Users,
  Palette,
  Shield,
  ArrowRight,
} from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-warm-cream"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Introduction Card */}
            <motion.div
              className="bg-pastel-purple backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">JP</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Jasmine Peña
                  </h1>
                  <p className="text-pastel-purple font-medium">
                    Lived Experience Advocate & Healing Facilitator
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                "My name is Jasmine Peña, and I'm a lived experience advocate,
                healing facilitator, and founder of{" "}
                <span className="font-semibold text-pastel-purple">
                  Jasmine Liana Livingston Peña, LLC
                </span>
                . I work at the intersection of trauma, healthcare ethics, and
                creative healing."
              </motion.p>

              <motion.div
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Sparkles className="text-pastel-pink mr-2" size={16} />
                <span>Founder of H.U.M.A.N.™ Framework</span>
              </motion.div>
            </motion.div>

            {/* Mission Statement Card */}
            <motion.div
              className="bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-3xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                My Mission
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                "I believe healing is not only possible—it's necessary. And I
                build bridges where systems have burned them."
              </p>
              <div className="flex items-center">
                <Heart className="mr-2" size={20} />
                <span className="font-medium">
                  Restoring dignity, voice, and possibility
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Programs & Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* H.U.M.A.N.™ Framework Card */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    H.U.M.A.N.™ Framework
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reimagining care with humanity and accountability
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                A transformative approach that helps healthcare providers center
                humanity and accountability in their practice.
              </p>
            </motion.div>

            {/* Chocolate Rainbow Crochet Card */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pastel-purple to-soft-lavender rounded-full flex items-center justify-center mr-4">
                  <Palette className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Chocolate Rainbow Crochet
                  </h3>
                  <p className="text-sm text-gray-600">
                    Therapeutic art program for trauma healing
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                A safe space to process trauma while creating something
                beautiful through the art of crochet.
              </p>
            </motion.div>

            {/* T.A.T. Program Card */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-soft-lavender to-pastel-pink rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    T.A.T. Program
                  </h3>
                  <p className="text-sm text-gray-600">
                    Therapeutic Art & Thoughtfulness
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Integrating mindfulness techniques with therapeutic art
                practices for holistic healing.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-pastel-purple to-pastel-pink text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Healing Journey
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Floating Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 max-w-3xl mx-auto"
            whileHover={{
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "I've lived through the very systems I now help transform—from
              medical trauma to systemic neglect—and I've turned those
              experiences into tools, trainings, and therapeutic art programs."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-1 h-8 bg-gradient-to-b from-pastel-pink to-pastel-purple rounded-full mr-3" />
              <span className="text-pastel-purple font-semibold">
                Jasmine Peña
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

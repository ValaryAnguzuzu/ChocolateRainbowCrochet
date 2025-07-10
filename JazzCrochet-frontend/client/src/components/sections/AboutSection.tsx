import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of Jasmine's images (replace with actual image URLs)
  const images = [
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
    "/src/assets/jaz-pic.png",
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-20 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Scrolling Name Animation */}
          <motion.div
            className="overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 whitespace-nowrap"
              animate={{ x: [0, -100, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Jasmine Liana Peña • Jasmine Liana Peña • Jasmine Liana Peña •
            </motion.h1>
          </motion.div>

          {/* Circular Image Carousel */}
          <motion.div
            className="relative mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Jasmine Peña - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-pastel-purple scale-125"
                      : "bg-gray-300 hover:bg-pastel-pink"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6 pl-8">
                  "I believe healing is not only possible—it's necessary. And I
                  build bridges where systems have burned them."
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Jasmine Liana Peña
                    </p>
                    <p className="text-pastel-purple font-medium">
                      Founder & Healing Facilitator
                    </p>
                    <p className="text-sm text-gray-600">
                      Chocolate Rainbow Crochet
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              A lived experience advocate and creative healing facilitator,
              Jasmine works at the intersection of trauma, healthcare ethics,
              and therapeutic art. She's lived through the very systems she now
              helps transform—turning experiences into tools, trainings, and
              healing programs that restore dignity, voice, and possibility.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

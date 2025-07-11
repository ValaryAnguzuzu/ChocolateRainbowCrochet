import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of Jasmine's images (replace with actual image URLs)
  const images = [
    "/src/assets/pena-pic.png",
    "/src/assets/pena-pic4.jpg",
    "/src/assets/bg-img.png",
    "/src/assets/pena-pic3.jpg",
    "/src/assets/jaz-logo.png",
    "/src/assets/SISTAMoms.png",
    "/src/assets/pena-pic2.JPG",
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Blurred Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Jasmine Peña - Background ${currentImageIndex + 1}`}
            className="w-full h-full object-cover blur-[0px] opacity-20"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
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
                className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 whitespace-nowrap"
                animate={{ x: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Chocolate Rainbow Crochet
              </motion.h1>
            </motion.div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center mb-8 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-pastel-purple scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-pastel-pink"
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mb-8">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>

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
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed pl-8">
                    "I believe healing is not only possible—it's necessary. And
                    I build bridges where systems have burned them."
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-6">
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A lived experience advocate and creative healing facilitator,
                Jasmine works at the intersection of trauma, healthcare ethics,
                and therapeutic art. She's lived through the very systems she
                now helps transform—turning experiences into tools, trainings,
                and healing programs that restore dignity, voice, and
                possibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

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
    "/src/assets/pena-pic2.JPG",
    "/src/assets/pena-pic5.jpg",
    "/src/assets/jaz-logo.png",
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
            className="w-full h-full object-cover blur-[1px] opacity-40"
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
                animate={{ x: [0, -5, 0] }}
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
            {/* <div className="text-center mb-8">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div> */}

            {/* Floating Quote Text Overlay */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              {/* <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </motion.div> */}

              {/* Quote Text with Backdrop Blur */}
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl"></div>
                <blockquote className="relative text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed px-8 py-6 text-shadow-lg">
                  A trauma-informed mentorship and creative healing program that
                  uses fiber arts—like crochet, fabric design, and painting—as
                  tools for emotional restoration, self-expression, and
                  community connection. This initiative provides structured yet
                  soulful sessions that blend creativity, mindfulness, and
                  reflection. The goal is to create safe, joy-filled
                  environments where participants, especially youth, elders, and
                  individuals navigating trauma or disability, can gently
                  process emotions, reclaim their power, and stitch their way
                  toward healing.
                </blockquote>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-gray-800 leading-relaxed">
                  We especially welcome those who have felt unseen, unheard, or
                  misunderstood, and provide a space where being different is a
                  <span className="font-bold"> STRENGTH</span>, not a
                  limitation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/src/assets/yvonne.jpg",
      quote:
        "Jasmine's H.U.M.A.N.™ framework completely transformed how our team approaches patient care. The training was profound and practical.",
      name: "Yvonne Livingston",
      title: "Founder: SISTAMOms LLC",
      gradient: "from-pastel-pink to-pastel-purple",
      rating: 5,
    },
    {
      image: "/src/assets/yvonne.jpg",
      quote:
        "The Chocolate Rainbow Crochet program gave me a safe space to process my trauma while creating something beautiful. Life-changing experience.",
      name: "Amanda Ashley Armour",
      title: "Co-Founder Sistamoms LLC",
      gradient: "from-pastel-purple to-soft-lavender",
      rating: 5,
    },
    {
      image: "/src/assets/yvonne.jpg",
      quote:
        "Jasmine's advocacy work and therapeutic art programs have created ripples of healing throughout our community. Truly inspiring work.",
      name: "James Thompson",
      title: "Community Leader",
      gradient: "from-soft-lavender to-pastel-pink",
      rating: 5,
    },
    {
      image: "/src/assets/yvonne.jpg",
      quote:
        "Through Jasmine's guidance, I found my voice and strength. Her programs are not just about healing—they're about empowerment.",
      name: "Lisa Chang",
      title: "Trauma Survivor",
      gradient: "from-pastel-pink to-soft-lavender",
      rating: 5,
    },
    {
      image: "/src/assets/yvonne.jpg",
      quote:
        "The combination of art therapy and advocacy training has revolutionized our approach to community healing. Jasmine is a true visionary.",
      name: "Michael Davis",
      title: "Social Worker",
      gradient: "from-pastel-purple to-pastel-pink",
      rating: 5,
    },
  ];

  const pageCount = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageCount);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pageCount) % pageCount);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-pastel-purple relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-pastel-pink rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-pastel-purple rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Voices of Healing
          </h2>

          <motion.div
            className="overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              animate={{ x: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Stories from our community of healing and transformation
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Single Centered Card */}
        <div className="flex justify-center items-center min-h-[400px]">
          <motion.div
            key={currentIndex}
            className="bg-white rounded-3xl p-8 shadow-2xl mx-auto w-full max-w-full min-w-0 md:max-w-2xl md:min-w-[500px] relative overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 opacity-30">
              <Quote size={48} className="text-gray-800" />
            </div>

            {/* Profile Section */}
            <div className="text-center mb-6">
              <motion.div
                className="w-24 h-24 bg-white rounded-full mx-auto mb-4 p-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Star Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-current"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.p
              className="text-lg mb-6 text-center leading-relaxed font-medium text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[currentIndex].quote}"
            </motion.p>

            {/* Author Info */}
            <motion.div
              className="text-center border-t border-gray-200 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-bold text-xl mb-1 text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm font-medium text-gray-600">
                {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Pagination */}
        <motion.div
          className="flex items-center justify-center space-x-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={prevTestimonial}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-pastel-purple" size={24} />
          </motion.button>

          {/* Page Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-pastel-purple scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-pastel-pink"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-pastel-purple" size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

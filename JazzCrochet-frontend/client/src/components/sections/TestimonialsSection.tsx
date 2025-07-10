import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote:
        "Jasmine's H.U.M.A.N.™ framework completely transformed how our team approaches patient care. The training was profound and practical.",
      name: "Dr. Sarah Chen",
      title: "Healthcare Administrator",
      gradient: "from-pastel-pink to-pastel-purple",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote:
        "The Chocolate Rainbow Crochet program gave me a safe space to process my trauma while creating something beautiful. Life-changing experience.",
      name: "Maria Rodriguez",
      title: "Program Participant",
      gradient: "from-pastel-purple to-soft-lavender",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote:
        "Jasmine's advocacy work and therapeutic art programs have created ripples of healing throughout our community. Truly inspiring work.",
      name: "James Thompson",
      title: "Community Leader",
      gradient: "from-soft-lavender to-pastel-pink",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote:
        "Through Jasmine's guidance, I found my voice and strength. Her programs are not just about healing—they're about empowerment.",
      name: "Lisa Chang",
      title: "Trauma Survivor",
      gradient: "from-pastel-pink to-soft-lavender",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote:
        "The combination of art therapy and advocacy training has revolutionized our approach to community healing. Jasmine is a true visionary.",
      name: "Michael Davis",
      title: "Social Worker",
      gradient: "from-pastel-purple to-pastel-pink",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-warm-cream relative overflow-hidden"
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stories from our community of healing and transformation
          </p>
        </motion.div>

        {/* Enhanced Scrollable Cards */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-pastel-purple" size={24} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-pastel-purple" size={24} />
          </motion.button>

          {/* Scrollable container */}
          <div className="overflow-hidden mx-20">
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className={`bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 text-white shadow-2xl mx-auto max-w-md relative overflow-hidden`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <Quote size={48} />
                    </div>

                    {/* Profile Section */}
                    <div className="text-center mb-6">
                      <motion.div
                        className="w-24 h-24 bg-white rounded-full mx-auto mb-4 p-2 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </motion.div>

                      {/* Star Rating */}
                      <div className="flex justify-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
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
                      className="text-lg mb-6 text-center leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    {/* Author Info */}
                    <motion.div
                      className="text-center border-t border-white/20 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-bold text-xl mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-90 font-medium">
                        {testimonial.title}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-pastel-purple scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-pastel-pink"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="mt-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-pastel-pink to-pastel-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-warm-cream relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full opacity-10"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
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
            Connect & Heal
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here, art is not confined; it is felt, lived, and shared! Ready to
            begin your healing journey or learn more about our programs?
          </p> */}
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
              Here, art is not confined; it is felt, lived, and shared! Ready to
              begin your healing journey or learn more about our programs?
            </motion.h1>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - Floating Card */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-purple focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-purple focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-purple focus:border-transparent transition-all duration-200"
                  placeholder="Share with me your healing journey or interest in my art..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pastel-pink to-pastel-purple text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards - Floating */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Business Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center w-16 h-16 text-white font-bold text-2xl">
                    JP
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Jasmine Liana Peña
                </h3>
                <p className="text-pastel-purple font-medium">
                  Founder & Healing Facilitator
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Chocolate Rainbow Crochet
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-pastel-purple mr-3" size={20} />
                  <a
                    href="tel:+12246330920"
                    className="text-gray-700 hover:text-pastel-purple transition-colors"
                  >
                    (224) 633-0920
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-pastel-purple mr-3" size={20} />
                  <a
                    href="mailto:C.RainbowCrochet@gmail.com"
                    className="text-gray-700 hover:text-pastel-purple transition-colors"
                  >
                    C.RainbowCrochet@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="text-pastel-purple mr-3" size={20} />
                  <span className="text-gray-700">
                    Serving Communities Nationwide
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Connect on Social Media
              </h3>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://instagram.com/Jaezee79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://tiktok.com/@Jaevee31214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com/jaezee.jl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="https://youtube.com/@jasminepena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

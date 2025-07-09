//Business email, copyright, social icons.
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/Jaezee79",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: Youtube, // Using Youtube icon as placeholder for TikTok
      url: "https://tiktok.com/@Jaevee31214",
      color: "hover:text-purple-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/jaezee.jl",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">JP</span>
              </div>
              <div>
                <span className="text-lg font-semibold">
                  Jasmine Liana Peña
                </span>
                <p className="text-sm text-gray-400">
                  Founder | Chocolate Rainbow Crochet
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 italic">
              "A bold fusion of color, texture, and soul-woven with passion,
              stitched with stories"
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-400" />
                <a
                  href="mailto:C.RainbowCrochet@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  C.RainbowCrochet@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-purple-400" />
                <a
                  href="tel:+12246330920"
                  className="hover:text-white transition-colors duration-200"
                >
                  (224) 633-0920
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-purple-400" />
                <span>Serving Communities Nationwide</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="text-gray-400 space-y-2">
              <a
                href="#about"
                className="block hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#services"
                className="block hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#blog"
                className="block hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#testimonials"
                className="block hover:text-white transition-colors duration-200"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2024 Jasmine Liana Livingston Peña, LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

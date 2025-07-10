//Links for Home, About, Services, Blog, Contact — mobile responsive with hamburger toggle.

import React, { useState } from "react";
//import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/jaz-logo.png";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Videos", href: "#videos" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* Logo */}
        <div className="flex items-center min-w-0">
          <img
            src={logoImage}
            alt="Jasmine Peña Logo"
            className="h-8 w-8 object-cover rounded-full border border-pastel-purple bg-red shadow"
            //style={{ minWidth: 32, minHeight: 32 }}
          />
          <div className="ml-3 truncate">
            <span className="text-base font-bold text-gray-800 block leading-tight truncate">
              Jasmine Liana Peña
            </span>
            <span className="text-xs text-pastel-purple block leading-tight truncate">
              Chocolate Rainbow Crochet
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-gray-700 hover:text-pastel-purple transition-colors duration-200 font-medium px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-purple"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-pastel-purple transition-colors duration-200 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-purple"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 border-t border-gray-200 backdrop-blur-md shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-pastel-purple hover:bg-pastel-pink/20 rounded-md transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

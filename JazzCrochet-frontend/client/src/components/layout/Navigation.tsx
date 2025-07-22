//Links for Home, About, Services, Blog, Contact — mobile responsive with hamburger toggle.

import React, { useState } from "react";
//import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/pena-pic.png";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Videos", href: "#videos" },
    { label: "Partners", href: "/partners" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    if (id === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo & Branding (left) */}
        <div className="flex items-center min-w-0 flex-1">
          <img
            src={logoImage}
            alt="Jasmine Peña Logo"
            className="h-15 w-12 object-cover rounded-full border border-pastel-purple bg-red-400 shadow"
          />
          <div className="ml-3 truncate">
            {/* <span className="text-base font-bold text-white block leading-tight truncate">
              Jasmine Liana Peña
            </span> */}
            <span className="text-sm text-white/80 block leading-tight truncate">
              Chocolate Rainbow Crochet
            </span>
          </div>
        </div>

        {/* Desktop Navigation (right) */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          {navItems.map((item) =>
            item.label === "Partners" ? (
              <Link
                key={item.label}
                to="/partners"
                className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium px-3 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium px-3 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button (right) */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-yellow-200 transition-colors duration-200 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 border-t border-gray-200 backdrop-blur-md shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) =>
              item.label === "Partners" ? (
                <Link
                  key={item.label}
                  to="/partners"
                  className="block w-full text-left py-2 px-4 text-white hover:text-yellow-200 hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left py-2 px-4 text-white hover:text-yellow-200 hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

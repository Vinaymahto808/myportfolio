import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-purple-900 to-gray-900 dark:from-black dark:via-blue-900 dark:to-purple-950 text-white py-12 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Vinay Kumar
              </motion.h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & AI/ML Enthusiast passionate about creating 
                innovative solutions that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>kumarvinay16244@gmail.com</p>
                <p>+91-9142031933</p>
                <p>Ranchi, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800 mt-8">
            <p className="text-gray-400 flex items-center justify-center gap-1">
              © 2024 Vinay Kuamr. Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
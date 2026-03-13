'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm rounded-xl">SC</div>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-white leading-tight">Sattanathan</p>
                <p className="text-xs text-indigo-400 leading-tight">Supply Chain Specialist</p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/5 rounded-lg border border-indigo-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://satteches.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
              >
                <ExternalLink size={13} />
                satteches.com
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-medium text-white shimmer-btn"
              >
                <Download size={14} />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 lg:hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href="https://satteches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-gray-400 border border-white/10 rounded-lg font-medium"
                >
                  <ExternalLink size={15} />
                  satteches.com
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

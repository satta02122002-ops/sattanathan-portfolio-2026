'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/sattanathan', label: 'GitHub', color: 'hover:text-white hover:bg-white/10' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sattanathan', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-500/10' },
  { icon: Mail, href: 'mailto:sattanathan@email.com', label: 'Email', color: 'hover:text-indigo-400 hover:bg-indigo-500/10' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm rounded-xl">
                SN
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Sattanathan</p>
              <p className="text-indigo-400 text-xs">Supply Chain Data Analyst</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={label}
                className={`w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-gray-500 transition-all duration-300 ${color}`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-xs font-medium ml-2"
            >
              <Download size={13} />
              Resume
            </motion.a>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 glass border border-white/8 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 Sattanathan. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

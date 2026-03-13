'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowUp, Globe, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/sat-logistics', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-500/10' },
  { icon: Github, href: 'https://github.com/satta02122002-ops', label: 'GitHub', color: 'hover:text-white hover:bg-white/10' },
  { icon: Globe, href: 'https://satteches.com', label: 'Website', color: 'hover:text-cyan-400 hover:bg-cyan-500/10' },
  { icon: Mail, href: 'mailto:satta02122002@gmail.com', label: 'Email', color: 'hover:text-indigo-400 hover:bg-indigo-500/10' },
  { icon: Phone, href: 'tel:+971503871079', label: 'Phone', color: 'hover:text-green-400 hover:bg-green-500/10' },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm rounded-xl">SC</div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Sattanathan Chandran</p>
                <p className="text-indigo-400 text-xs">Supply Chain Specialist · Dubai, UAE</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
              4+ years of end-to-end supply chain operations across manufacturing and international freight forwarding. SAP Key User. Process automation builder.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-500 hover:text-gray-300 text-sm text-left transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick links */}
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-4">Contact</p>
            <div className="space-y-2">
              <a href="mailto:satta02122002@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 text-sm transition-colors">
                <Mail size={13} />
                satta02122002@gmail.com
              </a>
              <a href="tel:+971503871079" className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm transition-colors">
                <Phone size={13} />
                +971 50 387 1079
              </a>
              <a href="https://satteches.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                <Globe size={13} />
                satteches.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={label}
                className={`w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-gray-500 transition-all duration-300 ${color}`}
              >
                <Icon size={15} />
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-xs font-medium ml-2 shimmer-btn"
            >
              <Download size={12} />
              Resume
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-gray-700 text-xs">
              © 2025 Sattanathan Chandran
            </p>
            <p className="text-gray-700 text-xs hidden sm:block">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 glass border border-white/8 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
              title="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, TrendingUp } from 'lucide-react';

const Particle = ({ index }: { index: number }) => {
  const positions = [
    { x: '10%', y: '20%' }, { x: '85%', y: '15%' }, { x: '25%', y: '70%' },
    { x: '70%', y: '60%' }, { x: '50%', y: '30%' }, { x: '90%', y: '80%' },
    { x: '15%', y: '85%' }, { x: '60%', y: '10%' }, { x: '35%', y: '45%' },
    { x: '75%', y: '35%' }, { x: '5%', y: '50%' }, { x: '45%', y: '90%' },
  ];
  const pos = positions[index % positions.length];
  const sizes = [2, 3, 4, 2, 3];
  const size = sizes[index % sizes.length];
  const durations = [4, 6, 8, 5, 7];
  const duration = durations[index % durations.length];

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        background: index % 3 === 0
          ? 'rgba(99,102,241,0.6)'
          : index % 3 === 1
            ? 'rgba(139,92,246,0.6)'
            : 'rgba(6,182,212,0.6)',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
    />
  );
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        animate={{ scale: [1.3, 1, 1.3], x: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[80px] opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        animate={{ scale: [1, 1.4, 1], y: [-30, 30, -30] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
        >
          <Sparkles size={14} className="text-indigo-400" />
          Available for opportunities in Data Analytics
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Turning Logistics Data
          <br />
          <span className="gradient-text">into Smart Supply Chain</span>
          <br />
          Decisions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Logistics Coordinator in Dubai transitioning into{' '}
          <span className="text-indigo-300 font-medium">Supply Chain Data Analyst</span> &{' '}
          <span className="text-purple-300 font-medium">Automation Builder</span> — turning
          complex operations data into actionable intelligence.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10"
        >
          <MapPin size={14} className="text-indigo-400" />
          Dubai, UAE
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <TrendingUp size={14} className="text-green-400" />
          <span className="text-green-400">Open to Remote & Relocation</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToProjects}
            className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold text-base shimmer-btn overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 rounded-xl text-white font-semibold text-base transition-all duration-300"
          >
            Download Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="px-8 py-4 text-gray-300 hover:text-white font-semibold text-base transition-colors border border-transparent hover:border-white/10 rounded-xl"
          >
            Contact Me →
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Built' },
            { value: '5+', label: 'Dashboards Created' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={scrollToAbout}
          className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

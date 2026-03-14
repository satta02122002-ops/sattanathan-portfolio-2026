'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Phone, Linkedin, Github, ExternalLink, ChevronRight, FileText } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience', color: 'text-indigo-400' },
  { value: 3, suffix: '', label: 'Companies', color: 'text-purple-400' },
  { value: 99.5, suffix: '%', label: 'Inventory Accuracy', color: 'text-cyan-400', decimals: 1 },
  { value: 1000, suffix: '+', label: 'Shipments Handled', color: 'text-green-400' },
];

const badges = [
  { label: 'SAP S/4HANA Key User', color: 'bg-blue-500/10 border-blue-500/25 text-blue-300' },
  { label: 'Lean Six Sigma', color: 'bg-amber-500/10 border-amber-500/25 text-amber-300' },
  { label: 'Dubai, UAE', color: 'bg-green-500/10 border-green-500/25 text-green-300' },
];

export default function Hero() {
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-8"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        animate={{ scale: [1, 1.3, 1], y: [-30, 30, -30] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Main content */}
          <div className="space-y-7">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Opportunities · Dubai & Remote
            </motion.div>

            {/* Name + Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3">
                Sattanathan
                <br />
                <span className="gradient-text">Chandran</span>
              </h1>
              <p className="text-lg text-gray-300 font-medium leading-relaxed">
                Supply Chain & Logistics Specialist
                <span className="text-gray-600 mx-2">·</span>
                <span className="text-indigo-300">SAP Key User</span>
                <span className="text-gray-600 mx-2">·</span>
                <span className="text-purple-300">Process Automation</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl"
            >
              4+ years managing end-to-end supply chain operations across manufacturing and freight forwarding
              in Dubai & India. Expert in{' '}
              <span className="text-white font-medium">SAP S/4HANA</span>,{' '}
              <span className="text-white font-medium">Excel VBA automation</span>, and{' '}
              <span className="text-white font-medium">logistics process optimisation</span>.
            </motion.p>

            {/* Skill badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span key={b.label} className={`px-3 py-1 rounded-full border text-xs font-medium ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </motion.div>

            {/* Location + Contact quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-indigo-400" />
                Dubai, UAE
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-indigo-400" />
                +971 50 387 1079
              </span>
              <a
                href="https://linkedin.com/in/sat-logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={13} className="text-blue-400" />
                sat-logistics
              </a>
              <a
                href="https://github.com/satta02122002-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={13} />
                satta02122002-ops
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold text-sm shimmer-btn"
              >
                View My Work
                <ChevronRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-indigo-500/30 rounded-xl text-white font-semibold text-sm transition-all duration-300"
              >
                Get in Touch
              </motion.button>

              <motion.a
                href="/cv"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-purple-500/30 rounded-xl text-white font-semibold text-sm transition-all duration-300"
              >
                <FileText size={15} className="text-purple-400" />
                View CV
              </motion.a>

              <motion.a
                href="https://satteches.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white font-semibold text-sm border border-transparent hover:border-white/10 rounded-xl transition-all duration-300"
              >
                <ExternalLink size={15} />
                satteches.com
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main stats card */}
            <div className="glass rounded-3xl border border-white/10 p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/3 to-transparent" />

              <div className="relative z-10">
                {/* Top row — profile */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-[#0a0a0f]">
                      <img
                        src="/profile.jpg"
                        alt="Sattanathan Chandran"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#0a0a0f]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Sattanathan Chandran</p>
                    <p className="text-indigo-300 text-sm">Supply Chain Specialist</p>
                    <p className="text-gray-500 text-xs mt-0.5">ISS Global Forwarding · Dubai</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass rounded-2xl border border-white/5 p-4 hover:border-white/10 transition-colors"
                    >
                      <p className={`text-2xl font-extrabold ${stat.color} mb-0.5`}>
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2200}
                        />
                      </p>
                      <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Award badges */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm flex-shrink-0">
                      🏆
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">5S Initiative Award</p>
                      <p className="text-gray-500 text-xs">Alstom · May 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/15">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm flex-shrink-0">
                      ⭐
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">GSI Excellence Award</p>
                      <p className="text-gray-500 text-xs">Alstom SAP Expertise · July 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-[60px] opacity-20"
              style={{ background: '#6366f1' }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full blur-[50px] opacity-15"
              style={{ background: '#8b5cf6' }}
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-16"
        >
          <motion.button
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
        </motion.div>
      </div>
    </section>
  );
}

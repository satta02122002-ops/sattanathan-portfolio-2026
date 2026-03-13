'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import { Package, TrendingUp, Cpu, Award, Globe, Users, Zap } from 'lucide-react';

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience', icon: Award },
  { value: 3, suffix: '', label: 'Companies', icon: Globe },
  { value: 99.5, suffix: '%', label: 'Inventory Accuracy', icon: TrendingUp },
  { value: 1000, suffix: '+', label: 'Shipments Managed', icon: Package },
];

const highlights = [
  {
    icon: Cpu,
    title: 'SAP S/4HANA Key User',
    desc: 'Primary key user for SAP MM & WM modules at Alstom. Updated Material Master, configured storage locations, and optimised inventory flows.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    desc: 'Built Excel VBA macros to automate SAP error clearance and developed a web-based billing tool that eliminated month-end manual processing.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Package,
    title: 'Warehouse Operations',
    desc: 'Hands-on warehouse management across manufacturing and freight forwarding — from 5S implementation to dynamic storage layout design.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    desc: 'Managed 10+ global client accounts at ISS Global, led kitting for large-scale rail projects at Alstom, and organised engagement for 300+ employees.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Malayalam', level: 'Professional' },
  { name: 'Hindi', level: 'Basic' },
];

const interests = [
  '🏎️ Formula 1 · Red Bull',
  '💪 Fitness & Gym',
  '📸 Photography',
  '🤖 AI & Technology',
  '📚 Steve Jobs Philosophy',
  '✏️ Drawing & Handcraft',
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-widest mb-4">
            About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Man Behind the <span className="gradient-text">Operations</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From the warehouse floor to data-driven automation — 4+ years of deep supply chain expertise spanning manufacturing, freight forwarding, and logistics tech.
          </motion.p>
        </motion.div>

        {/* Bio + Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left — Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-5"
          >
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                I&apos;m <span className="text-white font-bold">Sattanathan Chandran</span>, a Logistics & Supply Chain
                Coordinator with <span className="text-indigo-300 font-medium">4+ years of end-to-end operations experience</span> across
                high-stakes manufacturing and international freight forwarding environments in India and Dubai.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                As <span className="text-purple-300 font-medium">SAP S/4HANA Key User</span> at Alstom Transport, I maintained
                Material Master data, configured warehouse storage locations, and built{' '}
                <span className="text-purple-300 font-medium">Excel VBA macros</span> to automate SAP error clearance —
                eliminating manual bottlenecks and achieving{' '}
                <span className="text-white font-semibold">99.5% inventory accuracy</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                At ISS Global Forwarding in Dubai, I manage 10+ global client accounts, handle customs clearance
                (BOE/Dubai Trade Portal), and built an{' '}
                <span className="text-cyan-300 font-medium">internal web-based billing tool</span> that automated
                month-end storage and handling charge summaries — transforming weeks of manual work into minutes.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/3 border border-white/8">
                    <span className="text-white text-xs font-medium">{lang.name}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeUp}>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="px-3 py-1.5 text-xs bg-white/3 border border-white/8 rounded-lg text-gray-300">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`glass glass-hover rounded-2xl p-5 border ${item.border} cursor-default transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -2 }}
              className="glass rounded-2xl p-6 border border-white/5 text-center group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-500/20 transition-colors">
                <stat.icon size={18} className="text-indigo-400" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
              </p>
              <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

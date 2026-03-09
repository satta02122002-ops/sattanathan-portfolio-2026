'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeUpSm, stagger, staggerSm, staggerFast } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Rocket, Package, Navigation, Brain, BarChart3, Zap, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Package,
    title: 'Warehouse Management',
    description: 'Smart WMS with real-time inventory visibility, automated put-away logic, and predictive stock replenishment.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    phase: 'Phase 1',
  },
  {
    icon: Navigation,
    title: 'Freight Tracking',
    description: 'End-to-end shipment visibility from pickup to delivery with live status updates and exception alerts.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    phase: 'Phase 2',
  },
  {
    icon: Brain,
    title: 'AI Route Optimization',
    description: 'ML-powered routing engine that factors traffic, weather, fuel costs, and time windows for optimal delivery.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    phase: 'Phase 3',
  },
  {
    icon: BarChart3,
    title: 'Demand Forecasting',
    description: 'Predictive analytics for inventory demand using historical data, seasonality models, and market signals.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    phase: 'Phase 4',
  },
];

const roadmap = [
  { year: '2024–2025', title: 'Master Data Analytics', desc: 'Power BI, SQL, Python proficiency', active: true },
  { year: '2025–2026', title: 'Build & Launch MVP', desc: 'First 3PL SaaS product version', active: false },
  { year: '2026+', title: 'Scale the Platform', desc: 'Expand to regional 3PL market', active: false },
];

export default function Vision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Large background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-5"
        style={{ background: 'radial-gradient(circle, #6366f1, #8b5cf6, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-4">
            <Rocket size={12} />
            Vision & Future Goals
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Building the Future of{' '}
            <span className="gradient-text">3PL Logistics</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            My long-term mission is to build a comprehensive software platform for Third Party Logistics companies —
            combining operational know-how with cutting-edge AI to eliminate inefficiencies at scale.
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative glass rounded-2xl border border-indigo-500/20 p-8 lg:p-10 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5" />
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Zap size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                The 3PL SaaS Platform Vision
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Third-party logistics companies are still heavily reliant on fragmented Excel sheets, legacy WMS systems,
                and manual coordination. I&apos;m building toward a unified platform that gives 3PL operators real-time visibility,
                AI-powered decision support, and automated workflows — so their teams can focus on strategy, not admin.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {['3PL', 'SaaS', 'AI/ML', 'Supply Chain Tech', 'Dubai Market'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative glass rounded-2xl border ${pillar.border} p-5 overflow-hidden group transition-all duration-300`}
            >
              <div className={`absolute inset-0 ${pillar.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center`}>
                    <pillar.icon size={18} className={pillar.color} />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{pillar.phase}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Roadmap */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="glass rounded-2xl border border-white/5 p-6 lg:p-8"
        >
          <motion.h3 variants={fadeUp} className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <BarChart3 size={18} className="text-indigo-400" />
            Execution Roadmap
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`relative rounded-xl p-4 border transition-all duration-300 ${
                  item.active
                    ? 'bg-indigo-500/10 border-indigo-500/30'
                    : 'bg-white/2 border-white/5'
                }`}
              >
                {item.active && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                )}
                <p className={`text-xs font-medium mb-1 ${item.active ? 'text-indigo-400' : 'text-gray-600'}`}>
                  {item.year}
                </p>
                <p className={`font-bold text-sm mb-1 ${item.active ? 'text-white' : 'text-gray-400'}`}>
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
                {i < roadmap.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

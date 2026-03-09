'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeUpSm, stagger, staggerSm, staggerFast } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import { Package, TrendingUp, Database, Zap, Award, Globe } from 'lucide-react';

const stats = [
  { value: 3, suffix: '+', label: 'Years in Logistics', icon: Award },
  { value: 10, suffix: '+', label: 'Projects Delivered', icon: TrendingUp },
  { value: 5, suffix: '+', label: 'Dashboards Created', icon: Database },
  { value: 1000, suffix: '+', label: 'Shipments Coordinated', icon: Globe },
];

const highlights = [
  { icon: Package, title: 'Warehouse Operations', desc: 'Hands-on experience managing warehouse workflows, inventory accuracy, and space optimization.' },
  { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Converting raw logistics data into actionable Power BI dashboards and Excel reports for management.' },
  { icon: Database, title: 'Shipment Coordination', desc: 'End-to-end coordination of freight movements, documentation, and customs compliance.' },
  { icon: Zap, title: 'Automation Builder', desc: 'Building workflow automations and data tools to reduce manual work and improve operational efficiency.' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
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
            The Story Behind the{' '}
            <span className="gradient-text">Analyst</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From managing physical logistics flows on the ground to building data systems that predict and optimize them — this is my journey.
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left — Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Sattanathan</span>, a Logistics Coordinator based in{' '}
                <span className="text-indigo-300 font-medium">Dubai, UAE</span>, currently
                making a strategic transition into Supply Chain Data Analytics and Automation.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                With hands-on experience in <span className="text-purple-300">warehouse operations</span>,{' '}
                <span className="text-purple-300">shipment coordination</span>, and{' '}
                <span className="text-purple-300">inventory tracking</span>, I understand logistics
                from the ground up — which gives me a unique advantage when building data solutions
                that actually work in the real world.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed">
                I&apos;m passionate about using <span className="text-cyan-300">Power BI</span>,{' '}
                <span className="text-cyan-300">SQL</span>, and{' '}
                <span className="text-cyan-300">Python</span> to eliminate inefficiencies, build
                predictive systems, and ultimately help 3PL companies scale smarter — not harder.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'SQL', 'Advanced Excel', 'Warehouse Ops', 'Dubai-based', 'Open to Remote'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {tag}
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(99,102,241,0.3)' }}
                className="glass glass-hover rounded-2xl p-5 border border-white/5 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
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
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 border border-white/5 text-center group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-500/20 transition-colors">
                <stat.icon size={18} className="text-indigo-400" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

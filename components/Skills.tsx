'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Package, BarChart3, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Package,
    title: 'Supply Chain & Ops',
    color: 'from-blue-500/15 to-indigo-500/15',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    bgIcon: 'bg-blue-500/10',
    skills: [
      { name: 'SAP S/4HANA MM & WM', level: 95 },
      { name: 'Inventory Management', level: 92 },
      { name: 'Freight Forwarding & Customs', level: 88 },
      { name: 'Warehouse Operations & 5S', level: 90 },
      { name: 'End-to-End Shipment Coordination', level: 87 },
    ],
  },
  {
    icon: BarChart3,
    title: 'Data & Automation',
    color: 'from-indigo-500/15 to-purple-500/15',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    bgIcon: 'bg-indigo-500/10',
    skills: [
      { name: 'Advanced Excel / VBA Macros', level: 90 },
      { name: 'Power BI', level: 72 },
      { name: 'Qlik Sense', level: 70 },
      { name: 'Power Automate', level: 65 },
      { name: 'Data Analysis & KPI Reporting', level: 82 },
    ],
  },
  {
    icon: Cpu,
    title: 'Systems & Methodology',
    color: 'from-purple-500/15 to-pink-500/15',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    bgIcon: 'bg-purple-500/10',
    skills: [
      { name: 'Lean Six Sigma / 5S', level: 85 },
      { name: 'EHS Standards & Compliance', level: 88 },
      { name: 'Delmia Apriso (WMS)', level: 72 },
      { name: 'Focus ERP', level: 70 },
      { name: 'Web Development (Internal Tools)', level: 60 },
    ],
  },
];

const tools = [
  'SAP S/4HANA', 'Advanced Excel', 'VBA / Macros', 'Power BI', 'Qlik Sense',
  'Power Automate', 'Focus ERP', 'Delmia Apriso', 'IQ WMS', 'UKG Dimensions',
  'AutoCAD', 'Adobe Photoshop', 'Cursor AI', 'Git / GitHub',
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const barColor =
    level >= 85 ? 'from-indigo-500 to-purple-500'
    : level >= 70 ? 'from-purple-500 to-pink-500'
    : 'from-cyan-500 to-blue-500';

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 grid-bg opacity-30" />
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
            <Wrench size={12} />
            Skills & Expertise
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Technical Toolkit</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Deep operational expertise in SAP and supply chain systems, backed by growing proficiency in data analytics and automation tools.
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ scale: 1.01, y: -4 }}
              className={`relative glass rounded-2xl p-6 border ${category.border} overflow-hidden group transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${category.bgIcon} border ${category.border} flex items-center justify-center`}>
                    <category.icon size={18} className={category.iconColor} />
                  </div>
                  <h3 className="text-white font-bold text-base">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp} className="text-center text-white font-semibold text-xl mb-6">
            Tools & Platforms
          </motion.h3>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 glass border border-white/10 hover:border-indigo-500/30 rounded-xl text-gray-300 hover:text-white text-sm font-medium cursor-default transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

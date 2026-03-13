'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Globe, Cpu, Package, Code2, ExternalLink, Github, CheckCircle2, Layers, TrendingUp, BarChart3 } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Globe,
    label: 'Web Application',
    labelColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    title: 'Billing & Activity Tracking Web Tool',
    company: 'ISS Global Forwarding · Dubai',
    companyColor: 'text-indigo-300',
    description:
      'An internal web-based tool built to monitor and record all warehouse activities — picking, packing, loading, and unloading. Automated generation of monthly billing summaries for storage and handling charges, replacing a painful manual month-end process entirely.',
    gradient: 'from-indigo-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-indigo-500/30',
    glowColor: 'rgba(99,102,241,0.06)',
    features: [
      { icon: CheckCircle2, text: 'Real-time tracking of picking, packing, loading & unloading' },
      { icon: BarChart3, text: 'Automated billing summaries for storage & handling charges' },
      { icon: TrendingUp, text: 'Drastically reduced month-end processing time' },
      { icon: Layers, text: 'Improved financial transparency for client invoicing' },
    ],
    tags: ['HTML/CSS/JS', 'Web App', 'Automation', 'Billing', 'Logistics'],
    status: 'Live · Production',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    mockupData: [40, 55, 48, 72, 65, 88, 79, 91, 84, 95, 90, 98],
  },
  {
    id: 2,
    icon: Cpu,
    label: 'SAP Automation',
    labelColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'SAP VBA Macro Suite — WIP & GOGI Error Clearance',
    company: 'Alstom Transport India · Coimbatore',
    companyColor: 'text-purple-300',
    description:
      'Custom Excel VBA macros developed to automate the clearance of negative WIP (Work in Progress) and GOGI (Goods Out/Goods In) errors in SAP S/4HANA. Eliminated hours of manual data entry per week and significantly increased SAP system reliability and data integrity.',
    gradient: 'from-purple-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-purple-500/30',
    glowColor: 'rgba(139,92,246,0.06)',
    features: [
      { icon: Cpu, text: 'Automated negative WIP error clearance in SAP MM/WM' },
      { icon: CheckCircle2, text: 'GOGI error detection and auto-correction routines' },
      { icon: TrendingUp, text: 'Eliminated manual data entry bottlenecks' },
      { icon: BarChart3, text: 'Increased SAP data integrity and system reliability' },
    ],
    tags: ['Excel VBA', 'SAP MM', 'SAP WM', 'Macros', 'S/4HANA'],
    status: 'Deployed',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    mockupData: [30, 42, 38, 55, 62, 71, 68, 79, 74, 85, 80, 90],
  },
  {
    id: 3,
    icon: Package,
    label: 'Warehouse Design',
    labelColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Warehouse Layout Optimisation — Dynamic Storage Design',
    company: 'ISS Global Forwarding · Dubai',
    companyColor: 'text-cyan-300',
    description:
      'Designed and implemented an optimised warehouse layout with dynamic storage locations, tailored specifically for data centre logistics. Systematic rearrangement of picking routes and storage zones reduced cycle times and boosted overall floor productivity.',
    gradient: 'from-cyan-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-cyan-500/30',
    glowColor: 'rgba(6,182,212,0.06)',
    features: [
      { icon: Package, text: 'Dynamic storage location design for IT hardware' },
      { icon: CheckCircle2, text: 'Reduced picking cycle times with optimised routes' },
      { icon: TrendingUp, text: 'Increased overall floor productivity' },
      { icon: Layers, text: 'Lean 5S methodology applied throughout' },
    ],
    tags: ['Warehouse Design', 'Lean 5S', 'AutoCAD', 'Operations', 'Data Centre Logistics'],
    status: 'Implemented',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    mockupData: [55, 60, 58, 65, 70, 68, 75, 80, 77, 85, 83, 91],
  },
  {
    id: 4,
    icon: Code2,
    label: 'Personal Project',
    labelColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Portfolio Website — satteches.com',
    company: 'Personal · satteches.com',
    companyColor: 'text-amber-300',
    description:
      'Built a professional portfolio website from scratch to showcase my supply chain expertise, projects, and career journey. Designed with a focus on performance, visual polish, and smooth user experience using modern web technologies.',
    gradient: 'from-amber-600/15 via-transparent to-transparent',
    borderGlow: 'hover:border-amber-500/30',
    glowColor: 'rgba(245,158,11,0.06)',
    features: [
      { icon: Code2, text: 'Built with Next.js 15, TypeScript, and Tailwind CSS v4' },
      { icon: CheckCircle2, text: 'Framer Motion animations with scroll-triggered reveals' },
      { icon: TrendingUp, text: 'Deployed on Vercel with edge performance optimisations' },
      { icon: Layers, text: 'Fully responsive — mobile, tablet, and desktop' },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    status: 'Live',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    link: 'https://satteches.com',
    mockupData: [20, 35, 30, 48, 55, 60, 70, 75, 72, 83, 88, 95],
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="h-16 w-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <polygon points={`0,100 ${points} 100,100`} fill={`url(#grad-${color.replace('#', '')})`} />
      </svg>
    </div>
  );
}

const chartColors = ['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b'];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#0c0c14' }}>
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
            <Layers size={12} />
            Featured Projects
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Work That <span className="gradient-text">Delivers</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real solutions built for real operations — from SAP automation macros to internal web tools that transformed how teams work.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ scale: 1.003, boxShadow: `0 30px 60px ${project.glowColor}` }}
              className={`relative glass rounded-2xl border border-white/5 ${project.borderGlow} overflow-hidden transition-all duration-500 group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Left — info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${project.labelColor}`}>
                        <project.icon size={12} />
                        {project.label}
                      </span>
                      <span className={`px-3 py-1 rounded-full border text-xs font-medium ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className={`text-sm font-medium ${project.companyColor}`}>{project.company}</p>
                    </div>

                    <p className="text-gray-400 leading-relaxed">{project.description}</p>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-2">
                          <feature.icon size={13} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 glass border border-white/10 rounded-lg text-gray-400 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {project.link ? (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-medium shimmer-btn"
                        >
                          <ExternalLink size={13} />
                          View Live
                        </motion.a>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-medium opacity-60 cursor-default"
                        >
                          <ExternalLink size={13} />
                          Internal Tool
                        </motion.button>
                      )}
                      <motion.a
                        href="https://github.com/satta02122002-ops"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2 glass border border-white/10 hover:border-white/20 rounded-lg text-gray-300 text-sm font-medium"
                      >
                        <Github size={13} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>

                  {/* Right — mini chart */}
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Output Trend</span>
                      <span className="text-xs text-green-400 font-medium">↑ Active</span>
                    </div>
                    <MiniChart data={project.mockupData} color={chartColors[index]} />
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="glass rounded-lg p-3 border border-white/5 text-center">
                        <p className="text-lg font-bold text-white">
                          {project.mockupData[project.mockupData.length - 1]}%
                        </p>
                        <p className="text-xs text-gray-500">Current</p>
                      </div>
                      <div className="glass rounded-lg p-3 border border-white/5 text-center">
                        <p className="text-lg font-bold text-green-400">
                          +{Math.round(
                            ((project.mockupData[project.mockupData.length - 1] - project.mockupData[0]) /
                              project.mockupData[0]) * 100
                          )}%
                        </p>
                        <p className="text-xs text-gray-500">Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

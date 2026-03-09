'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeUpSm, stagger, staggerSm, staggerFast } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Users, Navigation, ExternalLink, Github, TrendingUp, CheckCircle2, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: BarChart3,
    label: 'Data Analytics',
    labelColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    title: 'Supply Chain Analytics Dashboard',
    description: 'An end-to-end Power BI analytics solution transforming raw logistics data into executive-level intelligence for supply chain decision makers.',
    gradient: 'from-indigo-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-indigo-500/30',
    glowColor: 'rgba(99,102,241,0.08)',
    features: [
      { icon: TrendingUp, text: 'Revenue trend analysis with YoY comparison' },
      { icon: CheckCircle2, text: 'Quotation approval rate & pipeline tracking' },
      { icon: BarChart3, text: 'Monthly shipment volume visualization' },
      { icon: Layers, text: 'Equipment brand performance breakdown' },
    ],
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    status: 'Completed',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    mockupData: [65, 78, 52, 89, 73, 95, 81, 67, 88, 72, 91, 84],
  },
  {
    id: 2,
    icon: Users,
    label: 'Productivity System',
    labelColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'Warehouse Productivity Tracking System',
    description: 'A comprehensive workforce analytics platform monitoring employee productivity, attendance patterns, and task completion rates in real-time.',
    gradient: 'from-purple-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-purple-500/30',
    glowColor: 'rgba(139,92,246,0.08)',
    features: [
      { icon: CheckCircle2, text: 'Real-time employee attendance tracking' },
      { icon: TrendingUp, text: 'Working hours & overtime analysis' },
      { icon: BarChart3, text: 'Task productivity metrics & KPIs' },
      { icon: Users, text: 'Team performance comparison dashboards' },
    ],
    tags: ['Excel', 'Power Query', 'VBA', 'Charts'],
    status: 'Completed',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    mockupData: [88, 72, 95, 61, 84, 77, 92, 68, 85, 79, 90, 73],
  },
  {
    id: 3,
    icon: Navigation,
    label: 'AI Concept',
    labelColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Logistics Route Optimization Concept',
    description: 'An AI-powered conceptual system designed to determine the most efficient delivery routes by processing multiple real-time data streams simultaneously.',
    gradient: 'from-cyan-600/20 via-transparent to-transparent',
    borderGlow: 'hover:border-cyan-500/30',
    glowColor: 'rgba(6,182,212,0.08)',
    features: [
      { icon: Navigation, text: 'Real-time traffic data integration' },
      { icon: CheckCircle2, text: 'Dynamic weather condition routing' },
      { icon: TrendingUp, text: 'Fuel cost optimization algorithms' },
      { icon: Layers, text: 'Multi-stop delivery sequencing' },
    ],
    tags: ['Python', 'ML', 'Route APIs', 'Optimization'],
    status: 'In Progress',
    statusColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    mockupData: [45, 62, 38, 74, 55, 81, 49, 67, 58, 72, 63, 77],
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="h-16 w-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points={`0,100 ${points} 100,100`}
          fill={`url(#grad-${color})`}
        />
      </svg>
    </div>
  );
}

const chartColors = ['#6366f1', '#8b5cf6', '#06b6d4'];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
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
            Work That <span className="gradient-text">Speaks</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real projects that solve real logistics problems — from analytics dashboards to AI-powered optimization concepts.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
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
              whileHover={{
                scale: 1.005,
                boxShadow: `0 30px 60px ${project.glowColor}`,
              }}
              className={`relative glass rounded-2xl border border-white/5 ${project.borderGlow} overflow-hidden transition-all duration-500 group`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Left — Project info */}
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

                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-indigo-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-2">
                          <feature.icon size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
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

                    <div className="flex items-center gap-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2 glass border border-white/10 hover:border-white/20 rounded-lg text-gray-300 text-sm font-medium"
                      >
                        <Github size={14} />
                        Source
                      </motion.button>
                    </div>
                  </div>

                  {/* Right — Mini dashboard */}
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Performance</span>
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
                          +{Math.round((project.mockupData[project.mockupData.length - 1] - project.mockupData[0]) / project.mockupData[0] * 100)}%
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

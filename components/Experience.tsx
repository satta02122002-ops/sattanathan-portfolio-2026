'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeUpSm, stagger, staggerSm, staggerFast } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Logistics Coordinator',
    company: 'Dubai Logistics Operations',
    period: '2022 – Present',
    location: 'Dubai, UAE',
    type: 'Full-time',
    current: true,
    color: 'indigo',
    responsibilities: [
      'Managed end-to-end inventory control and warehouse stock reconciliation',
      'Coordinated domestic and international shipment documentation and customs clearance',
      'Oversaw warehouse operations including receiving, storage, and dispatch workflows',
      'Maintained supply chain communication between vendors, freight forwarders, and clients',
      'Built Excel-based tracking systems for shipment status and delivery performance KPIs',
      'Reduced documentation errors by 30% through process standardization',
    ],
    achievements: [
      { label: 'Shipments Managed', value: '1,000+' },
      { label: 'Error Reduction', value: '30%' },
      { label: 'Team Size', value: '15+' },
    ],
  },
  {
    role: 'Warehouse Associate',
    company: 'Supply Chain Operations',
    period: '2020 – 2022',
    location: 'Dubai, UAE',
    type: 'Full-time',
    current: false,
    color: 'purple',
    responsibilities: [
      'Performed receiving, put-away, picking, packing and shipping tasks',
      'Maintained inventory accuracy through cycle counting and bin management',
      'Operated WMS (Warehouse Management System) for order processing',
      'Ensured compliance with safety and operational procedures',
      'Collaborated with team leads to meet daily throughput targets',
    ],
    achievements: [
      { label: 'Accuracy Rate', value: '98%' },
      { label: 'Orders Processed', value: '500/day' },
      { label: 'Safety Record', value: 'Zero incidents' },
    ],
  },
];

const certifications = [
  { name: 'Power BI Data Analyst', issuer: 'Microsoft', year: '2024', color: 'text-yellow-400' },
  { name: 'Supply Chain Fundamentals', issuer: 'APICS', year: '2023', color: 'text-blue-400' },
  { name: 'SQL for Data Analysis', issuer: 'Coursera', year: '2024', color: 'text-green-400' },
  { name: 'Logistics & Freight Management', issuer: 'FIATA', year: '2022', color: 'text-purple-400' },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#0c0c14' }}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-widest mb-4">
            <Briefcase size={12} />
            Professional Experience
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Career <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building deep domain expertise in logistics operations before transforming that knowledge into data-driven solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-1.5 ${
                      exp.current
                        ? 'bg-indigo-500 ring-4 ring-indigo-500/20'
                        : 'bg-purple-500/50 ring-4 ring-purple-500/10'
                    }`}
                  />
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/40 to-purple-500/10 min-h-[20px] mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    className="glass rounded-2xl border border-white/5 hover:border-indigo-500/20 p-6 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-indigo-300 font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp) => (
                        <div key={resp} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/5">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement.label} className="text-center">
                          <p className="text-sm font-bold gradient-text">{achievement.value}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{achievement.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications sidebar */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-yellow-400" />
              <h3 className="text-white font-bold text-lg">Certifications</h3>
            </motion.div>

            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass rounded-xl border border-white/5 hover:border-yellow-500/20 p-4 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Award size={14} className="text-yellow-400" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold ${cert.color}`}>{cert.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div variants={fadeUp} className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-cyan-400" />
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              <div className="glass rounded-xl border border-white/5 p-4">
                <p className="text-white font-medium text-sm">Bachelor&apos;s in Business Administration</p>
                <p className="text-cyan-400 text-xs mt-1">Supply Chain & Logistics Management</p>
                <p className="text-gray-500 text-xs mt-0.5">India · 2019</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

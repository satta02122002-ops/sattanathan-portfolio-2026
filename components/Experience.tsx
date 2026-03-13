'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap, ShieldCheck } from 'lucide-react';

const experiences = [
  {
    role: 'Logistics Coordinator',
    company: 'ISS Global Forwarding UAE LLC',
    period: 'March 2024 – Present',
    location: 'Dubai, UAE',
    type: 'Full-time',
    current: true,
    color: 'indigo',
    dot: 'bg-indigo-500 ring-4 ring-indigo-500/20',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/30',
    responsibilities: [
      'Owned end-to-end logistics for 10+ global/regional clients, ensuring SLA compliance and real-time shipment tracking',
      'Managed Dubai Customs clearance (BOE) and standardised ASN-to-GRN reconciliation workflows, reducing discrepancies by 15%',
      'Designed optimised warehouse layouts with dynamic storage locations, cutting picking cycle times significantly',
      'Executed specialised data centre logistics (IT hardware, RMA warranty claims, failed device processing) under tight SLAs',
      'Built an internal web-based billing & activity tracking tool that automated month-end storage/handling charge summaries',
      'Generated weekly/monthly KPI reports on inventory health, transport costs, and operational performance for stakeholders',
    ],
    achievements: [
      { label: 'Discrepancy Reduction', value: '15%' },
      { label: 'Global Clients', value: '10+' },
      { label: 'Month-End Automation', value: '100%' },
    ],
  },
  {
    role: 'Warehouse Associate & Executive',
    company: 'Alstom Transport India Pvt. Ltd.',
    period: 'October 2021 – October 2023',
    location: 'Coimbatore, India',
    type: 'Full-time',
    current: false,
    color: 'purple',
    dot: 'bg-purple-500/60 ring-4 ring-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/30',
    responsibilities: [
      'Primary SAP S/4HANA key user for MM & WM modules — updated Material Master, configured dynamic/fixed storage locations',
      'Led kitting and material picking for large-scale rail manufacturing projects, ensuring 100% on-time supply to production lines',
      'Conducted 30–40 daily cycle counts of high-value items, performed Root Cause Analysis, and implemented corrective actions',
      'Developed Excel VBA macros to automate clearance of negative WIP/GOGI SAP errors, eliminating manual data entry',
      'Spearheaded 5S implementation across the warehouse, monitored operator KPIs via Delmia Apriso',
      'Operated MHE (battery pallet jacks, hand cranes) under strict EHS protocols for hazardous material handling',
    ],
    achievements: [
      { label: 'Inventory Accuracy', value: '99.5%' },
      { label: 'Daily Cycle Counts', value: '30–40' },
      { label: 'SAP Modules', value: 'MM & WM' },
    ],
  },
  {
    role: 'Store Assistant',
    company: 'Youngshin Automotive India Pvt. Ltd.',
    period: 'December 2020 – September 2021',
    location: 'Sriperumbudur, India',
    type: 'Full-time',
    current: false,
    color: 'blue',
    dot: 'bg-blue-500/50 ring-4 ring-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/30',
    responsibilities: [
      'Managed full inbound/outbound cycle: receiving, inspection, storage, and distribution of automotive materials',
      'Maintained meticulous inventory records against purchase orders, ensuring all stock was labelled and correctly located',
      'Prepared and packaged outbound shipments in compliance with automotive storage and safety guidelines',
      'Coordinated with vendors for timely deliveries and outbound dispatch',
    ],
    achievements: [
      { label: 'Stock Accuracy', value: '98%+' },
      { label: 'Material Type', value: 'Automotive' },
      { label: 'Compliance', value: 'Full EHS' },
    ],
  },
];

const certifications = [
  { name: 'Lean Six Sigma', issuer: 'PMI', year: '2024', color: 'text-amber-400' },
  { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft', year: '2024', color: 'text-blue-400' },
  { name: 'International Logistics & Global Trade', issuer: 'LinkedIn', year: '2023', color: 'text-indigo-400' },
  { name: 'Supply Chain Foundations', issuer: 'NASBA', year: '2023', color: 'text-green-400' },
  { name: 'Learning SAP MM', issuer: 'LinkedIn', year: '2022', color: 'text-purple-400' },
  { name: 'Excel Essential Training (M365)', issuer: 'LinkedIn', year: '2023', color: 'text-cyan-400' },
];

const awards = [
  {
    title: '5S Initiative Award',
    desc: 'Recognised by Alstom for outstanding 5S implementation enhancing workplace organisation and safety.',
    date: 'May 2023',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    title: 'GSI Excellence & Excellent',
    desc: 'Recognised at Alstom for exceptional training and expertise in SAP MM and WM modules.',
    date: 'July 2022',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
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
            4+ years building deep domain expertise across automotive manufacturing, rail production, and international freight forwarding.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline — 2 cols */}
          <div className="lg:col-span-2 space-y-0 min-w-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-1.5 ${exp.dot}`}
                  />
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/30 to-purple-500/5 min-h-[20px] mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className="pb-10 flex-1 min-w-0">
                  <motion.div
                    whileHover={{ scale: 1.003 }}
                    className={`glass rounded-2xl border border-white/5 ${exp.hoverBorder} p-6 transition-all duration-300`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-indigo-300 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                          <Calendar size={11} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-5">
                      {exp.responsibilities.map((resp) => (
                        <div key={resp} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                      {exp.achievements.map((a) => (
                        <div key={a.label} className="text-center">
                          <p className="text-sm font-bold gradient-text">{a.value}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{a.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar — certs, awards, education */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Awards */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-amber-400" />
                <h3 className="text-white font-bold">Awards</h3>
              </div>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award.title} className={`glass rounded-xl border ${award.border} p-4`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${award.bg} border ${award.border} flex items-center justify-center flex-shrink-0`}>
                        <Award size={14} className={award.color} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${award.color}`}>{award.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{award.desc}</p>
                        <p className="text-gray-600 text-xs mt-1">{award.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-indigo-400" />
                <h3 className="text-white font-bold">Certifications</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    whileHover={{ x: 3 }}
                    className="glass rounded-xl border border-white/5 hover:border-white/10 p-3 transition-all duration-300"
                  >
                    <p className={`text-xs font-semibold ${cert.color}`}>{cert.name}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-cyan-400" />
                <h3 className="text-white font-bold">Education</h3>
              </div>
              <div className="glass rounded-xl border border-white/5 p-4">
                <p className="text-white font-semibold text-sm">Diploma in Mechanical Engineering</p>
                <p className="text-cyan-400 text-xs mt-1">Government Polytechnic College</p>
                <p className="text-gray-500 text-xs mt-0.5">Tuticorin, India · 2017–2020</p>
              </div>
            </motion.div>

            {/* Volunteering */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400 text-base">🤝</span>
                <h3 className="text-white font-bold text-sm">Volunteering</h3>
              </div>
              <div className="space-y-2">
                {[
                  'Fire Safety & Emergency First Aid Volunteer — ISS Global Forwarding',
                  'Team Organiser "Lion Hearts" (300+ employees) — Alstom',
                  'Sports Day Event Organiser — Government Polytechnic College',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={12} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-xs leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

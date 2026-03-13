'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: 'Engineering',
    categoryColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    title: 'How I Built an Internal Billing Tool to Automate Month-End Processing',
    excerpt:
      'Month-end billing at a 3PL was a week-long manual nightmare — cross-checking picking slips, calculating storage charges, and compiling client invoices by hand. Here\'s how I built a web-based internal tool that turned that process into a 5-minute task.',
    date: 'Feb 2025',
    readTime: '6 min read',
    tags: ['Web App', '3PL', 'Automation', 'Billing'],
    gradient: 'from-indigo-500/10 to-transparent',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/40',
    dotColor: 'bg-indigo-400',
  },
  {
    id: 2,
    category: 'SAP & Automation',
    categoryColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'SAP S/4HANA: Clearing Negative WIP Errors with Excel VBA Macros',
    excerpt:
      'Negative WIP and GOGI errors in SAP MM/WM are a constant headache in manufacturing warehouses. Manual clearance takes hours and introduces human error. I wrote a set of VBA macros that automate the entire process — here\'s exactly how they work.',
    date: 'Jan 2025',
    readTime: '8 min read',
    tags: ['SAP', 'VBA', 'Warehouse', 'S/4HANA'],
    gradient: 'from-purple-500/10 to-transparent',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
    dotColor: 'bg-purple-400',
  },
  {
    id: 3,
    category: 'Operations',
    categoryColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: '5S Implementation: How We Achieved 99.5% Inventory Accuracy in a Rail Manufacturing Warehouse',
    excerpt:
      'Implementing 5S sounds straightforward on paper. Making it stick in a high-velocity manufacturing environment with 300+ employees, multiple production lines, and daily SAP cycle counts is an entirely different challenge. Here\'s the real story.',
    date: 'Dec 2024',
    readTime: '7 min read',
    tags: ['5S', 'Lean', 'Warehouse', 'SAP', 'Alstom'],
    gradient: 'from-cyan-500/10 to-transparent',
    border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/40',
    dotColor: 'bg-cyan-400',
  },
  {
    id: 4,
    category: 'Career',
    categoryColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'From the Warehouse Floor to Building Tech: My Supply Chain Transition Story',
    excerpt:
      'I started my career operating a pallet jack and counting stock. Today I\'m building automation tools and analytics dashboards. This is the honest story of how 4 years on the warehouse floor became the strongest foundation I could have for a career in supply chain tech.',
    date: 'Nov 2024',
    readTime: '5 min read',
    tags: ['Career', 'Transition', 'Supply Chain', 'Tech'],
    gradient: 'from-amber-500/10 to-transparent',
    border: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/40',
    dotColor: 'bg-amber-400',
  },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-4">
              <BookOpen size={12} />
              Blog & Insights
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-3">
              Writing About <span className="gradient-text">Supply Chain</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              Practical articles on logistics operations, SAP automation, warehouse management, and my career journey in supply chain tech.
            </motion.p>
          </div>

          <motion.a
            variants={fadeUp}
            href="https://satteches.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, x: 4 }}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 glass border border-white/10 hover:border-indigo-500/30 rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
          >
            All Articles
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              whileHover={{ scale: 1.01, y: -3 }}
              className={`relative glass rounded-2xl border ${post.border} ${post.hoverBorder} overflow-hidden transition-all duration-300 group cursor-pointer`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${post.gradient}`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6">
                {/* Category + meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-gray-600 text-xs">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base lg:text-lg leading-snug mb-3 group-hover:text-indigo-100 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/3 border border-white/8 text-gray-500 text-xs">
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-indigo-400 transition-colors flex-shrink-0">
                    Read more
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Index number */}
              <div className="absolute top-5 right-5 text-5xl font-black text-white/3 leading-none select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-sm">
            More articles published regularly on{' '}
            <a
              href="https://satteches.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              satteches.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeUpSm, stagger, staggerSm, staggerFast } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sattanathan@email.com',
    href: 'mailto:sattanathan@email.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sattanathan',
    href: 'https://linkedin.com/in/sattanathan',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dubai, UAE',
    href: null,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-500 bg-white/5 border transition-all duration-300 outline-none ${
      focused === field
        ? 'border-indigo-500/50 bg-white/[0.07] shadow-[0_0_0_3px_rgba(99,102,241,0.1)]'
        : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#0c0c14' }}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-widest mb-4">
            <MessageSquare size={12} />
            Get in Touch
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you&apos;re looking for a data analyst, want to collaborate on logistics tech, or just want to chat supply chain — I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Contact Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                className={`glass rounded-xl border ${item.border} p-4 transition-all duration-300`}
              >
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} className={item.color} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                      <p className={`text-sm font-medium ${item.color} group-hover:underline`}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} className={item.color} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                      <p className={`text-sm font-medium ${item.color}`}>{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div variants={fadeUp} className="glass rounded-xl border border-green-500/20 p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Open to data analyst roles, freelance projects, and supply chain consulting opportunities globally.
              </p>
            </motion.div>

            {/* Response time */}
            <motion.div variants={fadeUp} className="glass rounded-xl border border-white/5 p-4">
              <p className="text-gray-500 text-xs">
                ⚡ Typical response time: <span className="text-gray-300 font-medium">within 24 hours</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl border border-white/5 p-6 lg:p-8">
              <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        className={inputClass('name')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      placeholder="How can I help you?"
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project, opportunity, or question..."
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={14} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl text-white font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shimmer-btn"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

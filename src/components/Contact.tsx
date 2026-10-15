import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formState
    const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject || `Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}`, color: 'text-indigo-400' },
    { icon: <Phone size={20} />, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}`, color: 'text-emerald-400' },
    { icon: <MapPin size={20} />, label: 'Location', value: portfolioData.personal.location, href: null, color: 'text-pink-400' },
    { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', value: 'janani-r-68a3a3407', href: portfolioData.personal.linkedin, color: 'text-cyan-400' },
  ]

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">Let's Connect</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            I'm actively looking for entry-level opportunities. Drop me a message and I'll get back to you!
          </p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold gradient-text mb-2">Open to Opportunities</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Whether you're a recruiter, hiring manager, or fellow developer — I'd love to hear from you.
                I'm particularly interested in Python Developer, Backend Developer, and Full Stack Fresher roles.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${info.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm font-medium hover:text-indigo-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* LinkedIn profile */}
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center gap-4 glass-card rounded-2xl p-5 group"
              style={{ borderColor: 'rgba(6,182,212,0.2)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center text-white text-xl flex-shrink-0">
                in
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Connect on LinkedIn</p>
                <p className="text-gray-400 text-xs">linkedin.com/in/janani-r-68a3a3407</p>
              </div>
              <div className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors">→</div>
            </motion.a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Job Opportunity / Collaboration / Query"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Janani, I came across your portfolio and wanted to discuss..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} /> Message Sent! ✨
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              <p className="text-gray-600 text-xs text-center">
                * This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

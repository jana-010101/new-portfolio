import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const roles = portfolioData.personal.typingRoles

// Floating Python icon positions
const floatingIcons = [
  { icon: '🐍', x: '8%', y: '15%', size: 'text-4xl', delay: 0 },
  { icon: '🔷', x: '88%', y: '12%', size: 'text-3xl', delay: 1.5 },
  { icon: '⚙️', x: '5%', y: '65%', size: 'text-3xl', delay: 0.8 },
  { icon: '🗄️', x: '91%', y: '60%', size: 'text-2xl', delay: 2 },
  { icon: '🌐', x: '78%', y: '85%', size: 'text-2xl', delay: 1.2 },
  { icon: '📦', x: '18%', y: '85%', size: 'text-2xl', delay: 2.5 },
  { icon: '🔗', x: '85%', y: '38%', size: 'text-2xl', delay: 0.4 },
  { icon: '☁️', x: '12%', y: '38%', size: 'text-3xl', delay: 1.8 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: number

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1600)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Floating background icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`fixed pointer-events-none select-none ${item.size} opacity-20`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -5, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5 + i * 0.7,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-emerald-400 border border-emerald-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Work • Actively Seeking Entry-Level Roles
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight"
        >
          <span className="gradient-text">Janani R</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 h-12 flex items-center justify-center gap-2"
        >
          <span className="text-gray-500">I'm a</span>
          <span className="gradient-text-pink min-w-[280px] text-left typing-cursor">
            {displayed}
          </span>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-10 text-sm"
        >
          <MapPin size={16} className="text-indigo-400" />
          {portfolioData.personal.location}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleContactClick}
            className="btn-primary flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </motion.button>

          <motion.a
            href={`tel:${portfolioData.personal.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Quick contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: <Mail size={20} />, label: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
            { icon: <Phone size={20} />, label: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
            { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', href: portfolioData.personal.linkedin },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-indigo-500/40 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

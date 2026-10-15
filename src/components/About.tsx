import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { Heart, Code2, Target, Lightbulb } from 'lucide-react'

const highlights = [
  { icon: <Code2 size={22} />, label: 'Technical Focus', value: 'Python Full Stack', color: 'text-indigo-400' },
  { icon: <Heart size={22} />, label: 'Passion', value: 'Clean Code & Problem-Solving', color: 'text-pink-400' },
  { icon: <Target size={22} />, label: 'Goal', value: 'Software Engineer', color: 'text-emerald-400' },
  { icon: <Lightbulb size={22} />, label: 'Learning', value: 'Continuously Upskilling', color: 'text-yellow-400' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl glass-card flex items-center justify-center relative overflow-hidden glow">
                <span className="text-8xl">👩‍💻</span>
                <div className="absolute inset-0 opacity-10"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)' }} />
              </div>
              {/* Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-3 -right-3 bg-indigo-600 rounded-xl px-3 py-1 text-xs font-bold shadow-lg"
              >
                🎓 MCA Student
              </motion.div>
            </div>

            {/* Highlight cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 w-full max-w-sm"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="glass-card rounded-xl p-4 card-hover"
                >
                  <div className={`mb-1 ${h.color}`}>{h.icon}</div>
                  <p className="text-gray-500 text-xs mb-1">{h.label}</p>
                  <p className="text-white text-xs font-semibold">{h.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold gradient-text mb-3">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {portfolioData.personal.summary}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold gradient-text mb-3">Career Objective</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {portfolioData.careerObjective}
              </p>
            </div>

            {/* Soft skills */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold gradient-text mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.softSkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium glass border border-indigo-500/20 text-indigo-300 cursor-default"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

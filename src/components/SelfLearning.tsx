import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { BookOpen } from 'lucide-react'

export default function SelfLearning() {
  return (
    <section id="learning" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">Always Growing</p>
          <h2 className="section-title">Learning Journey</h2>
          <p className="section-subtitle">
            No internship yet — but here's what I've been building, exploring, and mastering on my own
          </p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.selfLearning.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl p-6 group card-hover"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${item.color} shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={14} className="text-indigo-400" />
                    <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">Active Learning</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                  <span>Progress</span>
                  <span className="text-indigo-400">In Progress</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${55 + i * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

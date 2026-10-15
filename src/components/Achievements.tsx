import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const typeColors: Record<string, string> = {
  Academic: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Certification: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Programme: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">Milestones</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognitions, milestones, and proud moments in my academic and professional journey</p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl p-6 group card-hover"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                  className="text-4xl flex-shrink-0"
                >
                  {achievement.icon}
                </motion.div>
                <div>
                  <div className="mb-2">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeColors[achievement.type] || typeColors.Academic}`}>
                      {achievement.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

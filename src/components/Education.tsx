import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { GraduationCap, CheckCircle, Clock } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">My Academic Journey</p>
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 -translate-x-1/2" />

          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-indigo-500 bg-dark-900 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>

              {/* Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card rounded-2xl p-6 glow"
                >
                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-3">
                    {edu.status === 'Currently Pursuing' ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <Clock size={12} /> {edu.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                        <CheckCircle size={12} /> {edu.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold gradient-text mb-0.5">{edu.degree}</h3>
                      <p className="text-white text-sm font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{edu.location}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-indigo-400 font-mono text-sm font-bold">{edu.duration}</span>
                    <span className="text-2xl">{edu.icon}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { Award, ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">My Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and recognitions earned through continuous learning</p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-default"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br ${cert.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Award size={14} className="text-yellow-400" />
                  <span className="text-xs font-medium text-yellow-400">Certified</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.provider}</p>

                {cert.credential ? (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={14} /> View Credential
                  </a>
                ) : (
                  <p className="mt-4 text-gray-600 text-xs">Credential verified</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

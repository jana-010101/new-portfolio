import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden card-hover"
    >
      {/* Header gradient banner */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      {/* Project icon + title */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                {project.type}
              </span>
              <h3 className="text-base font-bold text-white mt-1 leading-snug">{project.title}</h3>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium glass border border-indigo-500/20 text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Show Less' : 'View Details'}
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4 border-t border-white/5 mt-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">✨ Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-emerald-400 mt-0.5">→</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">⚡ Challenges</h4>
                  <ul className="space-y-1">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-yellow-400 mt-0.5">→</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learnings */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">🎓 Learning Outcomes</h4>
                  <ul className="space-y-1">
                    {project.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-indigo-400 mt-0.5">→</span> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer actions */}
      <div className="px-6 pb-5 flex gap-3">
        {project.github ? (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-indigo-500/50 transition-all"
          >
            <FaGithub size={16} /> GitHub
          </motion.a>
        ) : (
          <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/5 text-sm text-gray-600 cursor-not-allowed">
            <FaGithub size={16} /> Private
          </div>
        )}
        {project.demo ? (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl btn-primary text-sm"
          >
            <ExternalLink size={16} /> Live Demo
          </motion.a>
        ) : (
          <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/5 text-sm text-gray-600 cursor-not-allowed">
            <ExternalLink size={16} /> No Demo
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Academic and personal projects that demonstrate my skills and learning journey</p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

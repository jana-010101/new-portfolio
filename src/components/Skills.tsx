import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

type CategoryKey = keyof typeof portfolioData.skills

const categories: { key: CategoryKey; label: string; color: string }[] = [
  { key: 'languages', label: 'Languages', color: 'from-indigo-500 to-purple-600' },
  { key: 'backend', label: 'Backend', color: 'from-cyan-500 to-blue-600' },
  { key: 'databases', label: 'Databases', color: 'from-emerald-500 to-teal-600' },
  { key: 'libraries', label: 'Libraries', color: 'from-yellow-500 to-orange-500' },
  { key: 'tools', label: 'Dev Tools', color: 'from-pink-500 to-rose-600' },
  { key: 'concepts', label: 'Concepts', color: 'from-violet-500 to-indigo-600' },
]

function SkillCard({ skill, index }: { skill: { name: string; level: number; icon: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-card rounded-xl p-4 card-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-xs font-bold gradient-text">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('languages')

  const skills = portfolioData.skills[activeCategory]

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">A curated set of technologies I actively use and continuously grow in</p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'text-white shadow-lg'
                  : 'glass text-gray-400 hover:text-white border border-white/10'
              }`}
              style={
                activeCategory === cat.key
                  ? { background: `linear-gradient(135deg, var(--tw-gradient-stops))`, boxShadow: '0 4px 20px rgba(99,102,241,0.4)' }
                  : {}
              }
            >
              {activeCategory === cat.key ? (
                <span className={`bg-gradient-to-r ${cat.color} bg-clip-text text-transparent font-bold`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', background: `linear-gradient(135deg, white, white)` }}>
                  {cat.label}
                </span>
              ) : cat.label}
            </motion.button>
          ))}
        </div>

        {/* Active tab indicator line */}
        <div className="flex justify-center mb-10">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className={`h-0.5 flex-1 max-w-[80px] rounded-full transition-all duration-300 mx-1 ${
                activeCategory === cat.key
                  ? `bg-gradient-to-r ${cat.color} opacity-100`
                  : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {(skills as { name: string; level: number; icon: string }[]).map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Overall stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '5+', label: 'Languages & Frameworks', icon: '🐍' },
            { value: '3', label: 'Databases', icon: '🗄️' },
            { value: '3+', label: 'Certifications', icon: '🏆' },
            { value: '2+', label: 'Projects Completed', icon: '🚀' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

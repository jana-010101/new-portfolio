import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center mesh-gradient z-50">
      {/* Glowing Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center glass-card glow">
          <span className="text-4xl">🐍</span>
        </div>
        <motion.div
          className="absolute -inset-2 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            opacity: 0.3,
            filter: 'blur(10px)',
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-bold gradient-text mb-2"
      >
        Janani R
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-sm mb-10"
      >
        Python Developer Portfolio
      </motion.p>

      {/* Progress Bar */}
      <motion.div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

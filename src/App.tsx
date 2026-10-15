import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import SelfLearning from './components/SelfLearning'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen mesh-gradient overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb w-[600px] h-[600px] bg-indigo-600 -top-40 -left-40" style={{ animationDelay: '0s' }} />
        <div className="orb w-[500px] h-[500px] bg-violet-600 top-1/3 -right-32" style={{ animationDelay: '-4s' }} />
        <div className="orb w-[400px] h-[400px] bg-cyan-500 bottom-0 left-1/3" style={{ animationDelay: '-8s' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <SelfLearning />
          <Achievements />
          <Contact />
        </main>
        <footer className="py-8 text-center border-t border-white/5">
          <p className="text-gray-500 text-sm">
            © 2025 Janani R. Built with <span className="gradient-text font-semibold">React + TypeScript + Tailwind</span>
          </p>
        </footer>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Closing from './components/Closing'
import './App.css'

// Page entrance overlay animation
const pageVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.45, 0, 0.15, 1] },
  },
}

export default function App() {
  // Prevent flash of unstyled content
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Entrance curtain — fades out on load */}
      <motion.div
        className="page-curtain"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      />

      <Nav />

      <main>
        <Hero />
        <Videos />
      </main>
    </>
  )
}

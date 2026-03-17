import { motion } from 'framer-motion'
import { personal } from '../data/content'
import './Hero.css'

export default function Hero() {
  const scrollToVideos = () => {
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Staggered character/word animation for the name
  const nameParts = personal.name.split(' ')

  return (
    <section className="hero">
      {/* Subtle background grain */}
      <div className="hero-grain" aria-hidden="true" />

      {/* Decorative vertical line */}
      <motion.div
        className="hero-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      <div className="hero-inner container">
        <div className="hero-content">

          {/* Label */}
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="dot" />
            {personal.tagline}
          </motion.div>

          {/* Main Name */}
          <h1 className="hero-name" aria-label={personal.name}>
            {nameParts.map((word, i) => (
              <span className="word-wrap" key={i}>
                <motion.span
                  className="word"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.55 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Role subtitle */}
          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {personal.role}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="hero-cta"
              onClick={scrollToVideos}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Portfolio</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.span
            className="scroll-line"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

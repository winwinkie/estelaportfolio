import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Reusable component: wraps children with a scroll-triggered reveal animation
// Usage: <Reveal> <YourContent /> </Reveal>
// delay prop: stagger children (e.g., delay={0.1} * index)
export default function Reveal({ children, delay = 0, y = 30, once = true, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

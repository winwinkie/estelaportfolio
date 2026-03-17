import { motion, useScroll, useTransform } from 'framer-motion'
import { personal } from '../data/content'
import './Nav.css'

export default function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="nav"
      style={{
        '--bg-opacity': bgOpacity,
        '--border-opacity': borderOpacity,
      }}
    >
      <div className="nav-inner container">
        <motion.span
          className="nav-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {personal.nameShort}
        </motion.span>

        <motion.div
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
          <button onClick={() => scrollTo('videos')}>Portfolio</button>
        </motion.div>
      </div>
    </motion.nav>
  )
}

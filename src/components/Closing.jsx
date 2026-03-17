import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { personal } from '../data/content'
import './Closing.css'

export default function Closing() {
  return (
    <section id="closing" className="closing">
      <div className="closing-bg" aria-hidden="true" />

      <div className="container closing-inner">

        <Reveal y={40}>
          <div className="closing-ornament" aria-hidden="true">
            <span className="ornament-line" />
            <span className="ornament-diamond">✦</span>
            <span className="ornament-line" />
          </div>
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <p className="closing-statement">{personal.closingStatement}</p>
        </Reveal>

        <Reveal delay={0.2} y={24}>
          <p className="closing-subtext">{personal.closingSubtext}</p>
        </Reveal>

        <Reveal delay={0.32} y={20}>
          <div className="closing-name">
            <span>— {personal.name}</span>
          </div>
        </Reveal>

      </div>

      <Reveal delay={0.4}>
        <footer className="footer">
          <div className="container footer-inner">
            <span className="footer-copy">
              {personal.name} · {personal.role}
            </span>
            <span className="footer-year">{new Date().getFullYear()}</span>
          </div>
        </footer>
      </Reveal>
    </section>
  )
}

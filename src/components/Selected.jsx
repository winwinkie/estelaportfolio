import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { selectedWorks } from '../data/content'
import './Selected.css'

function WorkCard({ work, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        className="work-card"
        whileHover={{ y: -3, backgroundColor: 'var(--c-bg-hover)' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="work-card-top">
          <span className="work-number">0{index + 1}</span>
          <div className="work-tags">
            {work.tags.map(tag => (
              <span className="work-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="work-card-body">
          <h3 className="work-title">{work.title}</h3>
          <p className="work-subtitle">{work.subtitle}</p>
          <p className="work-desc">{work.description}</p>
        </div>

        <div className="work-card-arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 14L14 4M14 4H6M14 4v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Selected() {
  return (
    <section id="selected" className="selected">
      <div className="container">

        <div className="section-header">
          <Reveal>
            <span className="section-label">Selected Works</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Highlights &amp; Recognition</h2>
          </Reveal>
        </div>

        <div className="works-grid">
          {selectedWorks.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>

      </div>

      <div className="container">
        <div className="divider" style={{ marginTop: 'clamp(60px, 8vw, 100px)' }} />
      </div>
    </section>
  )
}

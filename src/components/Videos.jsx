import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { videoCategories } from '../data/content'
import './Videos.css'

function VideoCard({ video, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        className="video-card"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="video-embed-wrap">
          <iframe
            className="video-embed"
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="video-info">
          <div className="video-meta">
            <span className="video-category">{video.category}</span>
            <span className="video-year">{video.year}</span>
          </div>
          <h3 className="video-title">{video.title}</h3>
          {video.role && <p className="video-role">{video.role}</p>}
        </div>

        <motion.div
          className="video-card-border"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />
      </motion.article>
    </Reveal>
  )
}

function CategorySection({ category, catIndex }) {
  return (
    <div className="video-category-section">
      {/* Category divider + label */}
      <Reveal delay={0.05}>
        <div className="category-header">
          <div className="category-header-top">
            <span className="category-line" aria-hidden="true" />
            <h3 className="category-label">{category.label}</h3>
            <span className="category-line" aria-hidden="true" />
          </div>
          {category.subtitle && (
            <p className="category-subtitle">{category.subtitle}</p>
          )}
        </div>
      </Reveal>

      {/* Videos grid for this category */}
      <div className="videos-grid">
        {category.videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} />
        ))}
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <section id="videos" className="videos">
      <div className="container">

        <div className="section-header">
          <Reveal>
            <span className="section-label">Portfolio</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Video Portfolio</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub">
              A selection of media work produced as part of school projects.
            </p>
          </Reveal>
        </div>

        {/* Render each category */}
        {videoCategories.map((category, i) => (
          <CategorySection key={category.id} category={category} catIndex={i} />
        ))}

      </div>

      <div className="container">
        <div className="divider" style={{ marginTop: 'clamp(60px, 8vw, 100px)' }} />
      </div>
    </section>
  )
}

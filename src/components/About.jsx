import Reveal from './Reveal'
import { personal } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-left">
          <Reveal delay={0}>
            <span className="section-label">About</span>
          </Reveal>
        </div>

        <div className="about-right">
          {personal.intro.map((para, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <p className={`about-para ${i === 0 ? 'about-para--lead' : ''}`}>
                {para}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="about-accent">
              <span className="about-accent-text">{personal.role}</span>
            </div>
          </Reveal>
        </div>

      </div>

      <div className="container">
        <div className="divider" />
      </div>
    </section>
  )
}

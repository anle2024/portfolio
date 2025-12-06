import React from 'react'

type Props = {
  role: string
  company: string
  location?: string
  period?: string
  bullets?: string[]
  highlight?: boolean
}

export default function ExperienceCard({ role, company, location, period, bullets = [], highlight = false }: Props) {
  return (
    <article className={`card experience-card ${highlight ? 'primary' : ''}`}>
      <header>
        {highlight && <div className="card-badge">Primary</div>}
        <h3>{role}</h3>
        <div className="muted">
          {company} {location ? `— ${location}` : ''}
        </div>
        <div className="muted small">{period}</div>
      </header>

      <ul>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  )
}

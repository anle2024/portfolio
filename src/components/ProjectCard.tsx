import React from 'react'

type Props = {
  name: string
  description: string
  tech?: string[]
  link?: string
}

export default function ProjectCard({ name, description, tech = [], link }: Props) {
  return (
    <article className="card project-card">
      <header>
        <h3>{name}</h3>
      </header>
      <p className="muted">{description}</p>

      <div className="tech">
        {tech.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="card-actions">
        {link && (
          <a className="btn small" href={link} target="_blank" rel="noreferrer">View on GitHub</a>
        )}
      </div>
    </article>
  )
}

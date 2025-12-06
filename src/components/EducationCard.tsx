import React from 'react'

type Props = {
  school: string
  degree: string
  period?: string
  notes?: string
}

export default function EducationCard({ school, degree, period, notes }: Props) {
  return (
    <article className="card education-card">
      <h3>{school}</h3>
      <div className="muted">{degree}</div>
      <div className="muted small">{period}</div>
      {notes && <p className="notes">{notes}</p>}
    </article>
  )
}

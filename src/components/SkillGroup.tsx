import React from 'react'

type Props = {
  title: string
  skills: string[]
}

export default function SkillGroup({ title, skills }: Props) {
  return (
    <div className="card skill-group">
      <h4>{title}</h4>
      <div className="skills-list">
        {skills.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </div>
  )
}

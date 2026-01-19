'use client'

export function StalkerSkills() {
  const skills = [
    'Python',
    'LLMs / VLMs',
    'RAG / Agents',
    'Stable Diffusion (LoRA)',
    'MLOps',
    'AWS / GCP',
    'Kafka',
    'TypeScript',
    'SQL',
  ]

  return (
    <section id="stalker-skills" className="stalker-section">
      <h2 className="section-title">Skills</h2>
      <div className="section-divider"></div>
      <div className="skills-cards">
        {skills.map((s) => (
          <div key={s} className="skill-card">
            <div className="card-label">{s}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


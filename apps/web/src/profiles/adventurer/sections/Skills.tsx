'use client'

export function AdventurerSkills() {
  const skills = [
    'GenAI Systems',
    'LLMs / VLMs',
    'RAG / Agents',
    'Python',
    'MLOps',
    'AWS / GCP',
    'Kafka',
    'TypeScript',
    'SQL',
  ]

  return (
    <section id="adventurer-skills" className="adventurer-section">
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


'use client'

export function RecruiterCoreSkills() {
  const coreSkills = [
    { name: 'Python', category: 'Language', level: 'Expert' },
    { name: 'LLMs / VLMs', category: 'AI/ML', level: 'Advanced' },
    { name: 'GenAI Systems', category: 'AI/ML', level: 'Advanced' },
    { name: 'MLOps', category: 'DevOps', level: 'Advanced' },
    { name: 'AWS / GCP', category: 'Cloud', level: 'Advanced' },
    { name: 'FastAPI', category: 'Backend', level: 'Expert' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced' },
    { name: 'Kafka', category: 'Data', level: 'Intermediate' },
    { name: 'TypeScript', category: 'Language', level: 'Intermediate' },
    { name: 'SQL', category: 'Database', level: 'Advanced' },
  ]

  return (
    <section id="recruiter-skills" className="recruiter-section core-skills-section">
      <h2 className="section-title">Core Technical Skills</h2>
      <div className="section-divider"></div>
      <div className="skills-grid">
        {coreSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </div>
            <div className="skill-category">{skill.category}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

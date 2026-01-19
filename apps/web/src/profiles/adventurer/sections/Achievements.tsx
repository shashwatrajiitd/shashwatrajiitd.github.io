'use client'

export function AdventurerAchievements() {
  const achievements = [
    'JEE Advanced & Mains 2021 — 99.89 percentile nationwide',
    'NTSE Scholar 2019 — National Talent Scholarship',
    'Samsung SWC Test — Qualified on first attempt',
    'Regional Mathematical Olympiad — Certificate of merit (twice)',
  ]

  return (
    <section id="adventurer-achievements" className="adventurer-section">
      <h2 className="section-title">Achievements</h2>
      <div className="section-divider"></div>
      <div className="skills-cards">
        {achievements.map((a) => (
          <div key={a} className="skill-card">
            <div className="card-label">{a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


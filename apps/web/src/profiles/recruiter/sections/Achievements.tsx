'use client'

export function RecruiterAchievements() {
  const achievements = [
    {
      title: 'JEE Advanced & Mains 2021',
      description: '99.89 percentile - Top 0.11% of candidates',
      year: '2021',
    },
    {
      title: 'NTSE Scholar 2019',
      description: 'National Talent Search Examination - Merit Certificate',
      year: '2019',
    },
    {
      title: 'Samsung SWC',
      description: 'Advanced Software Competency Certification (1st attempt)',
      year: '2024',
    },
    {
      title: 'Regional Mathematical Olympiad',
      description: 'Merit Certificate × 2',
      year: '2018-2019',
    },
  ]

  return (
    <section id="recruiter-achievements" className="recruiter-section achievements-section">
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="section-divider"></div>
      <div className="achievements-grid-recruiter">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card-recruiter">
            <div className="achievement-year">{achievement.year}</div>
            <h3 className="achievement-title-recruiter">{achievement.title}</h3>
            <p className="achievement-description-recruiter">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

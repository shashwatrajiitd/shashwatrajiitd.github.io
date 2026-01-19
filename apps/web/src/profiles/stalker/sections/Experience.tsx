'use client'

export function StalkerExperience() {
  const experiences = [
    {
      company: 'Purplle.com',
      role: 'Software Developer (AI Infra)',
      period: 'May 2025 - Present',
      location: 'Mumbai, India',
      summary:
        'Built and deployed an autonomous multi-agent GenAI system for large-scale creative generation across paid marketing channels (Meta, Google Ads). Achieved 10-15x faster production and ~95% cost reduction.',
    },
    {
      company: 'Samsung R&D',
      role: 'Software Developer Intern',
      period: 'May 2024 - July 2024',
      location: 'Bangalore, India',
      summary:
        'Developed a real-time revenue forecasting and anomaly detection pipeline for Samsung Ads, integrating classical regression models with transformer-based time-series architectures.',
    },
  ]

  return (
    <section id="stalker-experience" className="stalker-section">
      <h2 className="section-title">Work experience</h2>
      <div className="section-divider"></div>
      <div className="experience-cards">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-date">
                  <i className="far fa-calendar"></i> {exp.period}
                </span>
                <span className="experience-location">
                  <i className="fas fa-map-marker-alt"></i> {exp.location}
                </span>
              </div>
            </div>
            <div className="experience-summary">
              <p className="summary-text">{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


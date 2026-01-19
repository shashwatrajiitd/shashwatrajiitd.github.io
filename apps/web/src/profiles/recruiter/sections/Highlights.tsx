'use client'

export function RecruiterHighlights() {
  const highlights = [
    {
      icon: 'fa-rocket',
      title: 'Production AI Systems',
      description: 'Architecting and deploying multi-agent GenAI pipelines at scale for 11+ app surfaces',
    },
    {
      icon: 'fa-chart-line',
      title: 'Revenue Impact',
      description: 'Built anomaly detection systems at Samsung R&D that improved revenue forecasting accuracy',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'IIT Delhi',
      description: 'B.Tech Mathematics & Computing from one of India\'s premier technical institutes',
    },
    {
      icon: 'fa-trophy',
      title: 'Top Achiever',
      description: 'JEE Advanced 99.89 percentile, NTSE Scholar, Samsung SWC Advanced Certification',
    },
  ]

  return (
    <section className="recruiter-section highlights-section">
      <h2 className="section-title">Key Highlights</h2>
      <div className="section-divider"></div>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">
              <i className={`fas ${highlight.icon}`}></i>
            </div>
            <h3 className="highlight-title">{highlight.title}</h3>
            <p className="highlight-description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

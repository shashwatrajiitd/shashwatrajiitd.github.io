'use client'

export function AdventurerAdventures() {
  const adventures = [
    {
      title: 'Building Production AI at Scale',
      period: '2024 - Present',
      description: 'The journey of architecting multi-agent GenAI systems that power creative automation for millions of users. Learning to balance innovation with reliability.',
      highlight: '10-15x faster production, 95% cost reduction',
      icon: 'fa-rocket',
    },
    {
      title: 'Samsung R&D Internship',
      period: 'Summer 2024',
      description: 'Diving deep into time-series forecasting and anomaly detection. Built systems that process millions of data points in real-time.',
      highlight: 'Real-time anomaly detection on Kafka streams',
      icon: 'fa-chart-line',
    },
    {
      title: 'IIT Delhi Journey',
      period: '2021 - 2025',
      description: 'From JEE Advanced to building AI systems. The place where I learned that the best code is the one that solves real problems.',
      highlight: 'B.Tech Mathematics & Computing',
      icon: 'fa-graduation-cap',
    },
    {
      title: 'Open Source Contributions',
      period: 'Ongoing',
      description: 'Contributing to projects that matter. From bug fixes to feature implementations, every PR is a learning opportunity.',
      highlight: 'Active on GitHub',
      icon: 'fa-code-branch',
    },
  ]

  return (
    <section className="adventurer-section adventures-section">
      <h2 className="section-title">Adventures</h2>
      <div className="section-divider"></div>
      <div className="adventures-timeline">
        {adventures.map((adventure, index) => (
          <div key={index} className="adventure-card">
            <div className="adventure-icon">
              <i className={`fas ${adventure.icon}`}></i>
            </div>
            <div className="adventure-content">
              <div className="adventure-header">
                <h3 className="adventure-title">{adventure.title}</h3>
                <span className="adventure-period">{adventure.period}</span>
              </div>
              <p className="adventure-description">{adventure.description}</p>
              <div className="adventure-highlight">{adventure.highlight}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

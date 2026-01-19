'use client'

export function RecruiterExperience() {
  const experiences = [
    {
      company: 'Purplle.com',
      role: 'Software Developer',
      period: 'Aug 2024 - Present',
      location: 'Mumbai, IN',
      impact: [
        'Architecting autonomous multi-agent GenAI pipelines for creative automation',
        'Scaling to 11+ app surfaces with Creative Generation Service',
        'Building Master Content Bank (MCB) for content personalization',
      ],
      technologies: ['Python', 'LLMs', 'VLMs', 'Stable Diffusion', 'MLOps', 'AWS'],
    },
    {
      company: 'Samsung R&D',
      role: 'ML Engineering Intern',
      period: 'May 2024 - Jul 2024',
      location: 'Bangalore, IN',
      impact: [
        'Built real-time forecasting + anomaly detection pipeline for ads revenue',
        'Hybrid classical regression + PyTorch transformer time-series models',
        'Residual-based anomaly flagging on Kafka streams',
        'Boosted observability under high-throughput loads',
      ],
      technologies: ['Python', 'PyTorch', 'Kafka', 'Time-Series', 'Anomaly Detection'],
    },
  ]

  return (
    <section id="recruiter-experience" className="recruiter-section experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="section-divider"></div>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card-recruiter">
            <div className="experience-header-recruiter">
              <div>
                <h3 className="experience-role-recruiter">{exp.role}</h3>
                <div className="experience-company-recruiter">{exp.company}</div>
              </div>
              <div className="experience-meta-recruiter">
                <div className="experience-date">{exp.period}</div>
                <div className="experience-location">{exp.location}</div>
              </div>
            </div>
            <div className="experience-impact">
              <h4 className="impact-title">Key Achievements:</h4>
              <ul className="impact-list">
                {exp.impact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="experience-tech">
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

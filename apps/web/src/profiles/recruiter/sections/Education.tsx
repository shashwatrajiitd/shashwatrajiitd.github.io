'use client'

export function RecruiterEducation() {
  return (
    <section id="recruiter-education" className="recruiter-section education-section">
      <h2 className="section-title">Education</h2>
      <div className="section-divider"></div>
      <div className="education-card-recruiter">
        <div className="education-header-recruiter">
          <div>
            <h3 className="education-degree-recruiter">B.Tech Mathematics & Computing</h3>
            <div className="education-institution-recruiter">Indian Institute of Technology Delhi</div>
          </div>
          <div className="education-meta-recruiter">
            <div className="education-date">Oct 2021 - May 2025</div>
            <div className="education-grade">CGPA: 7.0 / 10</div>
          </div>
        </div>
        <div className="education-highlights">
          <p>Pursuing degree from one of India's premier technical institutes with focus on:</p>
          <ul>
            <li>Machine Learning & Artificial Intelligence</li>
            <li>Data Structures & Algorithms</li>
            <li>Distributed Systems & Cloud Computing</li>
            <li>Mathematical Modeling & Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

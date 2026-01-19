'use client'

export function RecruiterContact() {
  return (
    <section id="recruiter-contact" className="recruiter-section contact-section-recruiter">
      <h2 className="section-title">Let's Connect</h2>
      <div className="section-divider"></div>
      <div className="contact-content-recruiter">
        <p className="contact-subtitle-recruiter">
          Open to full-time opportunities in AI/ML Engineering, GenAI Systems, and MLOps roles.
        </p>
        <div className="contact-cta-buttons-recruiter">
          <button
            className="btn btn-primary-cta"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/assets/resume/shashwat_resume.pdf'
              link.download = 'shashwat_resume.pdf'
              link.click()
            }}
          >
            <i className="fas fa-download"></i> Download Resume
          </button>
          <button
            className="btn btn-secondary-cta"
            onClick={() => window.open('mailto:shashwatrajiitd@gmail.com?subject=Interview Opportunity', '_blank')}
          >
            <i className="fas fa-envelope"></i> Email Me
          </button>
          <button
            className="btn btn-secondary-cta"
            onClick={() => window.open('https://www.linkedin.com/in/shashwatrajiitd/', '_blank')}
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </button>
        </div>
        <div className="contact-info-recruiter">
          <div className="contact-item-recruiter">
            <i className="fas fa-envelope"></i>
            <span>shashwatrajiitd@gmail.com</span>
          </div>
          <div className="contact-item-recruiter">
            <i className="fas fa-map-marker-alt"></i>
            <span>Mumbai, India | Open to Relocate</span>
          </div>
          <div className="contact-item-recruiter">
            <i className="fas fa-calendar-check"></i>
            <span>Available for interviews immediately</span>
          </div>
        </div>
      </div>
    </section>
  )
}

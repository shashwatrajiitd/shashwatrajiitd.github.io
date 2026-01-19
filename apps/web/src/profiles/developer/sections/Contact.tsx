'use client'

export function DeveloperContact() {
  return (
    <section id="developer-contact" className="developer-section developer-contact-section">
      <h2 className="section-title">HIRE ME</h2>
      <div className="section-divider"></div>
      <div className="contact-content">
        <p className="contact-subtitle">Ready to build something amazing together?</p>
        <div className="contact-cta-buttons">
          <button
            className="btn btn-primary-cta"
            onClick={() => {
              window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=Interview+with+Shashwat+Raj&add=shashwatrajiitd@gmail.com', '_blank')
            }}
          >
            <i className="fas fa-calendar-check"></i> Schedule Interview
          </button>
          <button
            className="btn btn-secondary-cta"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/assets/resume/shashwat_resume.pdf'
              link.download = 'shashwat_resume.pdf'
              link.click()
            }}
          >
            <i className="fas fa-file-pdf"></i> Download Resume
          </button>
          <a
            href="mailto:shashwatrajiitd@gmail.com"
            className="btn btn-info-cta"
          >
            <i className="fas fa-envelope"></i> Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

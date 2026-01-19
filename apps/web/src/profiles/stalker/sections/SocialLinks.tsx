'use client'

export function StalkerSocialLinks() {
  const socialLinks = [
    {
      platform: 'GitHub',
      username: 'shashwatrajiitd',
      url: 'https://github.com/shashwatrajiitd',
      icon: 'fab fa-github',
      color: '#333',
    },
    {
      platform: 'LinkedIn',
      username: 'shashwatrajiitd',
      url: 'https://www.linkedin.com/in/shashwatrajiitd/',
      icon: 'fab fa-linkedin',
      color: '#0077b5',
    },
    {
      platform: 'Email',
      username: 'shashwatrajiitd@gmail.com',
      url: 'mailto:shashwatrajiitd@gmail.com',
      icon: 'fas fa-envelope',
      color: '#ea4335',
    },
    {
      platform: 'Portfolio',
      username: 'shashwatrajiitd.github.io',
      url: 'https://shashwatrajiitd.github.io',
      icon: 'fas fa-globe',
      color: '#4285f4',
    },
  ]

  return (
    <section className="stalker-section social-links-section">
      <h2 className="section-title">Find Me Online</h2>
      <div className="section-divider"></div>
      <div className="social-grid">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <div className="social-icon" style={{ color: link.color }}>
              <i className={link.icon}></i>
            </div>
            <div className="social-info">
              <div className="social-platform">{link.platform}</div>
              <div className="social-username">{link.username}</div>
            </div>
            <i className="fas fa-external-link-alt social-external"></i>
          </a>
        ))}
      </div>
    </section>
  )
}

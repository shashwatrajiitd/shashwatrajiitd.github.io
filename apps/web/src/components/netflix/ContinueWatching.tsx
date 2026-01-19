'use client'

interface ContinueWatchingProps {
  profileId: string
}

const SECTIONS = [
  { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-code', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 'achievements', label: 'Achievements', icon: 'fas fa-trophy', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
]

export function ContinueWatching({ profileId }: ContinueWatchingProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`${profileId}-${sectionId}`)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="continue-watching">
      <h2 className="section-title" id="continue-watching-title">
        Continue Watching for {profileId.charAt(0).toUpperCase() + profileId.slice(1)}
      </h2>
      <div className="watching-cards">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="watching-card"
            onClick={() => scrollToSection(section.id)}
          >
            <div className="card-image" style={{ background: section.gradient }}>
              <i className={section.icon}></i>
            </div>
            <div className="card-label">{section.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

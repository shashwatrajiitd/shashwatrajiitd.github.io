'use client'

interface ContinueWatchingItem {
  label: string
  targetId: string
  iconClass: string
  gradient: string
}

export function ContinueWatching(props: { title: string; items: ContinueWatchingItem[] }) {
  const { title, items } = props

  const goTo = (targetId: string) => {
    try {
      window.location.hash = targetId
    } catch {
      // ignore
    }
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'auto', block: 'start' })
    window.scrollBy({ top: -80, left: 0 })
  }

  return (
    <section className="continue-watching">
      <h2 className="section-title" id="continue-watching-title">
        {title}
      </h2>
      <div className="watching-cards">
        {items.map((item) => (
          <div
            key={item.targetId}
            className="watching-card"
            role="button"
            tabIndex={0}
            onClick={() => goTo(item.targetId)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                goTo(item.targetId)
              }
            }}
          >
            <div className="card-image" style={{ background: `linear-gradient(${item.gradient})` }}>
              <i className={item.iconClass}></i>
            </div>
            <div className="card-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


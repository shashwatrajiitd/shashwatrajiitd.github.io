'use client'

export function StalkerPersonalInfo() {
  const personalFacts = [
    { label: 'Birthday', value: 'Ask me in person 😉' },
    { label: 'Location', value: 'Mumbai, India' },
    { label: 'Timezone', value: 'IST (UTC+5:30)' },
    { label: 'Coffee Preference', value: 'Black, no sugar' },
    { label: 'Favorite Editor', value: 'Cursor AI (obviously)' },
    { label: 'Coding Time', value: 'Late night owl 🦉' },
    { label: 'Music While Coding', value: 'Lo-fi hip hop' },
    { label: 'Current Obsession', value: 'Multi-agent AI systems' },
  ]

  return (
    <section className="stalker-section personal-info-section">
      <h2 className="section-title">Personal Info</h2>
      <div className="section-divider"></div>
      <div className="facts-grid">
        {personalFacts.map((fact, index) => (
          <div key={index} className="fact-card">
            <div className="fact-label">{fact.label}</div>
            <div className="fact-value">{fact.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

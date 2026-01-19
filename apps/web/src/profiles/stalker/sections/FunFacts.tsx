'use client'

export function StalkerFunFacts() {
  const funFacts = [
    {
      icon: 'fa-code',
      title: 'First Line of Code',
      description: 'Written in 2018 - a simple "Hello World" in Python. The rest is history.',
    },
    {
      icon: 'fa-coffee',
      title: 'Coffee Consumption',
      description: 'Average 3-4 cups per day during crunch time. Yes, I track it.',
    },
    {
      icon: 'fa-book',
      title: 'Learning Style',
      description: 'Learn by building. Break things, fix them, repeat. Documentation is my friend.',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Best Ideas',
      description: 'Come at 2 AM. Most of my side projects started as late-night experiments.',
    },
    {
      icon: 'fa-bug',
      title: 'Debugging Philosophy',
      description: 'If it works, it works. If it doesn\'t, there\'s always Stack Overflow.',
    },
    {
      icon: 'fa-rocket',
      title: 'Current Goal',
      description: 'Build an AI system that can debug itself. We\'re getting there.',
    },
  ]

  return (
    <section className="stalker-section fun-facts-section">
      <h2 className="section-title">Fun Facts & Quirks</h2>
      <div className="section-divider"></div>
      <div className="facts-grid-large">
        {funFacts.map((fact, index) => (
          <div key={index} className="fun-fact-card">
            <div className="fun-fact-icon">
              <i className={`fas ${fact.icon}`}></i>
            </div>
            <h3 className="fun-fact-title">{fact.title}</h3>
            <p className="fun-fact-description">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

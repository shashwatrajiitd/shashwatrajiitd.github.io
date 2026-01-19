'use client'

export function AdventurerLessons() {
  const lessons = [
    {
      lesson: 'Start Small, Scale Smart',
      description: 'Every big system started as a simple prototype. Focus on solving the problem first, optimize later.',
    },
    {
      lesson: 'Code is Read More Than Written',
      description: 'Write code for humans first, machines second. Good documentation saves hours of debugging.',
    },
    {
      lesson: 'Fail Fast, Learn Faster',
      description: 'The best learning happens when things break. Embrace errors, they\'re just feedback in disguise.',
    },
    {
      lesson: 'Build in Public',
      description: 'Share your journey. The community is incredibly supportive, and you\'ll learn more than you teach.',
    },
  ]

  return (
    <section className="adventurer-section lessons-section">
      <h2 className="section-title">Lessons Learned</h2>
      <div className="section-divider"></div>
      <div className="lessons-grid">
        {lessons.map((item, index) => (
          <div key={index} className="lesson-card">
            <h3 className="lesson-title">{item.lesson}</h3>
            <p className="lesson-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

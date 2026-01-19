'use client'

import { ContinueWatching } from '@/components/shared/ContinueWatching'

export function DeveloperContinueWatching() {
  return (
    <ContinueWatching
      title="Continue Watching for Developer"
      items={[
        { label: 'Experience', targetId: 'developer-experience', iconClass: 'fas fa-briefcase', gradient: '135deg, #667eea 0%, #764ba2 100%' },
        { label: 'Skills', targetId: 'developer-skills', iconClass: 'fas fa-code', gradient: '135deg, #f093fb 0%, #f5576c 100%' },
        { label: 'Education', targetId: 'developer-education', iconClass: 'fas fa-graduation-cap', gradient: '135deg, #4facfe 0%, #00f2fe 100%' },
        { label: 'Achievements', targetId: 'developer-achievements', iconClass: 'fas fa-trophy', gradient: '135deg, #fa709a 0%, #fee140 100%' },
        { label: 'Contact', targetId: 'developer-contact', iconClass: 'fas fa-envelope', gradient: '135deg, #30cfd0 0%, #330867 100%' },
      ]}
    />
  )
}


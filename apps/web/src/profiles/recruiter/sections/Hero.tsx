'use client'

import { useEffect, useRef } from 'react'

export function RecruiterHero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeVideoCarousel = () => {
      const container = videoContainerRef.current
      if (!container) return

      const videos = ['r1.mp4', 'r2.mp4', 'r3.mp4']
      let currentIndex = 0

      videos.forEach((videoFile, index) => {
        const video = document.createElement('video')
        video.className = 'hero-video'
        video.src = `/assets/bg_videos/recruiter_profile/${videoFile}`
        video.autoplay = true
        video.muted = true
        video.loop = true
        video.playsInline = true
        video.preload = 'auto'

        if (index === 0) {
          video.classList.add('active')
        }

        container.appendChild(video)
      })

      const switchVideo = () => {
        const videos = container.querySelectorAll('.hero-video')
        if (videos.length === 0) return

        videos[currentIndex].classList.remove('active')
        currentIndex = (currentIndex + 1) % videos.length
        videos[currentIndex].classList.add('active')
      }

      setInterval(switchVideo, 10000)
    }

    initializeVideoCarousel()
  }, [])

  return (
    <section className="recruiter-hero" id="recruiter-hero">
      <div className="hero-background">
        <div id="hero-video-container" className="hero-video-container" ref={videoContainerRef}></div>
        <div className="hero-overlay"></div>
      </div>
      <div className="recruiter-hero-content">
        <div className="hero-badge">Available for Opportunities</div>
        <h1 className="recruiter-hero-title">Shashwat Raj</h1>
        <p className="recruiter-hero-subtitle">
          AI Engineer | IIT Delhi | Building Scalable AI Systems
        </p>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-value">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">5+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
        <div className="hero-cta-buttons">
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
            <i className="fas fa-envelope"></i> Schedule Interview
          </button>
        </div>
      </div>
    </section>
  )
}

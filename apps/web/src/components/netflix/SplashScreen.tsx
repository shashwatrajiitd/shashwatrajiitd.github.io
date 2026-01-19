'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function SplashScreen() {
  const spectrumContainerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Generate spectrum lines
    const container = spectrumContainerRef.current
    if (!container) return

    const getColor = (pos: number) => {
      if (pos < 20) return ['#ff0000', '#ee0000', '#cc0000'][Math.floor(Math.random() * 3)]
      if (pos < 35) return ['#ffcc00', '#ffaa00', '#eeb800'][Math.floor(Math.random() * 3)]
      if (pos < 50) return ['#ff0077', '#ff00aa', '#ff0055'][Math.floor(Math.random() * 3)]
      if (pos < 75) return ['#00ffff', '#00ccff', '#0099ff'][Math.floor(Math.random() * 3)]
      return ['#0000ff', '#0000cc', '#000099'][Math.floor(Math.random() * 3)]
    }

    const lineCount = 100
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div')
      line.className = 'spectrum-line'
      const xPos = Math.random() * 100
      const width = Math.random() * 10 + 2
      const height = 150 + Math.random() * 100
      const opacity = Math.random() * 0.8 + 0.2
      const color = getColor(xPos)

      line.style.left = `${xPos}%`
      line.style.width = `${width}px`
      line.style.height = `${height}%`
      line.style.opacity = `${opacity}`
      line.style.backgroundColor = color
      line.style.color = color
      line.style.transform = `rotate(0deg) translateY(${Math.random() * 20 - 10}%)`
      line.style.animationDelay = `${Math.random() * 1.5}s`

      container.appendChild(line)
    }

    // Play audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(e => {
        console.warn('Audio auto-play failed:', e)
      })
    }

    container.classList.add('spectrum-active')
  }, [])

  return (
    <div 
      id="splash-screen" 
      className="splash-screen"
      style={{
        display: 'flex',
        opacity: 1,
        visibility: 'visible'
      }}
    >
      <div className="netflix-intro-container">
        <Image
          src="/assets/logo.png"
          alt="Shashwat Raj"
          className="netflix-logo-img"
          width={800}
          height={200}
          priority
          unoptimized
        />
        <div className="spectrum-container" ref={spectrumContainerRef}></div>
      </div>
      <audio
        id="intro-sound"
        ref={audioRef}
        src="/assets/audio/Netflix-Intro-Sound-Effect.mp3"
        preload="auto"
      />
    </div>
  )
}

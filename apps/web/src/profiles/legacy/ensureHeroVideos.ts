type ProfileId = 'recruiter' | 'developer' | 'stalker' | 'adventurer'

const VIDEO_MAP: Record<ProfileId, { folder: string; files: string[] }> = {
  recruiter: { folder: 'recruiter_profile', files: ['r1.mp4', 'r2.mp4', 'r3.mp4'] },
  developer: { folder: 'developer_profile', files: ['v0.mp4', 'v1.mp4', 'v2.mp4'] },
  stalker: { folder: 'stalker_profile', files: ['s0.mp4'] },
  adventurer: { folder: 'adventurer_profile', files: ['suits.mp4', 'bb.mp4'] },
}

export function ensureHeroVideos(args: { root: HTMLElement; profileId: ProfileId }) {
  const { root, profileId } = args
  const { folder, files } = VIDEO_MAP[profileId]

  const container = root.querySelector<HTMLElement>('#hero-video-container')
  if (!container) return () => {}

  // If legacy JS already created videos, just attempt to play the active one reliably.
  const existingVideos = Array.from(container.querySelectorAll<HTMLVideoElement>('video.hero-video'))
  if (existingVideos.length > 0) {
    const tryPlay = () => {
      const active = (container.querySelector('video.hero-video.active') as HTMLVideoElement | null) ?? existingVideos[0]
      if (!active) return
      active.muted = true
      active.playsInline = true
      active.play().catch(() => {})
    }

    tryPlay()
    const onFirstUserGesture = () => tryPlay()
    window.addEventListener('pointerdown', onFirstUserGesture, { once: true })
    return () => window.removeEventListener('pointerdown', onFirstUserGesture)
  }

  // Fallback: create our own carousel if legacy JS didn't run.
  container.innerHTML = ''
  let idx = 0
  const videos: HTMLVideoElement[] = []

  files.forEach((file, i) => {
    const v = document.createElement('video')
    v.className = 'hero-video'
    v.src = `/assets/bg_videos/${folder}/${file}`
    v.muted = true
    v.autoplay = i === 0
    v.loop = false
    v.playsInline = true
    v.setAttribute('webkit-playsinline', 'true')
    v.preload = 'auto'
    if (i === 0) v.classList.add('active')
    container.appendChild(v)
    videos.push(v)
  })

  const playActive = () => {
    const v = videos[idx]
    if (!v) return
    v.currentTime = 0
    v.play().catch(() => {})
  }

  const advance = () => {
    const current = videos[idx]
    if (current) {
      current.classList.remove('active')
      current.classList.add('fade-out')
      current.pause()
    }

    idx = (idx + 1) % videos.length
    const next = videos[idx]
    if (!next) return
    setTimeout(() => {
      current?.classList.remove('fade-out')
      next.classList.add('active')
      playActive()
    }, 500)
  }

  videos.forEach(v => v.addEventListener('ended', advance))
  playActive()

  const onFirstUserGesture = () => playActive()
  window.addEventListener('pointerdown', onFirstUserGesture, { once: true })

  return () => {
    window.removeEventListener('pointerdown', onFirstUserGesture)
    videos.forEach(v => {
      try {
        v.pause()
      } catch {}
      v.removeEventListener('ended', advance)
    })
  }
}


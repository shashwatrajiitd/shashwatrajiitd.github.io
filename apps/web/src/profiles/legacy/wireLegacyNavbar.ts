export function wireLegacyNavbar(args: {
  root: HTMLElement
  profileId: 'recruiter' | 'developer' | 'stalker' | 'adventurer'
  onNavigateProfile: (profileId: string) => void
}) {
  const { root, profileId, onNavigateProfile } = args

  // Prevent double-binding when navigating back/forward or re-injecting HTML
  if (root.dataset.legacyNavbarWired === '1') return () => {}
  root.dataset.legacyNavbarWired = '1'

  const navbar = root.querySelector<HTMLElement>(`#${profileId}-navbar`)
  const mobileToggle = root.querySelector<HTMLButtonElement>('.mobile-menu-toggle')
  const navLinks = root.querySelector<HTMLElement>('.nav-links')
  const profileSelector = root.querySelector<HTMLElement>('.profile-selector-container')
  const profileTile = root.querySelector<HTMLElement>('.profile-tile-wrapper')
  const profileItems = Array.from(root.querySelectorAll<HTMLElement>('.profile-dropdown-item'))

  const disposers: Array<() => void> = []

  // Mobile menu open/close (legacy HTML has button but legacy JS did not include this)
  if (navbar && mobileToggle && navLinks) {
    const onToggle = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      navbar.classList.toggle('nav-open')
    }
    mobileToggle.addEventListener('click', onToggle)
    disposers.push(() => mobileToggle.removeEventListener('click', onToggle))

    // Close menu when clicking a link
    const onNavLinkClick = (e: Event) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest('a')
      if (a) navbar.classList.remove('nav-open')
    }
    navLinks.addEventListener('click', onNavLinkClick)
    disposers.push(() => navLinks.removeEventListener('click', onNavLinkClick))
  }

  // Profile dropdown open/close + navigation
  if (profileSelector && profileTile) {
    // Legacy HTML uses inline onclick="toggleProfileDropdown(event)" which may throw
    // if legacy JS hasn't loaded yet; we own the behavior here.
    try {
      profileTile.removeAttribute('onclick')
    } catch {}
    // Improve accessibility + allow automated browser tools to target it reliably
    profileTile.setAttribute('role', 'button')
    profileTile.setAttribute('tabindex', '0')
    profileTile.setAttribute('aria-label', 'Profile menu')

    const onToggleDropdown = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      profileSelector.classList.toggle('active')
    }
    profileTile.addEventListener('click', onToggleDropdown)
    disposers.push(() => profileTile.removeEventListener('click', onToggleDropdown))

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        profileSelector.classList.toggle('active')
      }
    }
    profileTile.addEventListener('keydown', onKeyDown)
    disposers.push(() => profileTile.removeEventListener('keydown', onKeyDown))
  }

  if (profileItems.length > 0) {
    profileItems.forEach(item => {
      item.setAttribute('role', 'button')
      item.setAttribute('tabindex', '0')
      const onClick = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        const name =
          item.getAttribute('data-profile') ??
          item.querySelector('.profile-dropdown-name')?.textContent?.trim() ??
          ''
        if (!name) return
        profileSelector?.classList.remove('active')
        onNavigateProfile(name.toLowerCase())
      }
      item.addEventListener('click', onClick)
      disposers.push(() => item.removeEventListener('click', onClick))

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          item.click()
        }
      }
      item.addEventListener('keydown', onKeyDown)
      disposers.push(() => item.removeEventListener('keydown', onKeyDown))
    })
  }

  // Close dropdown + mobile menu when clicking outside
  const onDocClick = (e: MouseEvent) => {
    const t = e.target as Node | null
    if (profileSelector && t && !profileSelector.contains(t)) {
      profileSelector.classList.remove('active')
    }
    const nb = navbar
    if (nb && t && !nb.contains(t)) {
      nb.classList.remove('nav-open')
    }
  }
  document.addEventListener('click', onDocClick)
  disposers.push(() => document.removeEventListener('click', onDocClick))

  return () => disposers.forEach(d => d())
}


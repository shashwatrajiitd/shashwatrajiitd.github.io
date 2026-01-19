type ProfileId = 'recruiter' | 'developer' | 'stalker' | 'adventurer'

function toTitleCase(input: string) {
  const preserveUpper = new Set(['AI', 'IIT', 'R&D', 'ML', 'LLM', 'LLMS', 'VLM', 'VLMS', 'MLOPS', 'AWS', 'GCP', 'SQL'])

  return input
    .split(/\s+/)
    .map((raw) => {
      if (!raw) return raw
      const word = raw.trim()
      if (!word) return word

      // keep separators/words that already contain punctuation/digits (except simple hyphens)
      const hasDigit = /\d/.test(word)
      if (hasDigit) return word

      // handle "GenAI" / mixed-case words: keep if it already has lower+upper
      if (/[a-z]/.test(word) && /[A-Z]/.test(word)) return word

      // preserve acronyms
      const upper = word.toUpperCase()
      if (preserveUpper.has(upper) || (upper.length <= 3 && word === upper)) return upper

      // title-case hyphenated words
      const parts = word.split('-')
      const cased = parts
        .map((p) => {
          if (!p) return p
          const pu = p.toUpperCase()
          if (preserveUpper.has(pu) || (pu.length <= 3 && p === pu)) return pu
          return p.toLowerCase().replace(/^./, (c) => c.toUpperCase())
        })
        .join('-')

      return cased
    })
    .join(' ')
}

function getScrollableAncestor(el: HTMLElement | null) {
  let cur = el?.parentElement ?? null
  while (cur) {
    const style = window.getComputedStyle(cur)
    const overflowY = style.overflowY
    const overflow = style.overflow
    const canScroll = /(auto|scroll|overlay)/.test(`${overflowY} ${overflow}`)
    if (canScroll && cur.scrollHeight > cur.clientHeight + 1) return cur
    cur = cur.parentElement
  }
  return null
}

function smoothScrollToId(id: string, root?: HTMLElement) {
  const rootTarget =
    root?.querySelector<HTMLElement>(`#${typeof CSS !== 'undefined' && 'escape' in CSS ? CSS.escape(id) : id}`) ?? null
  const target = rootTarget ?? (document.getElementById(id) as HTMLElement | null)
  if (!target) {
    if (process.env.NODE_ENV !== 'production') {
      const w = window as unknown as Record<string, unknown>
      const key = '__wireLegacyPage_missingTargets'
      const seen = (w[key] as Set<string> | undefined) ?? new Set<string>()
      if (!seen.has(id)) {
        // eslint-disable-next-line no-console
        console.debug('[wireLegacyPage] target not found for id:', id)
        seen.add(id)
        w[key] = seen
      }
    }
    return
  }
  if (process.env.NODE_ENV !== 'production') {
    const w = window as unknown as Record<string, unknown>
    const key = '__wireLegacyPage_scrollCalls'
    const seen = (w[key] as Set<string> | undefined) ?? new Set<string>()
    if (!seen.has(id)) {
      // eslint-disable-next-line no-console
      console.debug('[wireLegacyPage] scrolling to id:', id)
      seen.add(id)
      w[key] = seen
    }
  }

  const offset = 80
  const scroller = getScrollableAncestor(target) ?? (document.scrollingElement as HTMLElement | null)

  // Default page scroll
  if (!scroller || scroller === document.documentElement || scroller === document.body) {
    // Force a deterministic jump first (more reliable than smooth scrolling in some layouts),
    // then apply the navbar offset.
    target.scrollIntoView({ behavior: 'auto', block: 'start' })
    window.scrollBy({ top: -offset, left: 0 })
    return
  }

  // Nested scroll container
  const targetRect = target.getBoundingClientRect()
  const scrollerRect = scroller.getBoundingClientRect()
  const top = targetRect.top - scrollerRect.top + scroller.scrollTop - offset
  scroller.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

function parseScrollToSectionTarget(onclick: string) {
  // Supports: scrollToSection('id') and scrollToSection("id")
  const match = onclick.match(/scrollToSection\(\s*(['"])([^'"]+)\1\s*\)/)
  return match?.[2] ?? null
}

function setHash(id: string) {
  try {
    // Use native hash updates so the browser fires `hashchange` reliably.
    // (Some environments disallow monkey-patching history methods.)
    window.location.hash = encodeURIComponent(id)
  } catch {
    // ignore
  }
}

export function wireLegacyPage(args: { root: HTMLElement; profileId: ProfileId }) {
  const { root, profileId } = args
  const disposers: Array<() => void> = []

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[wireLegacyPage] wiring profile:', profileId)
  }

  const scheduleScrollToId = (id: string) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[wireLegacyPage] schedule scroll:', id)
    }
    // Use timers instead of rAF; some environments throttle rAF aggressively.
    window.setTimeout(() => smoothScrollToId(id, root), 0)
    window.setTimeout(() => smoothScrollToId(id, root), 50)
  }

  // Provide a stable implementation for legacy inline handlers + internal callers.
  // This keeps behavior consistent even when legacy scripts don't re-init after client-side navigation.
  ;(window as unknown as Record<string, unknown>).scrollToSection = (sectionId: string) => {
    scheduleScrollToId(sectionId)
  }

  // Debug: confirm we see anchor clicks in the injected subtree.
  if (process.env.NODE_ENV !== 'production') {
    const onDebugAnchorClick = (e: Event) => {
      const t = e.target as HTMLElement | null
      const a = t?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      // eslint-disable-next-line no-console
      console.debug('[wireLegacyPage] saw anchor click:', a.getAttribute('href'))
    }
    root.addEventListener('click', onDebugAnchorClick, true)
    disposers.push(() => root.removeEventListener('click', onDebugAnchorClick, true))
  }

  // Standardize section titles: Title Case (Netflix-style)
  const titles = Array.from(root.querySelectorAll<HTMLElement>('.section-title'))
  titles.forEach((el) => {
    const text = (el.textContent ?? '').trim()
    if (!text) return
    el.textContent = toTitleCase(text)
  })

  // Continue Watching tiles: remove brittle inline onclick and wire clicks reliably
  const watchingCards = Array.from(root.querySelectorAll<HTMLElement>('.watching-card'))
  watchingCards.forEach((card) => {
    const onclick = card.getAttribute('onclick') ?? ''
    const targetId = parseScrollToSectionTarget(onclick)
    if (!targetId) return

    try {
      card.removeAttribute('onclick')
    } catch {}
    card.setAttribute('role', 'button')
    card.setAttribute('tabindex', '0')
    card.style.cursor = 'pointer'

    const onClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      scheduleScrollToId(targetId)
      setHash(targetId)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scheduleScrollToId(targetId)
      }
    }
    card.addEventListener('click', onClick)
    card.addEventListener('keydown', onKeyDown)
    disposers.push(() => {
      card.removeEventListener('click', onClick)
      card.removeEventListener('keydown', onKeyDown)
    })
  })

  // Robust navigation: handle hash anchors + watching-card clicks even if legacy scripts
  // attach conflicting handlers, or the page is injected multiple times.
  const onRootClickCapture = (e: Event) => {
    const target = e.target as HTMLElement | null
    if (!target) return

    // Continue Watching (delegate; works even if cards were re-rendered by legacy JS)
    const card = target.closest<HTMLElement>('.watching-card')
    if (card) {
      const onclick = card.getAttribute('onclick') ?? ''
      const targetId = parseScrollToSectionTarget(onclick) ?? card.getAttribute('data-target-id')
      if (targetId) {
        e.preventDefault()
        ;(e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation?.()
        e.stopPropagation()
        scheduleScrollToId(targetId)
        setHash(targetId)
        return
      }
    }

    // Navbar (and any other) hash links: smooth scroll + offset
    const a = target.closest<HTMLAnchorElement>('a[href^="#"]')
    if (a) {
      const href = a.getAttribute('href') ?? ''
      const id = href.replace(/^#/, '').trim()
      if (!id) return

      e.preventDefault()
      ;(e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation?.()
      e.stopPropagation()
      setHash(id)
      scheduleScrollToId(id)
    }
  }
  root.addEventListener('click', onRootClickCapture, true)
  disposers.push(() => root.removeEventListener('click', onRootClickCapture, true))

  const onRootKeydownCapture = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    const target = e.target as HTMLElement | null
    const card = target?.closest<HTMLElement>('.watching-card')
    if (!card) return

    const onclick = card.getAttribute('onclick') ?? ''
    const targetId = parseScrollToSectionTarget(onclick) ?? card.getAttribute('data-target-id')
    if (!targetId) return

    e.preventDefault()
    ;(e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation?.()
    e.stopPropagation()
  scheduleScrollToId(targetId)
    setHash(targetId)
  }
  root.addEventListener('keydown', onRootKeydownCapture, true)
  disposers.push(() => root.removeEventListener('keydown', onRootKeydownCapture, true))

  // Fallback: if something else updates the hash (e.g., default anchor behavior),
  // still perform the scroll ourselves (including nested scrollers).
  const onHashChange = () => {
    const raw = window.location.hash.replace(/^#/, '')
    const id = decodeURIComponent(raw).trim()
    if (!id) return
    // Only act on section ids that belong to this injected page
    scheduleScrollToId(id)
  }
  window.addEventListener('hashchange', onHashChange)
  disposers.push(() => window.removeEventListener('hashchange', onHashChange))

  // Frosted navbar when hero is out of view
  const navbar = root.querySelector<HTMLElement>(`#${profileId}-navbar`)
  const hero = root.querySelector<HTMLElement>(`#${profileId}-hero`)
  if (navbar && hero && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) navbar.classList.remove('frosted')
        else navbar.classList.add('frosted')
      },
      { root: null, threshold: 0.05 },
    )
    obs.observe(hero)
    disposers.push(() => obs.disconnect())
  } else if (navbar) {
    const onScroll = () => {
      // fallback: frosted after scrolling ~1 viewport height
      const shouldFrost = window.scrollY > window.innerHeight * 0.5
      navbar.classList.toggle('frosted', shouldFrost)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    disposers.push(() => window.removeEventListener('scroll', onScroll))
  }

  return () => disposers.forEach((d) => d())
}


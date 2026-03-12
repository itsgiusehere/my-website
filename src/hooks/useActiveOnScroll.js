import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Tracks which element in a list of refs is currently most visible,
 * and which have been seen at least once.
 * Returns [setRef, activeIndex, seenSet].
 *
 * Usage:
 *   const [setRef, activeIndex, seen] = useActiveOnScroll(count)
 *   <div ref={el => setRef(el, 0)} className={seen.has(0) ? 'seen' : ''} />
 */
export function useActiveOnScroll(count) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [seen, setSeen] = useState(() => new Set([0]))
  const elementsRef = useRef([])

  const setRef = useCallback((el, index) => {
    elementsRef.current[index] = el
  }, [])

  useEffect(() => {
    const elements = elementsRef.current.filter(Boolean)
    if (elements.length === 0) return

    const ratios = new Map()

    const observer = new IntersectionObserver(
      entries => {
        const newSeen = []

        entries.forEach(entry => {
          ratios.set(entry.target, entry.intersectionRatio)
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target)
            if (idx !== -1) newSeen.push(idx)
          }
        })

        if (newSeen.length > 0) {
          setSeen(prev => {
            const hasAll = newSeen.every(i => prev.has(i))
            if (hasAll) return prev
            const next = new Set(prev)
            newSeen.forEach(i => next.add(i))
            return next
          })
        }

        let maxRatio = 0
        let maxIndex = 0
        elements.forEach((el, i) => {
          const ratio = ratios.get(el) || 0
          if (ratio > maxRatio) {
            maxRatio = ratio
            maxIndex = i
          }
        })

        if (maxRatio > 0) {
          setActiveIndex(maxIndex)
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5], rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [count])

  return [setRef, activeIndex, seen]
}

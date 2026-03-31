'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function BootIntro() {
  const pathname = usePathname()
  const [overlayOpacity, setOverlayOpacity] = useState(1)
  const [line1Top, setLine1Top] = useState('-1px')
  const [line2Bottom, setLine2Bottom] = useState('-1px')
  const [linesVisible, setLinesVisible] = useState(false)
  const [flashVisible, setFlashVisible] = useState(false)
  const [textOpacity, setTextOpacity] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (pathname === '/resume') {
      // SHORT FLICKER ONLY for resume page
      const steps = [
        [0,    () => setOverlayOpacity(1)],
        [100,  () => setOverlayOpacity(0.70)],
        [165,  () => setOverlayOpacity(1)],
        [230,  () => setOverlayOpacity(0.40)],
        [295,  () => setOverlayOpacity(1)],
        [360,  () => setOverlayOpacity(0.12)],
        [425,  () => setOverlayOpacity(1)],
        [490,  () => setOverlayOpacity(0)],
        [1050, () => setDone(true)],
      ]
      steps.forEach(([t, fn]) => setTimeout(fn, t))
      return
    }

    // FULL BOOT for portfolio page '/'
    // Step 1: show lines at edges
    setTimeout(() => {
      setLinesVisible(true)
    }, 300)

    // Step 2: animate lines to center (280ms — faster meet)
    setTimeout(() => {
      setLine1Top('calc(50vh - 1px)')
      setLine2Bottom('calc(50vh - 1px)')
    }, 350)

    // Step 3: hide lines, show flash (after lines finish: 350 + 280 + buffer)
    setTimeout(() => {
      setLinesVisible(false)
      setFlashVisible(true)
    }, 680)

    // Step 4: hide flash, show text
    setTimeout(() => {
      setFlashVisible(false)
      setTextOpacity(1)
    }, 900)

    // Step 5: hide text
    setTimeout(() => {
      setTextOpacity(0)
    }, 2100)

    // Step 6: subtle flicker — 3 flickers (70ms between each step)
    const flickerSteps = [
      [2300, () => setOverlayOpacity(0.75)],
      [2370, () => setOverlayOpacity(1)],
      [2440, () => setOverlayOpacity(0.50)],
      [2510, () => setOverlayOpacity(1)],
      [2580, () => setOverlayOpacity(0.25)],
      [2650, () => setOverlayOpacity(1)],
    ]
    flickerSteps.forEach(([t, fn]) => setTimeout(fn, t))

    // Step 7: final smooth reveal
    setTimeout(() => setOverlayOpacity(0), 2900)
    setTimeout(() => setDone(true), 3750)

  }, [pathname])

  if (!mounted || done) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'black',
        opacity: overlayOpacity,
        pointerEvents: 'none',
        transition: overlayOpacity === 0 ? 'opacity 800ms ease-out' : 'none',
      }}
    >
      {/* Top line — starts at very top, moves to center */}
      {linesVisible && (
        <div style={{
          position: 'absolute',
          top: line1Top,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(34,211,238,0.9)',
          boxShadow: '0 0 12px 2px rgba(34,211,238,0.8)',
          transition: 'top 280ms ease-in-out',
        }} />
      )}

      {/* Bottom line — starts at very bottom, moves to center */}
      {linesVisible && (
        <div style={{
          position: 'absolute',
          bottom: line2Bottom,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(34,211,238,0.9)',
          boxShadow: '0 0 12px 2px rgba(34,211,238,0.8)',
          transition: 'bottom 280ms ease-in-out',
        }} />
      )}

      {/* Center flash when lines meet */}
      {flashVisible && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.25) 0%, transparent 65%)',
          animation: 'fadeOut 200ms ease-out forwards',
        }} />
      )}

      {/* Boot text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        opacity: textOpacity,
        transition: 'opacity 300ms ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          color: '#22d3ee',
          fontFamily: 'monospace',
          fontSize: '11px',
          letterSpacing: '0.3em',
          marginBottom: '8px',
        }}>
          NEURAL LINK ESTABLISHED
        </div>
        <div style={{
          color: 'white',
          opacity: 0.7,
          fontFamily: 'monospace',
          fontSize: '11px',
          letterSpacing: '0.25em',
        }}>
          MC.SYS // ONLINE
        </div>
      </div>

      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

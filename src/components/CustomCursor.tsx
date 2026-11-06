import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Smooth springs for outer trailing circle ring
  const ringX = useSpring(0, { damping: 24, stiffness: 280, mass: 0.5 })
  const ringY = useSpring(0, { damping: 24, stiffness: 280, mass: 0.5 })

  // Faster springs for inner dot
  const dotX = useSpring(0, { damping: 35, stiffness: 900 })
  const dotY = useSpring(0, { damping: 35, stiffness: 900 })

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hover state on clickable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest('a, button, input, textarea, select, [role="button"], .interactive-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [ringX, ringY, dotX, dotY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Smooth Glowing Circle Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(167, 139, 250, 0.9)' : 'rgba(34, 211, 238, 0.6)',
          backgroundColor: isHovered ? 'rgba(167, 139, 250, 0.15)' : 'rgba(34, 211, 238, 0.05)',
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 h-9 w-9 rounded-full border-2 border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-[1px]"
      />

      {/* Inner Precision Glowing Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.5 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#a78bfa' : '#22d3ee',
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee]"
      />
    </div>
  )
}

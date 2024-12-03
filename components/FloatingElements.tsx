"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX / width) * 2 - 1
      const y = (clientY / height) * 2 - 1
      
      containerRef.current.style.setProperty('--mouse-x', x.toString())
      containerRef.current.style.setProperty('--mouse-y', y.toString())
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: ["calc(var(--mouse-x, 0) * -20px)", "calc(var(--mouse-x, 0) * 20px)"],
          y: ["calc(var(--mouse-y, 0) * -20px)", "calc(var(--mouse-y, 0) * 20px)"],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: ["calc(var(--mouse-x, 0) * 20px)", "calc(var(--mouse-x, 0) * -20px)"],
          y: ["calc(var(--mouse-y, 0) * 20px)", "calc(var(--mouse-y, 0) * -20px)"],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  )
}


"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    const particles: Particle[] = []

    const ACCENT = getComputedStyle(document.documentElement).getPropertyValue("--color-ds-fire") || "#ff7a1a"

    function spawn() {
      const p: Particle = {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        life: 0,
        maxLife: 200 + Math.random() * 200,
      }
      particles.push(p)
    }

    let raf = 0
    function loop() {
      raf = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, width, height)

      // Add a few new particles each frame
      for (let i = 0; i < 3; i++) spawn()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const alpha = 1 - p.life / p.maxLife
        if (alpha <= 0 || p.y < -10) {
          particles.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.fillStyle = `color-mix(in oklch, ${ACCENT.trim()} 90%, transparent)`
        ctx.shadowBlur = 15
        ctx.shadowColor = ACCENT
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    function onResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", onResize)
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 -z-10 opacity-40" />
}

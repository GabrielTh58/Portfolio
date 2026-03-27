"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAnimado() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 1.5 + 0.5 // Bolinhas menores e mais delicadas
        this.speedX = (Math.random() - 0.5) * 0.4 // Movimento um pouco mais lento
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.5 + 0.1
        // Azul da nossa paleta
        this.color = "59, 130, 246" 
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Interação com o Mouse (suave)
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 120) {
          const force = (120 - distance) / 120
          this.x -= dx * force * 0.015
          this.y -= dy * force * 0.015
        }

        // Se sair da tela, volta pelo outro lado
        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    const initParticles = () => {
      // OTIMIZAÇÃO: Reduzido drasticamente o limite de partículas de 100 para 45
      // Fica muito mais limpo visualmente e infinitamente mais leve para a CPU
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000)
      particles = []
      for (let i = 0; i < Math.min(particleCount, 55); i++) {
        particles.push(new Particle())
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) { // Distância da linha
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            // Linha com o mesmo tom de azul, ficando transparente quanto mais longe
            ctx!.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 140)})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      // OTIMIZAÇÃO: Sem gradientes de fundo, apenas limpa a tela para o próximo frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

       const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        400
      )
      gradient1.addColorStop(0, "rgba(59, 130, 246, 0.15)")
      gradient1.addColorStop(1, "rgba(59, 130, 246, 0)")
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        350
      )
      gradient2.addColorStop(0, "rgba(6, 182, 212, 0.12)")
      gradient2.addColorStop(1, "rgba(6, 182, 212, 0)")
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      drawConnections()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.4 }} 
    />
  </>)
}
import { useEffect, useRef } from "react"
import "./Hero.css"

function Hero() {
  const canvasRef = useRef(null)
  const frameIdRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let t = 0

    function resize() {
      const wrapper = canvas.parentElement
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      canvas.width  = Math.max(1, Math.floor(rect.width))
      canvas.height = Math.max(1, Math.floor(rect.height))
    }

    // ← dark coffee colors only, no darkMode variable needed
    const colors = [
      [28,  10,  3],
      [18,  6,   1],
      [55,  22,  6],
      [12,  4,   1],
      [40,  15,  4],
    ]

    function drawSwirl() {
      const W = canvas.width
      const H = canvas.height

      if (W === 0 || H === 0) {
        frameIdRef.current = requestAnimationFrame(drawSwirl)
        return
      }

      const cx = W / 2
      const cy = H / 2

      ctx.clearRect(0, 0, W, H)
      ctx.save()
      ctx.beginPath()
      ctx.ellipse(cx, cy, W * 0.48, H * 0.48, 0, 0, Math.PI * 2)
      ctx.clip()

      const startAngle = Math.PI * 0.75
      const angleRange = Math.PI * 1.5

      for (let i = 0; i < 8; i++) {
        const angle  = startAngle + (i / 7) * angleRange + t
        const radius = Math.min(W, H) * 0.26
        const x      = cx + Math.cos(angle) * radius * 0.52
        const y      = cy + Math.sin(angle) * radius * 0.38
        const size   = radius * 0.95

        const [r, g, b] = colors[i % colors.length]
        const grad = ctx.createRadialGradient(x, y, 0, x, y, size)
        grad.addColorStop(0,   `rgba(${r},${g},${b},0.95)`)
        grad.addColorStop(0.4, `rgba(${r},${g},${b},0.55)`)
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`)

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      ctx.restore()
      t += 0.02
      frameIdRef.current = requestAnimationFrame(drawSwirl)
    }

    const startTimer = setTimeout(() => {
      resize()
      drawSwirl()
    }, 50)

    window.addEventListener("resize", resize)

    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(frameIdRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__text-left">
        <p>Every cup is a moment.</p>
        <p>Crafted slow.</p>
        <p>Served with intention.</p>
      </div>

      <div className="hero__media">
        <canvas
          ref={canvasRef}
          className="hero__swirl"
          aria-hidden="true"
        />
        <img src="/coffe-image.png" alt="A cup of coffee" className="hero__image" />
      </div>

      <div className="hero__text-right">
        <p className="hero__text-right__title">Specialty</p>
        <p className="hero__text-right__logo">AE</p>
        <div className="htr">
          <p>Slow down.</p>
          <p>Sip deeper.</p>
          <p>Feel it all.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
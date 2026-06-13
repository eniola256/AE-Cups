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
    const rect = wrapper?.getBoundingClientRect()
    if (!rect) return
    canvas.width = Math.max(1, Math.floor(rect.width))
    canvas.height = Math.max(1, Math.floor(rect.height))
  }

    // Delay reading CSS variables until DOM is ready
  const timer = setTimeout(() => {
    const computedStyle = getComputedStyle(canvas)
    const colors = [
      computedStyle.getPropertyValue("--swirl-color-1").trim(),
      computedStyle.getPropertyValue("--swirl-color-2").trim(),
      computedStyle.getPropertyValue("--swirl-color-3").trim(),
      computedStyle.getPropertyValue("--swirl-color-4").trim(),
      computedStyle.getPropertyValue("--swirl-color-5").trim(),
    ]
    const opacityCenter = parseFloat(computedStyle.getPropertyValue("--swirl-opacity-center"))
    const opacityMiddle = parseFloat(computedStyle.getPropertyValue("--swirl-opacity-middle"))
    const opacityEdge   = parseFloat(computedStyle.getPropertyValue("--swirl-opacity-edge"))
    const stopCenter    = parseFloat(computedStyle.getPropertyValue("--swirl-stop-center"))
    const stopMiddle    = parseFloat(computedStyle.getPropertyValue("--swirl-stop-middle"))
    const stopEdge      = parseFloat(computedStyle.getPropertyValue("--swirl-stop-edge"))

    function drawSwirl() {
      const W  = canvas.width
      const H  = canvas.height
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

        const grad      = ctx.createRadialGradient(x, y, 0, x, y, size)
        const baseColor = colors[i % colors.length]
        const rgbMatch  = baseColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/)
        if (rgbMatch) {
          const [, red, green, blue] = rgbMatch
          grad.addColorStop(stopCenter, `rgba(${red},${green},${blue},${opacityCenter})`)
          grad.addColorStop(stopMiddle, `rgba(${red},${green},${blue},${opacityMiddle})`)
          grad.addColorStop(stopEdge,   `rgba(${red},${green},${blue},${opacityEdge})`)
        }

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      ctx.restore()
      t += 0.02
      frameIdRef.current = requestAnimationFrame(drawSwirl)
    }

    resize()
    drawSwirl()
  }, 0)

  window.addEventListener("resize", resize)

  return () => {
    clearTimeout(timer)
    cancelAnimationFrame(frameIdRef.current)
    window.removeEventListener("resize", resize)
  }
}, [])

  return (
    <section className="hero">
      {/* FIX #7: renamed to BEM-consistent hero__text-left */}
      <div className="hero__text-left">
        <p>Every cup is a moment.</p>
        <p>Crafted slow.</p>
        <p>Served with intention.</p>
      </div>

      <div className="hero__media">
        {/* FIX #6: canvas is decorative — hidden from assistive tech */}
        <canvas
          ref={canvasRef}
          className="hero__swirl"
          aria-hidden="true"
        />
        <img src="/coffe-image.png" alt="A cup of coffee" className="hero__image" />


      </div>

      {/* FIX #7: renamed to BEM-consistent hero__text-right */}
      <div className="hero__text-right">
        <p className="hero__text-right__title">Specialty </p>
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
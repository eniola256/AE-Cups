import { useEffect, useRef } from "react"
import "./About.css"

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    if (!reveals) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, i * 150)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={sectionRef}>

      {/* Left — visual ring */}
      <div className="about__visual reveal">
        <div className="about__ring" />
        <div className="about__orbit">
          <div className="about__dot" />
        </div>
        <div className="about__inner">
          <div className="about__big-letter">AE</div>
          <div className="about__center-word">crafted</div>
        </div>
      </div>

      {/* Right — text */}
      <div className="about__text reveal">
        <div className="about__label">— Our story</div>
        <h2 className="about__heading">
          Not just coffee.<br />
          <em>A ritual.</em>
        </h2>
        <p className="about__body">
          At AE Cups, we believe a great cup of coffee isn't about the
          caffeine — it's about the pause. The warmth in your hands.
          The quiet before the world gets loud.
        </p>
        <p className="about__body">
          Every bean we use is single-origin, slow-roasted, and brewed
          with the kind of care that turns a morning into a memory.
        </p>
      </div>

    </section>
  )
}

export default About
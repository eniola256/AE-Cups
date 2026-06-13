import { useState, useEffect, useCallback } from "react"
import "./Testimonials.css"

const quotes = [
  {
    text: "This isn't just coffee. It's the only reason I leave the house before 9am.",
    author: "Amara O.",
    location: "Lagos",
    stars: 5,
  },
  {
    text: "The Flat White here changed my entire morning routine. I don't think I can go back.",
    author: "Tunde B.",
    location: "Abuja",
    stars: 5,
  },
  {
    text: "Slow down. Sip deeper. I finally understand what that means.",
    author: "Chisom E.",
    location: "Port Harcourt",
    stars: 5,
  },
  {
    text: "Every single cup feels like it was made just for you. That's rare.",
    author: "Fatima A.",
    location: "Kano",
    stars: 5,
  },
]

function Testimonials() {
  const [current, setCurrent]   = useState(0)
  const [visible, setVisible]   = useState(true)

  const goTo = useCallback((index) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(index)
      setVisible(true)
    }, 320)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % quotes.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + quotes.length) % quotes.length)
  }, [current, goTo])

  // auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const q = quotes[current]

  return (
    <section className="testimonials" id="testimonials">

      {/* side lines */}
      <div className="testimonials__line testimonials__line--left"  aria-hidden="true" />
      <div className="testimonials__line testimonials__line--right" aria-hidden="true" />

      {/* label */}
      <div className="testimonials__label">— What people say</div>

      {/* quote */}
      <div className="testimonials__quote-area">

        <div className="testimonials__quote-mark" aria-hidden="true">"</div>

        <p className={`testimonials__text ${visible ? "testimonials__text--visible" : ""}`}>
          {q.text}
        </p>

        <div className={`testimonials__author ${visible ? "testimonials__author--visible" : ""}`}>
          <span className="testimonials__author-name">{q.author}</span>
          <span className="testimonials__author-location">{q.location}</span>
          <div className="testimonials__stars" aria-label={`${q.stars} stars`}>
            {"★".repeat(q.stars)}
          </div>
        </div>

      </div>

      {/* dots */}
      <div className="testimonials__dots" role="tablist">
        {quotes.map((_, i) => (
          <button
            key={i}
            className={`testimonials__dot ${i === current ? "testimonials__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>

      {/* arrows */}
      <div className="testimonials__arrows">
        <button
          className="testimonials__arrow"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          className="testimonials__arrow"
          onClick={next}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

    </section>
  )
}

export default Testimonials
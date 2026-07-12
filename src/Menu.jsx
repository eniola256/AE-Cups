import { useEffect, useRef } from "react"
import "./Menu.css"
import { useCart } from "./context/CartContext"

function Menu() {
  const { addToCart } = useCart()
  const sectionRef = useRef(null)

  const menuItems = [
    { id: 1, name: "Espresso",      price: 3.50, desc: "Pure, concentrated, and unapologetic.",      emoji: "☕", img: "/expresso.png"  },
    { id: 2, name: "Boba",          price: 5.00, desc: "Velvety microfoam over a double ristretto.", emoji: "🥛", img: "/boba.png"      },
    { id: 3, name: "Cold Brew",     price: 5.50, desc: "Smooth, bold, and effortlessly refreshing.", emoji: "🧊", img: "/cold.png"      },
    { id: 4, name: "Matcha",        price: 6.00, desc: "Rich, earthy, and perfectly balanced.",      emoji: "🍵", img: "/macha.png"     },
    { id: 5, name: "Croissant",     price: 4.00, desc: "Buttery, flaky layers baked fresh daily.",   emoji: "🥐", img: "/croisant.png"  },
    { id: 6, name: "Avocado Toast", price: 9.00, desc: "Simple, fresh, and satisfying.",             emoji: "🥑", img: "/toast.png"     },
  ]

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".menu-card, .menu-heading")
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cards.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="menu" ref={sectionRef}>
      <section className="menu">

        <div className="menu-heading">
          <div className="menu-main-head">
            <h2>Menu</h2>
          </div>
          <div className="menu-text-head">
            <p>
              Discover our carefully curated selection of premium
              coffee beans and brewing supplies.
            </p>
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className="card-icon">{item.emoji}</div>
              <h3>{item.name}</h3>
              <div className="image-wrap">
                <img src={item.img} alt={item.name} />
              </div>
              <p>{item.desc}</p>
              <div className="card-bottom">
                <span className="price">${item.price.toFixed(2)}</span>
                <button
                  className="get-btn"
                  onClick={() => addToCart(item)}
                >
                  Get
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Menu
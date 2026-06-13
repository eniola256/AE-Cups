import { useEffect, useState } from "react"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext.jsx"


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
      <div className="nav__brand">
        <span className="nav-logo">AE CUPS</span>
      </div>
      <div className="nav-links">
        <Link to="/">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav__actions">

        <Link to="/checkout" className="order-btn">
          <FontAwesomeIcon icon={faBagShopping} />
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </Link>

        <button
          type="button"
          className="nav__menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </div>

      <div className={`nav__mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout" className="order-btn-mobile">
          Order Now
        </Link>
      </div>
    </nav>
  )
}

export default Nav

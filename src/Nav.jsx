import { useEffect, useState } from "react"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext.jsx"
import { HashLink } from "react-router-hash-link"


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
      <div className="nav__brand">
        <HashLink smooth to="/#hero"><span className="nav-logo">AE CUPS</span></HashLink>
      </div>
      <div className="nav-links">
        <HashLink smooth to="/#hero">Home</HashLink>
      <HashLink smooth to="/#about">About</HashLink>
      <HashLink smooth to="/#menu">Menu</HashLink>
      <HashLink smooth to="/#contact">Contact</HashLink>
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
        <HashLink smooth to="/#hero">Home</HashLink>
      <HashLink smooth to="/#about">About</HashLink>
      <HashLink smooth to="/#menu">Menu</HashLink>
      <HashLink smooth to="/#contact">Contact</HashLink>
        <Link to="/checkout" className="order-btn-mobile">
          Order Now
        </Link>
      </div>
    </nav>
  )
}

export default Nav

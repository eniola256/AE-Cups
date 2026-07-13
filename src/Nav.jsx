import { useState } from "react"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext.jsx"
import { HashLink } from "react-router-hash-link"

function Nav() {
  const { totalItems } = useCart()

  return (
    <nav className="nav">
      <div className="nav__brand">
        <HashLink smooth to="/#hero">
          <span className="nav-logo">AE CUPS</span>
        </HashLink>
      </div>

      <div className="nav-links">
        <HashLink smooth to="/#hero">Home</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#menu">Menu</HashLink>
        <HashLink smooth to="/#contact">Contact</HashLink>
      </div>

      <div className="nav__actions">
        <Link to="/checkout" className="order-btn" aria-label="Checkout">
          <FontAwesomeIcon icon={faBagShopping} />
          {totalItems > 0 && (
            <span className="nav__badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Nav
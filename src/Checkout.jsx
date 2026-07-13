import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext"
import "./checkout.css"

function Checkout() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart()

  const [fulfilment, setFulfilment] = useState("pickup")
  const [notes, setNotes]           = useState("")
  const [name, setName]             = useState("")
  const [phone, setPhone]           = useState("")
  const [email, setEmail]           = useState("")
  const [promo, setPromo]           = useState("")
  const [ordered, setOrdered]       = useState(false)

  const tax      = subtotal * 0.075
  const delivery = fulfilment === "delivery" ? 1.50 : 0
  const total    = subtotal + tax + delivery

  function handlePlaceOrder() {
    if (!name || !phone) {
      alert("Please fill in your name and phone number.")
      return
    }
    clearCart()
    setOrdered(true)
  }

  /* ── success screen ── */
  if (ordered) {
    return (
      <div className="checkout checkout--success">
        <div className="checkout__empty-inner">
          <div className="checkout__success-icon">☕</div>
          <div className="checkout__label">— Order confirmed</div>
          <h1 className="checkout__title">
            Your cup is <em>on its way.</em>
          </h1>
          <p className="checkout__note">
            Thank you, {name}. We'll have your order ready shortly.
            Payment on {fulfilment}.
          </p>
          <Link to="/#menu" className="checkout__back-btn">
            Order more →
          </Link>
        </div>
      </div>
    )
  }

  /* ── empty cart screen ── */
  if (cartItems.length === 0) {
    return (
      <div className="checkout checkout--empty">
        <div className="checkout__empty-inner">
          <div className="checkout__success-icon">☕</div>
          <div className="checkout__label">— Nothing here yet</div>
          <h1 className="checkout__title">
            Your cart is <em>empty.</em>
          </h1>
          <p className="checkout__note">
            Head back to the menu and pick something you'll love.
          </p>
          <Link to="/#menu" className="checkout__back-btn">
            Browse the menu →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">

      {/* ── page header ── */}
      <div className="checkout__header">
        <div className="checkout__label">— AE Cups</div>
        <h1 className="checkout__title">Your <em>Order</em></h1>
      </div>

      <div className="checkout__body">

        {/* ════════════════════════════
            LEFT — cart items
        ════════════════════════════ */}
        <div className="checkout__cart">

          <div className="checkout__cart-header">
            <span className="checkout__col-label">Product</span>
            <span className="checkout__col-label">Qty</span>
            <span className="checkout__col-label">Total</span>
          </div>

          <div className="checkout__items">
            {cartItems.map((item) => (
              <div className="checkout__item" key={item.id}>

                {/* product */}
                <div className="checkout__item-product">
                  <div className="checkout__item-img" aria-hidden="true">
                    {item.emoji}
                  </div>
                  <div className="checkout__item-info">
                    <div className="checkout__item-name">{item.name}</div>
                    <div className="checkout__item-desc">{item.desc}</div>
                    <div className="checkout__item-price">
                      ${item.price.toFixed(2)} each
                    </div>
                    <button
                      className="checkout__remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* quantity */}
                <div className="checkout__item-qty">
                  <button
                    className="checkout__qty-btn"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="checkout__qty-num">{item.quantity}</span>
                  <button
                    className="checkout__qty-btn"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* total */}
                <div className="checkout__item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>

          {/* promo code */}
          <div className="checkout__promo">
            <div className="checkout__promo-label">Promo code</div>
            <div className="checkout__promo-row">
              <input
                type="text"
                className="checkout__promo-input"
                placeholder="Enter code..."
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
              <button className="checkout__promo-btn">Apply</button>
            </div>
          </div>

        </div>

        {/* ════════════════════════════
            RIGHT — order summary
        ════════════════════════════ */}
        <div className="checkout__summary">

          <div className="checkout__summary-label">Order Summary</div>

          {/* customer details */}
          <div className="checkout__summary-section">
            <div className="checkout__summary-section-title">Your details</div>
            <input
              type="text"
              className="checkout__input"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              className="checkout__input"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              className="checkout__input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* pickup or delivery */}
          <div className="checkout__summary-section">
            <div className="checkout__summary-section-title">Fulfilment</div>
            <div className="checkout__radio-group">
              <label className="checkout__radio">
                <input
                  type="radio"
                  name="fulfilment"
                  value="pickup"
                  checked={fulfilment === "pickup"}
                  onChange={() => setFulfilment("pickup")}
                />
                Pickup
              </label>
              <label className="checkout__radio">
                <input
                  type="radio"
                  name="fulfilment"
                  value="delivery"
                  checked={fulfilment === "delivery"}
                  onChange={() => setFulfilment("delivery")}
                />
                Delivery
              </label>
            </div>
          </div>

          {/* special instructions */}
          <div className="checkout__summary-section">
            <div className="checkout__summary-section-title">
              Special instructions
            </div>
            <textarea
              className="checkout__textarea"
              placeholder="e.g. oat milk, no sugar, extra hot..."
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* price breakdown */}
          <div className="checkout__breakdown">
            <div className="checkout__breakdown-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout__breakdown-row">
              <span>Delivery</span>
              <span>
                {fulfilment === "pickup" ? "Free" : `$${delivery.toFixed(2)}`}
              </span>
            </div>
            <div className="checkout__breakdown-row">
              <span>Tax (7.5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="checkout__breakdown-divider" />
            <div className="checkout__breakdown-row checkout__breakdown-row--total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* place order */}
          <button
            className="checkout__place-order"
            onClick={handlePlaceOrder}
          >
            Place Order →
          </button>

          <p className="checkout__note">
            Payment on {fulfilment}. No card needed.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Checkout
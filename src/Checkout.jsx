

import "./checkout.css"

const cartItems = [
  {
    id: 1,
    name: "Flat White",
    desc: "Double ristretto, velvety microfoam",
    price: 5.00,
    quantity: 2,
    emoji: "☕",
  },
  {
    id: 2,
    name: "Cold Brew",
    desc: "Steeped 18 hours, smooth and bold",
    price: 5.50,
    quantity: 1,
    emoji: "🧊",
  },
  {
    id: 3,
    name: "Croissant",
    desc: "Buttery, flaky, baked fresh daily",
    price: 4.00,
    quantity: 2,
    emoji: "🥐",
  },
]

function Checkout() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax      = subtotal * 0.075
  const delivery = 1.50
  const total    = subtotal + tax + delivery

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
                    <div className="checkout__item-price">${item.price.toFixed(2)} each</div>
                  </div>
                </div>

                {/* quantity */}
                <div className="checkout__item-qty">
                  <button className="checkout__qty-btn" aria-label="Decrease quantity">−</button>
                  <span className="checkout__qty-num">{item.quantity}</span>
                  <button className="checkout__qty-btn" aria-label="Increase quantity">+</button>
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
            <input type="text"  className="checkout__input" placeholder="Full name" />
            <input type="tel"   className="checkout__input" placeholder="Phone number" />
            <input type="email" className="checkout__input" placeholder="Email address" />
          </div>

          {/* pickup or delivery */}
          <div className="checkout__summary-section">
            <div className="checkout__summary-section-title">Fulfilment</div>
            <div className="checkout__radio-group">
              <label className="checkout__radio">
                <input type="radio" name="fulfilment" defaultChecked /> Pickup
              </label>
              <label className="checkout__radio">
                <input type="radio" name="fulfilment" /> Delivery
              </label>
            </div>
          </div>

          {/* special instructions */}
          <div className="checkout__summary-section">
            <div className="checkout__summary-section-title">Special instructions</div>
            <textarea
              className="checkout__textarea"
              placeholder="e.g. oat milk, no sugar, extra hot..."
              rows={3}
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
              <span>${delivery.toFixed(2)}</span>
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
          <button className="checkout__place-order">
            Place Order →
          </button>

          <p className="checkout__note">
            Payment on pickup or delivery. No card needed.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Checkout
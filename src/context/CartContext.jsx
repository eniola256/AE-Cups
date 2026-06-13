import { createContext, useContext, useState } from "react"

 const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        // already in cart — increase quantity
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) { removeFromCart(id); return }
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity } : i)
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0)
  const subtotal   = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart,
      totalItems, subtotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
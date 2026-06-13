import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import Hero from "./hero.jsx"
import Menu from "./Menu.jsx"
import About from "./About.jsx"
import Testimonials from "./Testimonials.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"
import Checkout from "./checkout.jsx"
import { CartProvider } from "./context/CartContext"

function App() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
        <CartProvider>
    <BrowserRouter>
      <Nav />

      <Routes>

        {/* Home — all your sections */}
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Menu />
            <Testimonials />
            <Contact />
            <Footer />
          </main>
        }/>

        {/* Checkout — separate page */}
        <Route path="/checkout" element={
          <Checkout />
        }/>

      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
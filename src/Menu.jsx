import "./Menu.css"
import { useCart } from "./context/CartContext"

function Menu(){
  const { addToCart } = useCart()

  const menuItems = [
    { id: 1, name: "Espresso",   price: 3.50, desc: "Pure and concentrated", emoji: "☕" },
    { id: 2, name: "Flat White", price: 5.00, desc: "Velvety microfoam",     emoji: "🥛" },
    { id: 3, name: "Cold Brew",  price: 5.50, desc: "Smooth and bold",       emoji: "🧊" } ,
    { id: 4, name: "Matcha",     price: 6.00, desc: "Rich and earthy",       emoji: "🍵" },
    { id: 5, name: "Croissant",  price: 4.00, desc: "Buttery and flaky",     emoji: "🥐" },
    { id: 6, name: "Avocado Toast", price: 9.00, desc: "Simple and satisfying", emoji: "🥑" },
  ]
    return(
        <div id="menu">
            <div className="menu">
                <div className="menu-heading">
                    <div className="menu-main-head">
                        <h2>Menu</h2>
                    </div>

      <div className="menu-text-head">
        <p>
          Discover our carefully curated selection of premium coffee beans and brewing supplies.
        </p>
      </div>
    </div>

    <div className="menu-grid">

        <div className="menu-card">
          <div className="card-icon">☕</div>
          <h3>Espresso</h3>
          <div className="image-wrap">
            <img src="/expresso.png" alt="" />
          </div>
          <p>Pure, concentrated, and unapologetic.</p>
          <div className="card-bottom">
            <span className="price">$3.50</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-icon">🥛</div>
          <h3>Boba</h3>
          <div className="image-wrap">
            <img src="/boba.png" alt="" />
          </div>
          <p>Velvety microfoam over a double ristretto.</p>
          <div className="card-bottom">
            <span className="price">$5.00</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-icon">🧊</div>
          <h3>Cold Brew</h3>
          <div className="image-wrap">
            <img src="/cold.png" alt="" />
          </div>
          <p>Smooth, bold, and effortlessly refreshing.</p>
          <div className="card-bottom">
            <span className="price">$5.50</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-icon">🍵</div>
          <h3>Matcha</h3>
          <div className="image-wrap">
            <img src="macha.png" alt="" />
          </div>
          <p>Rich, earthy, and perfectly balanced.</p>
          <div className="card-bottom">
            <span className="price">$6.00</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-icon">🥐</div>
          <h3>Croissant</h3>
          <div className  ="image-wrap">
            <img src="/croisant.png" alt="" />
          </div>
          <p>Buttery, flaky layers baked fresh daily.</p>
          <div className="card-bottom">
            <span className="price">$4.00</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-icon">🥑</div>
          <h3>Avocado Toast</h3>
          <div className="image-wrap">
            <img src="/toast.png" alt="" />
          </div>
          <p>Simple, fresh, and satisfying.</p>
          <div className="card-bottom">
            <span className="price">$9.00</span>
            <button className="get-btn"
                onClick={() => addToCart(item)}> 
                  Get
            </button>
          </div>
        </div>

    </div>
  </div>
</div>
            
    )
}

export default Menu
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import About from './components/About'
import Cart from './components/Cart'
import bursix from './assets/bursix.png'
import burtwo from './assets/burtwo.png'
import burthree from './assets/burthree.png'
import burone from './assets/burone.png'
import burfour from './assets/burfour.png'
import burfive from './assets/burfive.png'
type CartItem = {
  image: string
  name: string
  description: string
  price: number
  quantity: number
}

function App() {
const [cart, setCart] = useState<CartItem[]>([])
const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
  const existingProduct = cart.find(
    item => item.name === product.name
  )

  if (existingProduct) {
    setCart(
      cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  } else {
    setCart([...cart, { ...product, quantity: 1 }])
  }
}
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )
  const openCart = () => {
  setIsCartOpen(true)
}

const closeCart = () => {
  setIsCartOpen(false)
}
const increaseQuantity = (name: string) => {
  setCart(currentCart =>
    currentCart.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={openCart} />
       <Hero />
       

       <div id="menu" className="product-row">
       <ProductCard
       image={bursix}
        name="Volcano Burger"
        description="Juicy beef burger with melted cheese and our signature DinoBite sauce."
       price={199}
        rating="4.5"
         reviews="124" 
         onAddToCart={addToCart}/>
         <ProductCard
         image={burtwo}
         name="Cheesy T-Rex"
        description="A cheesy beast loaded with juicy beef and extra melted goodness."
        price={249}
        rating="4.8"
        reviews="98"
        onAddToCart={addToCart} />
        <ProductCard
  image={burthree}
  name="Dino Classic"
  description="A classic juicy beef burger with melted cheese, fresh lettuce,our signature DinoBite sauce."
  price={199}
  rating="4.9"
  reviews="156"
  onAddToCart={addToCart}
/>

<ProductCard
  image={burfour}
  name="Jurassic BBQ"
  description="Juicy beef, smoky BBQ sauce, crispy onions,melted cheese packed into one wild bite."
  price={229}
  rating="4.8"
  reviews="132"
  onAddToCart={addToCart}
/>

<ProductCard
  image={burfive}
  name="Raptor Crunch"
  description="A crispy and juicy burger loaded with crunchy toppings and creamy signature sauce."
  price={219}
  rating="4.7"
  reviews="104"
  onAddToCart={addToCart}
/>

<ProductCard
  image={burone}
  name="Fossil Melt"
  description="A cheesy burger stacked with savory beef, melted cheese, and delicious DinoBite toppings."
  price={239}
  rating="4.6"
  reviews="87"  
  onAddToCart={addToCart}
/>
</div>

<About />

{isCartOpen && (
  <Cart
    cart={cart}
    onClose={closeCart}
    onIncrease={increaseQuantity}
  />
)}
    </>
  )
}

export default App
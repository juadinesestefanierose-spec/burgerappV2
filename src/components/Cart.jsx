import './Cart.css'

function Cart({ cart, onClose, onIncrease }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-box">
      <div className="cart-header">
        <h2>Your Cart</h2>

        <button className="cart-close" onClick={onClose}>
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
        <p>Items in cart: {cart.length}</p>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p>₱{item.price}</p>

                  <div className="quantity-controls">
                    <button>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => onIncrease(item.name)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total:</span>
            <strong>₱{cartTotal.toLocaleString()}</strong>
          </div>

          <button className="checkout-button">
            CHECKOUT
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
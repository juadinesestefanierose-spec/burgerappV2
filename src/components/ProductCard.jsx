import './ProductCard.css';

function ProductCard({
  image,
  name,
  description,
  price,
  rating,
  reviews,
  onAddToCart
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h2>{name}</h2>

      <div className="product-rating">
        <div
          className="stars"
          style={{ '--rating': rating }}
          aria-label={`${rating} out of 5 stars`}
        >
          <span className="stars-background">★★★★★</span>
          <span className="stars-filled">★★★★★</span>
        </div>

        <span className="rating-number">{rating}</span>
        <span className="reviews">({reviews})</span>
      </div>

      <p>{description}</p>

      <p>₱{price}</p>

      <button
        className="add-to-cart-button"
        onClick={() =>
          onAddToCart({
            image,
            name,
            description,
            price: Number(price)
          })
        }
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
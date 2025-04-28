import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const productWithQuantity = {
      ...product,
      quantity: quantity
    };
    onAddToCart(productWithQuantity);
    setQuantity(1); // <-- reset quantity back to 1
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative' }}>
          <img src={product.image} alt={product.name} className="product-image" />

          {product.tag && (
            <span style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: product.tag === 'SALE' ? 'red' : 'green',
              color: 'white',
              padding: '4px 8px',
              fontSize: '0.8rem',
              borderRadius: '5px'
            }}>
              {product.tag}
            </span>
          )}
        </div>

        <h3>{product.name}</h3>

        <div style={{ margin: '10px 0', color: '#f5c518', fontSize: '1.5rem' }}>
          ★★★★☆
        </div>

        <p>${product.price.toFixed(2)}</p>
      </Link>

      {/* Quantity Selector */}
      <div style={{ marginTop: '10px' }}>
        <input 
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{
            width: '60px',
            padding: '5px',
            fontSize: '1rem',
            marginBottom: '10px'
          }}
        />
      </div>

      {/* Add to Cart Button */}
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add {quantity} to Cart
      </button>
    </div>
  );
}

export default ProductCard;

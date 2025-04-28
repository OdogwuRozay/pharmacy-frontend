import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const products = [
  { id: 1, name: "Medicine A", price: 19.99, description: "High quality medicine for cold treatment.", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Supplement B", price: 12.99, description: "Daily supplement for boosting immunity.", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Cough Syrup", price: 9.99, description: "Effective relief for cough and sore throat.", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Vitamin C", price: 15.99, description: "For healthy immune system", image: "https://via.placeholder.com/300" }
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '40px' }}>Product not found.</div>;
  }

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
      <p style={{ fontSize: '1.2rem' }}>{product.description}</p>
      <h2>${product.price.toFixed(2)}</h2>

      <button 
        style={{
          marginTop: '20px',
          backgroundColor: '#0a74da',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;

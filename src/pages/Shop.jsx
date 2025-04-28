import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import './Shop.css';

// Product List
const products = [
  { id: 1, name: "Medicine A", price: 19.99, image: "https://images.unsplash.com/photo-1616221574971-cb6e06de89b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", tag: "NEW" },
  { id: 2, name: "Supplement B", price: 12.99, image: "https://via.placeholder.com/150", tag: "SALE" },
  { id: 3, name: "Cough Syrup", price: 9.99, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Vitamin C", price: 15.99, image: "https://via.placeholder.com/150", tag: "NEW" },
];

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Shop Products</h1>

      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '30px',
          width: '300px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;

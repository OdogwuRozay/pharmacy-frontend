import './Home.css';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Medicine A",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1616221574971-cb6e06de89b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", tag: "NEW" },
  {
    id: 2,
    name: "Supplement B",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1611221986534-7f9dcaa4b576?crop=entropy&cs=tinysrgb&fit=crop&h=300&w=300", tag: "SALE" },
];

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home-wrapper">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Trusted Online Pharmacy</h1>
          <p>Shop quality medications, supplements, and healthcare products.</p>
          <Link to="/shop">
  <button className="shop-button">
    Shop Now
  </button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop">Go to Shop</Link></p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px'
            }}>
              {/* Image and Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                <div>
                  <h3>{item.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#555' }}>Quantity: {item.quantity}</p>
                  <p style={{ fontSize: '0.9rem', color: '#555' }}>Unit Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#ff4d4f',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div style={{ textAlign: 'right', marginTop: '30px' }}>
            <h2>Total: <span style={{ color: 'green' }}>${totalPrice.toFixed(2)}</span></h2>

            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={clearCart}
                style={{
                  backgroundColor: '#000',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Clear Cart
              </button>

              <Link to="/checkout">
                <button 
                  style={{
                    marginLeft: '15px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

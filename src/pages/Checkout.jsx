import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  function handleCheckout() {
    alert('✅ Checkout successful! Thank you for your purchase.');
    clearCart();
  }

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add some products before checking out.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{
              borderBottom: '1px solid #ccc',
              padding: '10px 0'
            }}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <button 
            style={{
              marginTop: '20px',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
            onClick={handleCheckout}
          >
            Complete Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

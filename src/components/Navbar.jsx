import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#0a74da', 
      padding: '15px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <h2 style={{ color: 'white', margin: '0' }}>YourPharmacy</h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/upload-prescription" style={{ color: 'white', textDecoration: 'none' }}>Upload Prescription</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;

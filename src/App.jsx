import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import UploadPrescription from './pages/UploadPrescription';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', color: 'black' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/upload-prescription" element={<UploadPrescription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
           {/* 404 Catch-all Route */}
          <Route path="*" element={
            <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            </div>
            } />
        </Routes>

      </main>
      <Footer />
    </Router>
  );
}

export default App;

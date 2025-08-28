import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

// simple pages
const Home = () => <h2>Welcome to Jewellery Shop</h2>;
const Products = () => <h2>Our Products</h2>;
const ProductDetails = () => <h2>Product Details</h2>;
const Cart = () => <h2>Your Cart</h2>;
const Checkout = () => <h2>Checkout Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <div className="container mt-3">
      {/* bootstrap navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Jewellery Shop</Link>
          <div>
            <Link className="btn btn-light me-2" to="/">Home</Link>
            <Link className="btn btn-light me-2" to="/products">Products</Link>
            <Link className="btn btn-light me-2" to="/cart">Cart</Link>
            <Link className="btn btn-light" to="/checkout">Checkout</Link>
          </div>
        </div>
      </nav>

      {/* routes with simple fade animation */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;

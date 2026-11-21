
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { CartWishlistProvider } from "./contexts/CartWishlistContext";

function App() {
  return (
    <CartWishlistProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <ToastContainer />
    </CartWishlistProvider>
  );
}

export default App;

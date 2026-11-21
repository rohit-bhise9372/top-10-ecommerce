
import { Link } from "react-router-dom";
import { useCartWishlist } from "../contexts/CartWishlistContext";

function Navbar() {
  const { cartItems, wishlistItems } = useCartWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#382B83" }}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/top-10n.png"
            alt="Top-10 Logo"
            height="45"
          />
        </Link>

        {/* Search */}
        <form className="d-flex align-items-center mx-auto w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />

          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>

        {/* Navigation */}
        <div className="d-flex align-items-center gap-3">

          <Link
            to="/"
            className="nav-link text-white"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="nav-link text-white"
          >
            Products
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="text-white text-decoration-none position-relative fs-6"
            title="Wishlist"
          >
            ♡
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishlistCount}
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="text-white text-decoration-none position-relative fs-6 ms-2"
            title="Cart"
          >
            🛒
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

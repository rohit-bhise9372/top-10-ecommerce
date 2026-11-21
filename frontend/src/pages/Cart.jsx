import { Link } from "react-router-dom";
import { useCartWishlist } from "../contexts/CartWishlistContext";
import { toast } from "react-toastify";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    moveToWishlist,
  } = useCartWishlist();

  // Calculate Total Items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">My Cart 🛒</h2>

      {cartItems.length === 0 ? (
        // Empty Cart
        <div className="text-center py-5">
          <h3 className="fw-bold">Your Cart is Empty!</h3>

          <p className="text-muted mt-2">
            Looks like you haven't added any products to your cart yet.
          </p>

          <Link to="/products" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">

          {/* Cart Products */}
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div className="card mb-3 shadow-sm" key={item.id}>
                <div className="row g-0 align-items-center">

                  {/* Product Image */}
                  <div className="col-4 col-md-3 text-center p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        height: "130px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="col-8 col-md-9">
                    <div className="card-body">

                      <h5 className="fw-bold">
                        {item.title}
                      </h5>

                      <p className="text-primary fw-bold mb-2">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="fw-semibold">Quantity:</span>

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <span className="fw-bold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
  <p className="mb-0 fw-semibold">
    Subtotal: ₹{item.price * item.quantity}
  </p>

  <div className="d-flex gap-2 flex-wrap">
    <button
      className="btn btn-sm btn-outline-primary"
     onClick={() => {
  moveToWishlist(item.id);
  toast.success("Item moved to wishlist!");
}}
    >
      ♡ Add to Wishlist
    </button>

    <button
      className="btn btn-sm btn-outline-danger"
      onClick={() => {
  removeFromCart(item.id);
  toast.error("Item removed from cart!");
}}
    >
      Remove
    </button>
  </div>
</div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Details */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4">

              <h5 className="fw-bold mb-3">
                Price Details
              </h5>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Delivery Charges</span>
                <span className="text-success">Free</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold">Total Amount</h5>
                <h5 className="fw-bold text-primary">
                  ₹{totalPrice}
                </h5>
              </div>

              <button className="btn btn-primary w-100 py-2">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="btn btn-outline-primary w-100 mt-2"
              >
                Continue Shopping
              </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

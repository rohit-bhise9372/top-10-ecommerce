
import { Link } from "react-router-dom";
import { useCartWishlist } from "../contexts/CartWishlistContext";
import { toast } from "react-toastify";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    moveToCart,
  } = useCartWishlist();

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">My Wishlist ♡</h2>

      {wishlistItems.length === 0 ? (
        // Empty Wishlist
        <div className="text-center py-5">
          <h3 className="fw-bold">Your Wishlist is Empty!</h3>

          <p className="text-muted mt-2">
            You haven't added any products to your wishlist yet.
          </p>

          <Link to="/products" className="btn btn-primary mt-3">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="row">

          {wishlistItems.map((item) => (
            <div
              className="col-12 col-sm-6 col-lg-4 mb-4"
              key={item.id}
            >
              <div className="card h-100 shadow-sm">

                {/* Product Image */}
                <div className="text-center p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Product Details */}
                <div className="card-body d-flex flex-column">

                  <h5 className="card-title fw-bold">
                    {item.title}
                  </h5>

                  <p className="text-primary fw-bold mb-2">
                    ₹{item.price}
                  </p>

                  <p className="text-muted mb-2">
                    {item.subCategory}
                  </p>

                  <p className="mb-3">
  ⭐ {item.rating?.rate ?? "N/A"} 
  ({item.rating?.count ?? 0} reviews)
</p>

                  {/* Action Buttons */}
                  <div className="mt-auto">

                    <button
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => {
  moveToCart(item);
  toast.success("Item moved to cart!");
}}
                    >
                      🛒 Move to Cart
                    </button>

                    <button
                      className="btn btn-outline-danger w-100"
                     onClick={() => {
  removeFromWishlist(item.id);
  toast.error("Item removed from wishlist!");
}}
                    >
                      Remove from Wishlist
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Wishlist;

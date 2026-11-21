
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useCartWishlist } from "../contexts/CartWishlistContext";

function ProductDetails() {
  const { productId } = useParams();

  const { addToCart, addToWishlist } = useCartWishlist();

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2 className="fw-bold">Product Not Found!</h2>

        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm p-3 p-md-4">
        <div className="row align-items-center g-4">

          {/* Product Image */}
          <div className="col-md-6 text-center">
            <div className="bg-white rounded p-3">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="col-md-6">
            <span className="badge bg-primary mb-3 px-3 py-2">
              {product.subCategory}
            </span>

            <h2 className="fw-bold mb-3">
              {product.title}
            </h2>

            <h3 className="fw-bold text-primary mb-3">
              ₹{product.price}
            </h3>

            <p className="mb-2">
              <span className="fw-bold">Category:</span>{" "}
              {product.category}
            </p>

            <p className="mb-3">
              <span className="fw-bold">Subcategory:</span>{" "}
              {product.subCategory}
            </p>

            <p className="mb-3">
              <span className="text-warning">★</span>{" "}
              <strong>{product.rating.rate} / 5</strong>

              <span className="text-muted ms-2">
                ({product.rating.count} reviews)
              </span>
            </p>

            <hr />

            <h5 className="fw-bold mb-3">
              Product Description
            </h5>

            <p className="text-secondary lh-lg">
              {product.description}
            </p>

            {/* Cart and Wishlist Buttons */}
            <div className="d-flex flex-wrap gap-2 mt-4">
              <button
                className="btn btn-primary px-4 py-2 fw-semibold"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-outline-primary px-4 py-2 fw-semibold"
                onClick={() => addToWishlist(product)}
              >
                ♡ Add to Wishlist
              </button>
            </div>

            <Link
              to="/products"
              className="btn btn-link mt-4 ps-0 text-decoration-none fw-semibold"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

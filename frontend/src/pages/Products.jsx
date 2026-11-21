
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../contexts/CartWishlistContext";
import { toast } from "react-toastify";

function Products() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );

  const [minimumRating, setMinimumRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const { addToCart, addToWishlist } = useCartWishlist();

  function handleAddToCart(product) {
  addToCart(product);
  toast.success("Product added to cart!");
  }

    function handleAddToWishlist(product) {
  addToWishlist(product);
  toast.success("Product added to wishlist!");
}

  // Handle Category Checkbox
  function handleCategoryChange(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.subCategory);

    const ratingMatch = product.rating.rate >= minimumRating;

    return categoryMatch && ratingMatch;
  });

  // Sort Products by Price
  const sortedProducts = [...filteredProducts];

  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Clear All Filters
  function handleClearFilters() {
    setSelectedCategories([]);
    setMinimumRating(0);
    setSortOrder("");
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Electronics Products</h2>

      <div className="row">
        {/* Filters Sidebar */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card p-3 h-100">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Filters</h5>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={handleClearFilters}
              >
                Clear All
              </button>
            </div>

            <hr />

            {/* Category Filter */}
            <h6 className="mb-3">Category</h6>

            {[
              "Smartphones",
              "Laptops",
              "Audio",
              "Monitors",
              "Storage",
              "Accessories",
              "Gaming",
            ].map((category) => (
              <div className="form-check mb-2" key={category}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />

                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}

            <hr />

            {/* Sort by Price */}
            <h6 className="mb-3">Sort by Price</h6>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="priceSort"
                id="lowToHigh"
                checked={sortOrder === "lowToHigh"}
                onChange={() => setSortOrder("lowToHigh")}
              />

              <label className="form-check-label" htmlFor="lowToHigh">
                Low to High
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="priceSort"
                id="highToLow"
                checked={sortOrder === "highToLow"}
                onChange={() => setSortOrder("highToLow")}
              />

              <label className="form-check-label" htmlFor="highToLow">
                High to Low
              </label>
            </div>

            <hr />

            {/* Rating Filter */}
            <h6 className="mb-3">Rating</h6>

            <p className="text-muted mb-2">
              Minimum Rating: {minimumRating} ⭐
            </p>

            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              value={minimumRating}
              onChange={(event) =>
                setMinimumRating(Number(event.target.value))
              }
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="col-12 col-md-9">
          <div className="row">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 mb-4"
                  key={product.id}
                >
                  <div className="card h-100 hover-lift">

                    {/* Product Image */}
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top p-3"
                        alt={product.title}
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="card-body d-flex flex-column">

                      <Link
                        to={`/products/${product.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <h5 className="card-title">
                          {product.title}
                        </h5>
                      </Link>

                      <p className="card-text fw-bold mb-2">
                        ₹{product.price}
                      </p>

                      <p className="text-muted mb-2">
                        {product.subCategory}
                      </p>

                      <p className="mb-3">
                        ⭐ {product.rating.rate} ({product.rating.count} reviews)
                      </p>

                      {/* Cart and Wishlist Buttons */}
                      <div className="mt-auto">
                        <button
  className="btn btn-primary w-100 mb-2"
  onClick={() => handleAddToCart(product)}
>
  Add to Cart
</button>
                        

                        <button
                          className="btn btn-primary w-100 mb-2"
                          onClick={() => handleAddToWishlist(product)}
                        >
                          ♡ Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-5">
                <h4>No products found!</h4>

                <p className="text-muted">
                  Try changing your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

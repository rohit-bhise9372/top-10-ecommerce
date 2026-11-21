
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const featuredCategories = [
    {
      name: "Smartphones",
      description: "Explore the latest smartphones",
    },
    {
      name: "Laptops",
      description: "Powerful laptops for work and gaming",
    },
    {
      name: "Audio",
      description: "Headphones and wireless earbuds",
    },
    {
      name: "Monitors",
      description: "Upgrade your viewing experience",
    },
    {
      name: "Storage",
      description: "SSDs and external hard drives",
    },
    {
      name: "Gaming",
      description: "Explore gaming accessories",
    },
    {
      name: "Accessories",
      description: "Essential accessories for your devices",
    },
  ];


  return (
    
    <div>
      
      {/* Hero Section */}
      
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#382B83" }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7 text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3">
                Welcome to Top-10
              </h1>

              <p className="lead mb-4">
                Discover the latest electronics, gadgets and accessories
                at one place.
              </p>

              <Link to="/products" className="btn btn-light btn-lg">
                Explore Products
              </Link>
            </div>

            <div className="col-md-5 text-center mt-4 mt-md-0">
              <div className="bg-white rounded-4 p-3 shadow">
                <h2 className="fw-bold mb-2" style={{ color: "#382B83" }}>
                  TOP-10
                </h2>
                <p className="mb-0 text-dark">
                  Technology made simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Featured Categories</h2>
          <p className="text-muted">
            Explore our products by category
          </p>
        </div>

        <div className="row">
          {featuredCategories.map((category) => {
            const categoryProduct = products.find(
              (product) => product.subCategory === category.name
            );

            return (
              <div
                className="col-12 col-sm-6 col-lg-3 mb-4"
                key={category.name}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 hover-lift">
                    <img
                      src={categoryProduct?.image}
                      alt={category.name}
                      className="card-img-top p-3"
                      style={{
                        height: "180px",
                        objectFit: "contain",
                      }}
                    />

                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">
                        {category.name}
                      </h5>

                      <p className="card-text text-muted">
                        {category.description}
                      </p>

                      <span
                        className="fw-semibold"
                        style={{ color: "#382B83" }}
                      >
                        Explore Category →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;

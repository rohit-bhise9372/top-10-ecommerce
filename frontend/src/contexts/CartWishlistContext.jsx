
import { createContext, useContext, useEffect, useState } from "react";

const CartWishlistContext = createContext();

export function CartWishlistProvider({ children }) {
  // Get saved data from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart and wishlist whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add product to cart
  function addToCart(product) {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Remove product from cart
  function removeFromCart(productId) {
    setCartItems(
      cartItems.filter((item) => item.id !== productId)
    );
  }

  // Increase product quantity
  function increaseQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease product quantity
  function decreaseQuantity(productId) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Add product to wishlist
  function addToWishlist(product) {
    const alreadyExists = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {
      setWishlistItems([...wishlistItems, product]);
    }
  }

  // Remove product from wishlist
  function removeFromWishlist(productId) {
    setWishlistItems(
      wishlistItems.filter((item) => item.id !== productId)
    );
  }

  // Move product from wishlist to cart
  function moveToCart(product) {
    addToCart(product);
    removeFromWishlist(product.id);
  }

  // Move product from cart to wishlist
  function moveToWishlist(product) {
    addToWishlist(product);
    removeFromCart(product.id);
  }

  return (
    <CartWishlistContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
        moveToWishlist,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

// Custom hook to use Cart and Wishlist
export function useCartWishlist() {
  return useContext(CartWishlistContext);
}

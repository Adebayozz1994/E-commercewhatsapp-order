<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header Section -->
    <header class="bg-green-600 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Brand Name -->
        <h1 class="text-2xl font-bold">Groundnut Store</h1>

        <!-- Navigation Menu -->
        <nav>
          <router-link
            to="/"
            class="text-white mx-4 hover:underline"
            active-class="font-bold underline"
            aria-label="Home"
          >
            Home
          </router-link>
          <router-link
            to="/product"
            class="text-white mx-4 hover:underline"
            active-class="font-bold underline"
            aria-label="Products"
          >
            Products
          </router-link>
          <router-link
            to="/cart"
            class="text-white mx-4 hover:underline"
            active-class="font-bold underline"
            aria-label="Cart"
          >
            Cart
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view :cart="cart" @add-to-cart="addToCart" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Holds cart items
    };
  },
  methods: {
    /**
     * Add product to cart or increment quantity if it already exists.
     */
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      // Save cart to localStorage
      this.saveCart();
    },

    /**
     * Save the cart to localStorage.
     */
    saveCart() {
      try {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    },

    /**
     * Load the cart from localStorage.
     */
    loadCart() {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      }
    },
  },
  mounted() {
    // Load cart from localStorage when component mounts
    this.loadCart();
  },
};
</script>

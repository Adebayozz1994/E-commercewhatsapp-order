<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header Section -->
    <header class="bg-green-600 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Brand Name -->
            <router-link
            to="/"
            class="text-white hover:underline"
            active-class="font-bold underline"
            aria-label="Home"
          >
        <h1 class="text-2xl sm:text-xl font-bold">Groundnut Store</h1>
          </router-link>

        <!-- Navigation Menu -->
        <div class="hidden md:flex space-x-4">
          <router-link
            to="/"
            class="text-white hover:underline"
            active-class="font-bold underline"
            aria-label="Home"
          >
            Home
          </router-link>
          <router-link
            to="/product"
            class="text-white hover:underline"
            active-class="font-bold underline"
            aria-label="Products"
          >
            Products
          </router-link>
          <router-link
            to="/cart"
            class="text-white hover:underline"
            active-class="font-bold underline"
            aria-label="Cart"
          >
            Cart
          </router-link>
        </div>

        <!-- Hamburger Menu for Small Screens -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="focus:outline-none text-white"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-if="menuOpen"
        class="md:hidden bg-green-700 text-white flex flex-col items-center space-y-4 py-4"
      >
        <router-link
          to="/"
          class="text-white hover:underline"
          active-class="font-bold underline"
          aria-label="Home"
          @click="toggleMenu"
        >
          Home
        </router-link>
        <router-link
          to="/product"
          class="text-white hover:underline"
          active-class="font-bold underline"
          aria-label="Products"
          @click="toggleMenu"
        >
          Products
        </router-link>
        <router-link
          to="/cart"
          class="text-white hover:underline"
          active-class="font-bold underline"
          aria-label="Cart"
          @click="toggleMenu"
        >
          Cart
        </router-link>
      </nav>
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
      cart: [], 
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    saveCart() {
      try {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    },
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
    this.loadCart();
  },
};
</script>

<style>

</style>

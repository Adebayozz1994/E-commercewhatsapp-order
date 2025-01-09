<template>
  <div id="cart" class="container mx-auto py-8">
    <h2 class="text-3xl font-bold text-center mb-6">Your Cart</h2>
    <div v-if="cart.length" class="bg-white shadow-md rounded-lg p-6">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      <div v-for="(item, index) in cart" :key="item.id" class="grid grid-cols-3 gap-4 mb-2">
        <span>{{ item.name }}</span>
        <span>\${{ item.price }}</span>
        <span>{{ item.quantity }}</span>
        <button
          @click="removeFromCart(index)"
          class="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
      <div class="text-right mt-4">
        <p class="text-lg font-bold">Total: \${{ totalPrice }}</p>
      </div>
      <button
        @click="sendOrder"
        class="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700"
      >
        Place Order via WhatsApp
      </button>
    </div>
    <p v-else class="text-center text-gray-600">Your cart is empty!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    sendOrder() {
      const orderDetails = this.cart
        .map((item) => `${item.name} x${item.quantity}`)
        .join(", ");
      const total = `Total: $${this.totalPrice}`;
      const message = `Order Details: ${orderDetails}\n${total}`;
      window.open(`https://wa.me/+2348166223968?text=${encodeURIComponent(message)}`, "_blank");
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
  mounted() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  },
};
</script>

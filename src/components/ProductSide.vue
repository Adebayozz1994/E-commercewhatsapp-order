<template>
  <div id="products" class="container mx-auto py-8">
    <h2 class="text-3xl font-bold text-center mb-6">Browse Groundnuts</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white shadow-md rounded-lg overflow-hidden"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <span class="text-green-600 font-bold">\${{ product.price }}</span>
            <button
              @click="addToCart(product)"
              class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Raw Groundnuts",
          description: "Fresh raw groundnuts directly from the farm.",
          price: 10,
          image: "/images/raw-groundnuts.jpg",
        },
        {
          id: 2,
          name: "Roasted Groundnuts",
          description: "Perfectly roasted groundnuts with a crunchy texture.",
          price: 12,
          image: "/images/roasted-groundnuts.jpg",
        },
        {
          id: 3,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 15,
          image: "/images/groundnut-paste.jpg",
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$router.push({ name: "Cart" }); // Redirect to Cart
      this.$emit("add-to-cart", product); // Emit product to parent
    },
  },
};
</script>

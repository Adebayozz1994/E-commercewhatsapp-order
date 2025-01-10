<template>
  <div>
    <!-- Loader Section -->
    <div v-if="loading" class="loader-wrapper">
      <div class="loader-content">
        <img
          src="https://img.freepik.com/free-photo/nuts-with-bucket-marble-table_114579-25005.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid"
          alt="Groundnut Logo"
          class="loader-image"
        />
        <div class="loader"></div>
      </div>
    </div>

    <!-- Products Section -->
    <div id="products" class="container mx-auto py-8 px-4 sm:px-6 lg:px-8" v-if="!loading">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6">Browse Groundnuts</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
        >
          <!-- Product Image -->
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 sm:h-56 lg:h-64 object-cover"
          />
          <!-- Product Details -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-lg sm:text-xl font-semibold">{{ product.name }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mt-2">{{ product.description }}</p>
            </div>
            <div class="flex justify-between items-center mt-4">
              <span class="text-green-600 font-bold text-lg sm:text-xl">
                ${{ product.price }}
              </span>
              <button
                @click="addToCart(product)"
                class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all text-sm sm:text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div v-if="cart.length > 0" class="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
      <span>{{ cart.length }} items in cart</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, 
      products: [], 
      cart: [], 
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    
    fetchProducts() {
      setTimeout(() => {
        this.products = [
          {
            id: 1,
            name: "Raw Groundnuts",
            description: "Fresh raw groundnuts directly from the farm.",
            price: 1,
            image: "https://img.freepik.com/premium-photo/bottle-peanuts-isolated-white-background_41158-29819.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
          },
          {
            id: 2,
            name: "Roasted Groundnuts",
            description: "Perfectly roasted groundnuts with a crunchy texture.",
            price: 5,
            image: "https://img.freepik.com/premium-photo/pine-nut-with-honey-transparent-jar-with-yellow-lid-smaller-jar-with-nuts-honey-is-it-place-label-close-up-light-background_323569-499.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
          },
          {
            id: 3,
            name: "Groundnut Paste",
            description: "Rich and creamy groundnut paste for all your spreads.",
            price: 3,
            image: "https://img.freepik.com/premium-photo/organic-dried-peanuts-plastic-bag_266211-16.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
          },
            {
          id: 4,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 3,
          image: "https://img.freepik.com/premium-photo/jar-cashew-nuts-kitchen-counter_539365-3176.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
          {
          id: 5,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 1,
          image: "https://img.freepik.com/free-photo/various-nuts-selection-hazelnuts-pistachio-pecans-glass_114579-1623.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
          {
          id: 6,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 4,
          image: "https://img.freepik.com/premium-photo/cashew-nuts-plastic-box-cup-blue-background_188290-3163.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
          {
          id: 7,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 8,
          image: "https://img.freepik.com/premium-photo/plastic-pot-store-culinary-ingredients-brazilian-beans-isolated-white-surface_72932-1572.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
          {
          id: 8,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 6,
          image: "https://img.freepik.com/free-photo/dried-lupins_1368-5453.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
          {
          id: 9,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 7,
          image: "https://img.freepik.com/premium-photo/nut-food-style_1048944-15900309.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
           {
          id: 10,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 10,
          image: "https://img.freepik.com/premium-photo/close-up-cake-against-white-background_1048944-15044619.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
           {
          id: 11,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 4,
          image: "https://img.freepik.com/free-photo/fried-corn_1368-8894.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
           {
          id: 12,
          name: "Groundnut Paste",
          description: "Rich and creamy groundnut paste for all your spreads.",
          price: 5,
          image: "https://img.freepik.com/premium-photo/tasty-mixed-cornflakes-nut-grape-caramel-isolated-white-background-with-clipping-path_228338-592.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
        },
        ];
        this.loading = false; 
      }, 2000); 
    },
    addToCart(product) {
      
      this.cart.push(product);
      this.$router.push({ name: "Cart" }); 
      this.$emit("add-to-cart", product); 
    },
  },
};
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9999;
}

.loader-content {
  text-align: center;
}

.loader-image {
  width: 220px;
  height: 220px;
  object-fit: cover;
  margin-bottom: 15px;
}

.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 100% 0 0);
  animation: l5 2s steps(9) infinite;
}

.loader:before {
  content: "Groundnut";
  display: block;
  color: #27ae60;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  animation: colorChange 2s infinite alternate;
}

@keyframes l5 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}

@keyframes colorChange {
  from {
    color: #27ae60;
  }
  to {
    color: #2ecc71;
  }
}
</style>

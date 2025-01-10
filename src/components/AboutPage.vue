<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header Section -->
    <header class="bg-green-600 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="hidden md:flex space-x-4">
          <router-link to="/" class="text-white hover:underline" active-class="font-bold underline">
            Home
          </router-link>
          <router-link to="/product" class="text-white hover:underline" active-class="font-bold underline">
            Products
          </router-link>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="container mx-auto px-4 py-8 space-y-12">
      <!-- Product Section -->
      <section>
        <h2 class="text-3xl font-bold text-green-700">About Our Product</h2>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Our premium groundnuts are sourced from the finest farms, ensuring a rich, nutty flavor and unbeatable quality.
          Whether you enjoy them roasted, boiled, or raw, our groundnuts are perfect for any occasion.
        </p>
      </section>

      <!-- Production Section -->
      <section>
        <h2 class="text-3xl font-bold text-green-700">Production Process</h2>
        <p class="mt-4 text-gray-700 leading-relaxed">
          From seed selection to packaging, we follow a meticulous process to deliver the freshest and healthiest groundnuts.
          Our production facilities are equipped with modern technology, ensuring hygiene and quality at every step.
        </p>
      </section>

      <!-- Health Benefits Section -->
      <section>
        <h2 class="text-3xl font-bold text-green-700">Health Benefits</h2>
        <ul class="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>Rich in protein, fiber, and healthy fats, making them a perfect snack for energy.</li>
          <li>Contains essential vitamins and minerals like vitamin E, magnesium, and potassium.</li>
          <li>Helps in maintaining heart health and improving digestion.</li>
          <li>Boosts immunity and contributes to glowing skin.</li>
        </ul>
      </section>

      <!-- Fast Delivery Section -->
      <section>
        <h2 class="text-3xl font-bold text-green-700">Fast and Reliable Delivery</h2>
        <p class="mt-4 text-gray-700 leading-relaxed">
          We pride ourselves on delivering your orders quickly and efficiently. No matter where you are, our logistics team ensures 
          that your products arrive fresh and on time.
        </p>
      </section>

      <!-- Company Location Section -->
      <section>
        <h2 class="text-3xl font-bold text-green-700">Our Location</h2>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Visit us at our head office:
        </p>
        <address class="mt-2 text-gray-700">
          Groundnut Store Co.<br />
          R08 Stadium area, Ogbomosho, Oyo State, Nigeria<br />
          Phone: +234-816-622-3968<br />
          Email: ogunladeadebayopeter@gmail.com
        </address>
        <iframe class="mt-4 w-full h-64 border rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.542381737602!2d4.2608668736878155!3d8.1479793918823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d0f6f7a136d%3A0x2585545f4c5801e9!2s47X7%2B694%20Stadium%20area%2C%20Nurudeen%20Grammer%20school%2C%20Stadium%20Baptist%20Church%20Rd%2C%20Ogbomoso%20210211%2C%20Oyo!5e0!3m2!1sen!2sng!4v1736518335063!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>

    <!-- Back Button -->
    <div class="fixed bottom-4 left-4">
      <button
        @click="goBack"
        class="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 focus:outline-none focus:ring"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
  },
};
</script>

<style>
.min-h-screen {
  min-height: 100vh;
}
</style>

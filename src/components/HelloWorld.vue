<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-green-600 text-white py-20 relative overflow-hidden">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left md:w-1/2" data-aos="fade-right">
          <h1 class="text-4xl font-bold mb-4">Welcome to Groundnut Store</h1>
          <p class="text-lg mb-6">
            Discover the finest selection of groundnuts. Order now and enjoy the taste of quality!
          </p>
          <router-link
            to="/product"
            class="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105"
          >
            Shop Now
          </router-link>
        </div>
        <!-- Hero Image -->
        <div class="mt-8 md:mt-0 md:w-1/2" data-aos="fade-left">
          <img
            src="../assets/image/groundnut.png"
            alt="Groundnuts Hero"
            class="rounded shadow-lg w-full max-w-[500px] h-auto transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300 h-[400px] flex flex-col items-center justify-between"
            data-aos="zoom-in"
          >
            <img
              src="https://img.freepik.com/free-photo/jumbo-salted-peanuts_1368-5488.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
              alt="Organic"
              class="w-[150px] h-[150px] object-cover rounded mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Organic & Fresh</h3>
            <p>
              We source only the freshest and organically grown groundnuts for our customers.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300 h-[400px] flex flex-col items-center justify-between"
            data-aos="zoom-in"
          >
            <img
              src="https://img.freepik.com/free-photo/peanut-isolated-white-background_1203-7319.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
              alt="Delivery"
              class="w-[150px] h-[150px] object-cover rounded mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Fast Delivery</h3>
            <p>
              Enjoy fast and reliable delivery services to your doorstep, anywhere in the region.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300 h-[400px] flex flex-col items-center justify-between"
            data-aos="zoom-in"
          >
            <img
              src="https://img.freepik.com/free-photo/peanut-isolated-white-background_1203-3653.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
              alt="Customer Satisfaction"
              class="w-[150px] h-[150px] object-cover rounded mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Customer Satisfaction</h3>
            <p>
              Your satisfaction is our priority. We ensure top-notch quality in every order.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="bg-green-600 text-white py-16">
      <div class="container mx-auto text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">Ready to Taste Quality?</h2>
        <p class="text-lg mb-6">
          Place your order now and let us deliver the best groundnuts to your door.
        </p>
        <router-link
          to="/contact"
          class="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105"
        >
          Contact Us
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Ensure consistent font imports */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>

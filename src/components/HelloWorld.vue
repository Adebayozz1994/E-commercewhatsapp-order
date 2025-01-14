<template>
  <div>
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

    <div v-else>
      <!-- Hero Section -->
      <section class="bg-green-600 text-white py-20 relative overflow-hidden">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="text-center md:text-left md:w-1/2 ml-5" data-aos="fade-right">
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
          
          <div class="mt-8 md:mt-0 md:w-1/3" data-aos="fade-left">
            <img
              src="../assets/image/groundnut.png"
              alt="Groundnuts Hero"
              class="rounded shadow-lg w-full h-auto max-w-[500px] h-[350px] transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              data-aos="zoom-in"
            >
              <img
                src="https://img.freepik.com/free-photo/jumbo-salted-peanuts_1368-5488.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
                alt="Organic"
                class="mx-auto mb-4 w-full h-[200px] object-cover"
              />
              <h3 class="text-xl font-bold mb-2">Organic & Fresh</h3>
              <p>
                We source only the freshest and organically grown groundnuts for our customers.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              data-aos="zoom-in"
            >
              <img
                src="https://img.freepik.com/free-photo/peanut-isolated-white-background_1203-7319.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
                alt="Delivery"
                class="mx-auto mb-4 w-full h-[200px] object-cover"
              />
              <h3 class="text-xl font-bold mb-2">Fast Delivery</h3>
              <p>
                Enjoy fast and reliable delivery services to your doorstep, anywhere in the region.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              data-aos="zoom-in"
            >
              <img
                src="https://img.freepik.com/free-photo/peanut-isolated-white-background_1203-3653.jpg?ga=GA1.2.1457401061.1705098422&semt=ais_hybrid"
                alt="Customer Satisfaction"
                class="mx-auto mb-4 w-full h-[200px] object-cover"
              />
              <h3 class="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p>
                Your satisfaction is our priority. We ensure top-notch quality in every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
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

      <!-- Customer Reviews Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              data-aos="zoom-in"
            >
              <div class="flex justify-center mb-4">
                <img
                  :src="testimonial.image"
                  alt="Customer Photo"
                  class="w-16 h-16 rounded-full border border-gray-200"
                />
              </div>
              <h3 class="text-lg font-bold mb-2">{{ testimonial.name }}</h3>
              <p class="italic text-gray-600 mb-4">"{{ testimonial.feedback }}"</p>
              <p class="text-sm text-gray-500">- {{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      testimonials: [
        {
          name: "funmilola",
          feedback: "The groundnuts are of exceptional quality and delivered on time!",
          location: "Lagos, Nigeria",
          image: "../assets/image/funmi.jpg"
        },
        {
          name: "wuraola",
          feedback: "Excellent customer service and fresh products. Highly recommended!",
          location: "ibadan, Nigeria",
          image: "../assets/image/ola.jpg"
        },
        {
          name: "ojo toyeshe",
          feedback: "I was impressed with the fast delivery and organic taste. Will buy again!",
          location: "abeokuta, Nigeria",
          image: "../assets/image/tboy.jpg"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); 
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

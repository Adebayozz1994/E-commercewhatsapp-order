<template>
  <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6">Contact Us</h2>
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows="4"
        ></textarea>
      </div>
      <div class="flex justify-between items-center">
        <button
          @click="sendViaWhatsApp"
          type="button"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          Send via WhatsApp
        </button>
        <button
          @click="sendViaEmail"
          type="button"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Send via Email
        </button>
      </div>
    </form>
    <div v-if="successMessage" class="mt-6 text-green-600 text-center font-bold">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      this.successMessage = "Thank you! Your message has been sent.";
      this.form = { name: "", email: "", message: "" };
    },
    sendViaWhatsApp() {
      const phoneNumber = "+2348166223968";
      const text = `Hello, my name is ${this.form.name}. ${this.form.message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");
    },
    sendViaEmail() {
      const subject = `Contact from ${this.form.name}`;
      const body = `${this.form.message}\n\nContact me at ${this.form.email}`;
      const emailUrl = `mailto:ogunladeadebayopeter@gmail.com.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(emailUrl, "_blank");
    },
  },
};
</script>

<style scoped>
/* Add custom styles for form if necessary */
</style>

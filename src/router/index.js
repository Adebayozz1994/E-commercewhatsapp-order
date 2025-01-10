import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import ProductSide from "../components/ProductSide.vue";
import CartSide from "../components/CartSide.vue";
import ContactPage from "../components/ContactPage.vue";
import AboutPage from "../components/AboutPage.vue";


const routes = [
    {path: "/", component: HelloWorld},
    {path: "/product", name: "Products", component: ProductSide},
    {path: "/cart", name: "Cart", component: CartSide},
    {path: "/contact", component: ContactPage},
    {path: "/about", component: AboutPage},





]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router; 
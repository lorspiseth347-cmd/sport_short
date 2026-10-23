import { createRouter, createWebHistory } from "vue-router";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Home from "../view/Home.vue";
// import path from "path";
import Boot from "../type/boot.vue";
// import path from "path";
import ProductDetail from "../view/ProductDetailBoot.vue";
// import path from "path";
import Shirt from "../type/shirt.vue";
import ProductDetailShirt from "../view/ProductDetailShirt.vue";
import Accessories from "../type/accessories.vue";
import ProductDetailAcc from "../view/ProductDetailAcc.vue";
import Cart from "../cart/cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Conatact",
    component: Contact,
  },
  {
    path: "/boot",
    name: "Boot",
    component: Boot,
    redirect: "/boot/nike",
    children: [
      {
        path: "nike",
        name: "Nike",
        component: () => import("../boot/nike.vue"),
      },
      {
        path: "adidas",
        name: "Adidas",
        component: () => import("../boot/adidas.vue"),
      },
    ],
  },
  {
    path: "/shirt",
    name: "Shirt",
    component: Shirt,
  },
  {
    path: "/productDetailboot/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/productDetailShirt/:id",
    name: "ProductDetailShirt",
    component: ProductDetailShirt,
  },
  {
    path: "/accessories",
    name: "Accessories",
    component: Accessories,
  },
  {
    path: "/productDetailAcc/:id",
    name: "ProductDetailAcc",
    component: ProductDetailAcc,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;

<template>
  <div class="container">
    <div v-if="product">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="img m-5">
            <img
              :src="product.image"
              :alt="product.title"
              class="rounded img-fluid"
              style="width: 400px"
            />
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 py-5">
          <div class="card">
            <div class="px-3">
              <span class="bg-warning rounded-pill badge my-3"
                >Stock:{{ product.qty }}</span
              >
              <h1 class="fw-bold">{{ product.title }}</h1>
              <div class="mt-4">
                <p>{{ product.description }}</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    class="fw-bold text-center fs-3 text-secondary"
                    style="width: 150px"
                    >Price : ${{ product.price }}</span
                  >
                </div>
                <div>
                  <p class="fw-bold fs-5">
                    SIZE : <span class="">{{ product.size }}. </span>
                  </p>
                </div>
              </div>
              <div class="d-flex py-4">
                <button @click="goback" class="btn btn-outline-secondary w-100">
                  Back
                </button>

                <button
                  @click="cartStore.addToCart(product)"
                  class="btn btn-primary ms-2 w-100"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   <!-- footer -->

  <div class="container-fluid bg-warning py-4">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-6">
       <div class="ms-4">
         <h1 class="fw-bold "><span class="bg-warning fw-bold">PS</span> <span class="text-white"> Shop</span></h1>
       </div>
      </div>
      <div class="col-12 col-md-9 col-lg-6">
        <div class="row">
          <div class="col-3 col-md-4 col-lg-4">
            <ul style="list-style-type: none">
              <h4 class="fw-bold">Feature</h4>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/"
                  >Home</RouterLink
                >
              </li>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/about"
                  >About</RouterLink
                >
              </li>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/contact"
                  >Contact</RouterLink
                >
              </li>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/boot"
                  >Product</RouterLink
                >
              </li>
            </ul>
          </div>
          <div class="col-3 col-md-4 col-lg-4">
            <ul style="list-style-type: none">
              <h4 class="fw-bold">Product</h4>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/boot"
                  >Boot</RouterLink
                >
              </li>
              <li>
                <RouterLink class="text-decoration-none text-dark" to="/shirt"
                  >Shirt</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="text-decoration-none text-dark"
                  to="/accessories"
                  >Accessories</RouterLink
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-4 ">
            <ul style="list-style-type: none;" >
              <h4 class="fw-bold">Contact us</h4>
              <li>
                <RouterLink to="#" class="text-dark text-decoration-none"
                  ><i class="bi bi-facebook"></i> Facebook</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#" class="text-dark text-decoration-none"
                  ><i class="bi bi-telegram"></i> Telegram</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#" class="text-dark text-decoration-none"
                  ><i class="bi bi-tiktok"></i> Tik Tok</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#" class="text-dark text-decoration-none"
                  ><i class="bi bi-youtube"></i> YouTube</RouterLink
                >
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allBootProduct } from "../data/Product";
import { useCartStore } from "../stores/cart";

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  return allBootProduct.find((item) => item.id === Number(route.params.id));
});

//back
const goback = () => {
  router.back();
};
const cartStore = useCartStore();

</script>

<template>
  <div class="container">
    <div v-if="product">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="img m-5">
            <img
              :src="product.imageUrl"
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

                <div class="fw-bold fs-5">
                  SIZE : <span class="">{{ product.size }} </span>
                </div>
              </div>
              <div class="d-flex py-4">
                <button @click="back" class="btn btn-outline-secondary w-100">
                  Back
                </button>
                <button class="btn btn-warning w-100 ms-3">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { footballShirt } from "../data/Product";

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  return footballShirt.find((items) => items.id === Number(route.params.id));
});

const back = () => {
  router.back();
};
</script>

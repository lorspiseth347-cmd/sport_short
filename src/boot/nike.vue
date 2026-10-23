<template>
  <div class="container py-5">
    <div class="row">
      <div
      v-for="product in nikeFootballBoots"
      class="col-12 col-md-4 col-lg-3 mt-4"
      >
      <RouterLink :to="`/productDetailBoot/${product.id}`" class="text-decoration-none">
          <section class="card card1" style="height: auto">
            <div class="img position-relative">
              <img
                :src="product.image"
                class="card-img-top "
                :alt="product.title"
              />
              <span
              class=" bg-warning px-3 fw-bold badge text-dark rounded" style="position: absolute; top: 10px; left: 10px;" 
              >{{ product.qty }} Left</span
              >
              <span
              class="px-3 rounded fw-bold" style="position: absolute; bottom: 10px; right: 10px; background-color: chartreuse;"
              >$ {{ product.price }}</span
              >
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold" style="min-height: 50px">
                {{ product.title }}
              </h5>
              <p class="card-text">
                {{ product.description }}
              </p>
            </div>
          
          </section>
        </RouterLink>
        </div>
 
      </div>
  </div>
</template>
<script setup lang="ts">
import { nikeFootballBoots } from "../data/Product";
</script>
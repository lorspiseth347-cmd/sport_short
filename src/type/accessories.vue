<template>
  <div class="container-fluid py-4 bg-light">
    <div class="row">
      <div class="col-12 col-lg-6 col-md-6">
        <div class="container">
          <span class="bg-warning badge px-3">Spacial Discount</span>
          <p class="fw-bold mt-3" style="font-size: 60px">
            WELLCOME TO FOOT<span class="text-warning">BALL</span> ACCESSORIES
          </p>
          <p class="fs-5 text-secondary">
            We have many football shirt brands for you. Please enjoy shopping
            and choose your favourite ACCESSORIES.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <div class="img py-4">
          <img
            src="https://media.istockphoto.com/id/984746818/photo/football-soccer-flat-lay.jpg?s=612x612&w=0&k=20&c=UFTsRojWML5oPJGHgfLziZiyGM34iXWWz7gyRWvsZHY="
            class="img-fluid rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div v-for="product in accessory" class="col-12 col-md-4 col-lg-3 mt-4">
        <RouterLink
          :to="`/productDetailAcc/${product.id}`"
          class="text-decoration-none"
        >
          <section class="card card1" style="height: 470px">
            <div class="img position-relative">
              <img
                :src="product.image"
                class="card-img-top"
                :alt="product.title"
              />
              <span
                class="bg-warning px-3 fw-bold badge text-dark rounded"
                style="position: absolute; top: 10px; left: 10px"
                >{{ product.qty }} Left</span
              >
              <span
                class="px-3 rounded fw-bold"
                style="
                  position: absolute;
                  bottom: 10px;
                  right: 10px;
                  background-color: chartreuse;
                "
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

  <!-- footer -->

  <div class="container-fluid bg-warning py-4 mt-4">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-6">
        <div class="ms-4">
          <h1 class="fw-bold">
            <span class="bg-warning fw-bold">PS</span>
            <span class="text-white">Shop</span>
          </h1>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
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
          <div class="col-6 col-md-4 col-lg-4">
            <ul style="list-style-type: none">
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
import { accessory } from "../data/Product";
</script>

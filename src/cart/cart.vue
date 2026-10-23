<script setup lang="ts">
import { useCartStore } from "../stores/cart";
import { computed } from "vue";
const cartStore = useCartStore();

// Calculate total cart price
// const totalPrice = computed(() => {
//   return cartStore.items.reduce((sum, item) => {

//     const numericPrice = parseFloat(item.product.price.replace('$', ''));
//     return sum + numericPrice * item.quantity;
//   }, 0).toFixed(2);
// });

const totalPrice = computed(() => {
  return cartStore.items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0).toFixed(2);
});
</script>

<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-4">Your Shopping Cart</h2>

    <div v-if="cartStore.items.length === 0" class="text-center py-5">
      <p class="text-muted fs-5">Your cart is currently empty.</p>
      <RouterLink to="/" class="btn btn-warning mt-2">Start Shopping</RouterLink>
    </div>

    <div v-else class="row">
      <!-- Cart Items List -->
      <div class="col-lg-8">
        <div v-for="item in cartStore.items" :key="item.product.id" class="card mb-3 p-3 shadow-sm">
          <div class="row align-items-center">
            <div class="col-md-3">
              <img :src="item.product.image" alt="..." class="img-fluid rounded" style="max-height: 100px; object-fit: cover;" />
            </div>
            <div class="col-md-5">
              <h5 class="fw-bold mb-1">{{ item.product.title }}</h5>
              <p class="text-muted mb-0">{{ item.product.price }}</p>
            </div>
            <div class="col-md-2">
              <span class="badge bg-secondary">Qty: {{ item.quantity }}</span>
            </div>
            <div class="col-md-2 text-end">
              <button @click="cartStore.removeFromCart(item.product.id)" class="btn btn-outline-danger btn-sm">
                <i class="bi bi-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="col-lg-4">
        <div class="card p-4 shadow-sm">
          <h4 class="fw-bold mb-3">Order Summary</h4>
          <div class="d-flex justify-content-between mb-2">
            <span>Total Items:</span>
            <strong>{{ cartStore.totalItems }}</strong>
          </div>
          <div class="d-flex justify-content-between mb-3">
            <span>Estimated Total:</span>
            <strong class="text-primary fs-5">${{ totalPrice }}</strong>
          </div>
          <button class="btn btn-success w-100">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
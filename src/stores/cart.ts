// src/stores/useCartStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product } from '../data/Product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  // Add product to cart
  function addToCart(product: Product) {
    const existing = items.value.find((item) => item.product.id === product.id);
    if (existing) {
      if (existing.quantity < product.qty) {
        existing.quantity++;
      }
    } else {
      items.value.push({ product, quantity: 1 });
    }
  }

  // Remove product from cart
  function removeFromCart(productId: number) {
    items.value = items.value.filter((item) => item.product.id !== productId);
  }

  // Total items count for the navbar badge
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  return { items, addToCart, removeFromCart, totalItems };
});
<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../stores/cart";

const isMenuOpen = ref(false);
const searchQuery = ref("");

function closeMenu() {
  isMenuOpen.value = false;
}

function searchProduct() {
  const query = searchQuery.value.trim();

  if (!query) return;

  // You can connect this to Vue Router search later
  console.log("Search product:", query);
}
const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light shadow py-2 sticky-top">
    <div class="container-fluid px-3 px-lg-4">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="navbar-brand text-decoration-none"
        @click="closeMenu"
      >
        <span class="bg-warning px-2 fs-3 rounded fw-bold">PS</span>

        <span class="text-dark fs-2 fw-bold"> shop</span>
      </RouterLink>

      <!-- Cart and Hamburger -->
      <div class="d-flex align-items-center gap-3">
        <!-- Hamburger Button -->
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- Responsive Menu -->
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
        <!-- Navigation Links -->
        <ul class="navbar-nav mx-auto mb-3 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link px-lg-3" @click="closeMenu">
              Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="/about" class="nav-link px-lg-3" @click="closeMenu">
              About
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink
              to="/contact"
              class="nav-link px-lg-3"
              @click="closeMenu"
            >
              Contact
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/boot" class="dropdown-item">Boot</RouterLink>
              </li>
              <li>
                <RouterLink to="/shirt" class="dropdown-item">Shirt</RouterLink>
              </li>
              <li>
                <RouterLink to="/accessories" class="dropdown-item"
                  >Accessories</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>

        <!-- Search and User -->
        <div
          class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-3"
        >
          <!-- Search -->
          <form class="d-flex" role="search" @submit.prevent="searchProduct">
            <input
              v-model="searchQuery"
              class="form-control"
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
            />

            <button
              class="btn btn-warning ms-2"
              type="submit"
              aria-label="Search"
            >
              <i class="bi bi-search"></i>
            </button>

            <!-- Shopping Bag -->
            <RouterLink
              to="/cart"
              class=" px-2 py-1 text-decoration-none text-dark ms-2 position-relative"
            >
              <i class="bi bi-bag fs-4 me-1"></i>
              <span
              style="top: 10px;"
                v-if="cartStore.totalItems > 0"
                class="position-absolute translate-middle badge rounded-pill bg-danger"
              
              >
                {{ cartStore.totalItems }}
              </span>
            </RouterLink>

            <!-- User -->
            <RouterLink
              to="/account"
              class="text-dark fs-3 text-decoration-none mt-1"
              aria-label="My account"
              @click="closeMenu"
            >
              <i class="bi bi-person"></i>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.navbar-brand {
  white-space: nowrap;
}

.nav-link {
  font-weight: 500;
}

.nav-link:hover {
  color: #ffc107;
}

.navbar-toggler {
  border: none;
  box-shadow: none;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    flex-basis: 100%;
    padding-top: 15px;
  }

  .navbar-collapse form {
    width: 100%;
  }

  .navbar-collapse input {
    min-width: 0;
  }
}
</style>

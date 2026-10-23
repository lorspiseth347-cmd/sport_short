```vue
<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-75 py-5">
          <div class="col-lg-6 py-4">
            <span class="badge bg-warning text-dark px-3 py-2 mb-3">
              ⚽ OUR STORY
            </span>

            <h1 class="display-3 fw-bold text-dark">
              MORE THAN
              <span class="yellow-text">JUST FOOTBALL.</span>
            </h1>

            <p class="text-secondary fs-5 mt-4">
              Welcome to GoalZone, your ultimate destination for football
              jerseys, boots, balls, and sports accessories. We bring passion,
              quality, and style to every player and fan.
            </p>

            <RouterLink
              to="/"
              class="btn btn-warning btn-lg rounded-pill px-4 mt-3 fw-bold"
            >
              Explore Our Shop
              <i class="bi bi-arrow-right ms-2"></i>
            </RouterLink>
          </div>

          <div class="col-lg-6 text-center mt-4 mt-lg-0">
            <div class="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85"
                alt="Football field"
                class="img-fluid rounded-4 hero-image"
              />

              <div class="floating-card shadow">
                <i class="bi bi-trophy-fill text-warning fs-2"></i>
                <div>
                  <h6 class="fw-bold mb-0">Play With Passion</h6>
                  <small class="text-secondary">Dream. Believe. Achieve.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section py-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-card p-4 h-100">
              <i :class="stat.icon" class="fs-1 yellow-text"></i>

              <h2 class="fw-bold mt-3 mb-1">{{ stat.number }}</h2>

              <p class="text-secondary mb-0">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-5">
      <div class="container py-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=85"
                alt="Football players playing together"
                class="img-fluid rounded-4 about-image"
              />

              <div class="yellow-box">
                <h2 class="fw-bold mb-0">100%</h2>
                <p class="mb-0">Football Passion</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <span class="section-label">WHO WE ARE</span>

            <h2 class="display-5 fw-bold mt-3">
              Your Game.
              <span class="yellow-text">Your Style.</span>
            </h2>

            <p class="text-secondary mt-4">
              GoalZone was created for people who live and breathe football.
              Whether you are a professional player, a weekend athlete, or a
              loyal supporter, we want to help you enjoy the beautiful game with
              the right equipment.
            </p>

            <p class="text-secondary">
              From comfortable jerseys to high-performance football boots, we
              aim to provide quality products that help you look good, feel
              confident, and perform at your best.
            </p>

            <div class="d-flex align-items-start gap-3 mt-4">
              <div class="feature-icon">
                <i class="bi bi-check-lg"></i>
              </div>
              <div>
                <h5 class="fw-bold">Quality Products</h5>
                <p class="text-secondary">
                  Football essentials selected with care.
                </p>
              </div>
            </div>

            <div class="d-flex align-items-start gap-3">
              <div class="feature-icon">
                <i class="bi bi-check-lg"></i>
              </div>
              <div>
                <h5 class="fw-bold">Customer First</h5>
                <p class="text-secondary">
                  A friendly shopping experience for every football fan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="values-section py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <span class="section-label">WHAT WE BELIEVE</span>

          <h2 class="display-5 fw-bold mt-3">
            Our Core <span class="yellow-text">Values</span>
          </h2>

          <p class="text-secondary mt-3">
            Everything we do is inspired by our love for football.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4" v-for="value in values" :key="value.title">
            <div class="value-card bg-white rounded-4 p-4 h-100">
              <div class="value-icon mb-4">
                <i :class="value.icon"></i>
              </div>

              <h4 class="fw-bold">{{ value.title }}</h4>

              <p class="text-secondary mb-0">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <span class="section-label">WHAT WE OFFER</span>

          <h2 class="display-5 fw-bold mt-3">
            Everything For <span class="yellow-text">The Game</span>
          </h2>
        </div>

        <div class="row g-4">
          <div
            class="col-6 col-lg-3"
            v-for="product in productCategories"
            :key="product.title"
          >
            <div class="category-card text-center p-4 rounded-4 h-100">
              <i :class="product.icon" class="category-icon"></i>

              <h5 class="fw-bold mt-3">{{ product.title }}</h5>

              <p class="text-secondary small mb-0">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="cta-section py-5">
      <div class="container py-4 text-center">
        <div class="cta-box rounded-4 p-4 p-md-5">
          <i class="bi bi-trophy-fill display-3 text-warning"></i>

          <h2 class="display-5 fw-bold mt-3">Ready To Play?</h2>

          <p class="text-secondary fs-5 mt-3">
            Find your football essentials and get ready for your next match.
          </p>

          <RouterLink
            to="/"
            class="btn btn-warning btn-lg rounded-pill px-5 mt-3 fw-bold"
          >
            Shop Now
            <i class="bi bi-arrow-right ms-2"></i>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <!-- <footer class="footer-section py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"
        >
          <RouterLink
            to="/"
            class="text-decoration-none text-dark fs-4 fw-bold"
          >
            <span class="brand-badge">G</span> GoalZone
          </RouterLink>

          <p class="text-secondary mb-0 text-center">
            © {{ currentYear }} GoalZone Football Shop. All rights reserved.
          </p>

          <div class="d-flex gap-3 fs-5">
            <a href="#" class="footer-link" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="#" class="footer-link" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" class="footer-link" aria-label="TikTok">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer> -->
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
import { RouterLink } from "vue-router";

// const currentYear = new Date().getFullYear();

const stats = [
  {
    number: "1,000+",
    label: "Happy Customers",
    icon: "bi bi-people-fill",
  },
  {
    number: "500+",
    label: "Football Products",
    icon: "bi bi-bag-check-fill",
  },
  {
    number: "50+",
    label: "Team Jerseys",
    icon: "bi bi-shield-fill",
  },
  {
    number: "100%",
    label: "Football Passion",
    icon: "bi bi-heart-fill",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "We focus on offering football products that combine comfort, durability, and style.",
    icon: "bi bi-award-fill",
  },
  {
    title: "Passion For Football",
    description:
      "Football is more than a game. It brings people together and inspires us to do our best.",
    icon: "bi bi-heart-pulse-fill",
  },
  {
    title: "Customer Happiness",
    description:
      "We want every customer to enjoy a simple, friendly, and satisfying shopping experience.",
    icon: "bi bi-emoji-smile-fill",
  },
];

const productCategories = [
  {
    title: "Jerseys",
    description: "Wear your team's colors with pride.",
    icon: "bi bi-person-standing",
  },
  {
    title: "Football Boots",
    description: "Find your grip and control on the pitch.",
    icon: "bi bi-lightning-charge-fill",
  },
  {
    title: "Football Balls",
    description: "Get ready for every kick and goal.",
    icon: "bi bi-dribbble",
  },
  {
    title: "Accessories",
    description: "Complete your football equipment.",
    icon: "bi bi-bag-heart-fill",
  },
];
</script>

<style scoped>
.about-page {
  background-color: #ffffff;
  color: #212529;
  overflow: hidden;
}

.yellow-text {
  color: #f5c518;
}

.min-vh-75 {
  min-height: 75vh;
}

/* Hero */
.hero-section {
  background: linear-gradient(135deg, #fffdf5, #ffffff);
}

.hero-image-wrapper,
.about-image-wrapper {
  position: relative;
}

.hero-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.floating-card {
  position: absolute;
  left: -20px;
  bottom: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px;
  background: white;
  border-radius: 15px;
}

/* Statistics */
.stats-section {
  background-color: #fff9df;
}

.stat-card {
  background-color: #ffffff;
  border-radius: 18px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

/* About */
.about-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.yellow-box {
  position: absolute;
  right: -15px;
  bottom: 25px;
  padding: 20px 30px;
  background-color: #f5c518;
  border-radius: 15px;
  text-align: center;
}

.section-label {
  display: inline-block;
  color: #b18a00;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 13px;
}

.feature-icon {
  min-width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff1a8;
  border-radius: 50%;
  font-size: 23px;
  color: #806000;
}

/* Values */
.values-section {
  background-color: #fffdf5;
}

.value-card {
  border: 1px solid #f1e8c9;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.value-icon {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff1a8;
  color: #9b7600;
  border-radius: 18px;
  font-size: 30px;
}

/* Product Categories */
.category-card {
  border: 1px solid #f1e8c9;
  transition: all 0.3s ease;
}

.category-card:hover {
  background-color: #fff9df;
  border-color: #f5c518;
  transform: translateY(-5px);
}

.category-icon {
  display: inline-block;
  font-size: 45px;
  color: #e5b400;
}

/* Call to Action */
.cta-box {
  background: linear-gradient(135deg, #fff9df, #ffffff);
  border: 1px solid #f1e8c9;
}

/* Buttons */
.btn-warning {
  background-color: #f5c518;
  border-color: #f5c518;
  color: #212529;
  transition: all 0.3s ease;
}

.btn-warning:hover {
  background-color: #e2b300;
  border-color: #e2b300;
  color: #212529;
  transform: translateY(-2px);
}

/* Footer */
.footer-section {
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background-color: #f5c518;
}

.footer-link {
  color: #555555;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #e2b300;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-image {
    height: 350px;
  }

  .about-image {
    height: 350px;
  }

  .floating-card {
    left: 10px;
  }

  .yellow-box {
    right: 10px;
  }
}

@media (max-width: 576px) {
  .hero-image {
    height: 280px;
  }

  .about-image {
    height: 300px;
  }

  .display-3 {
    font-size: 2.5rem;
  }

  .display-5 {
    font-size: 2rem;
  }

  .floating-card {
    padding: 12px;
    left: 5px;
    bottom: 10px;
  }

  .yellow-box {
    padding: 12px 18px;
    right: 5px;
    bottom: 10px;
  }
}
</style>
```

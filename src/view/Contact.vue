
<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container py-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <span class="badge bg-warning text-dark px-3 py-2 mb-3">
              <i class="bi bi-dribbble me-2"></i>
              WE ARE HERE FOR YOU
            </span>

            <h1 class="display-4 fw-bold text-dark">
              Let's Talk <br />
              <span class="text-warning">Football!</span>
            </h1>

            <p class="text-secondary fs-5 mt-3">
              Have a question about our football jerseys, boots, or accessories?
              Contact our team and we'll be happy to help!
            </p>

            <a href="#contact-form" class="btn btn-warning btn-lg fw-bold mt-3">
              Contact Us
              <i class="bi bi-arrow-right ms-2"></i>
            </a>
          </div>

          <div class="col-lg-5 text-center">
            <div class="football-circle">
              <i class="bi bi-dribbble football-icon"></i>
              <span class="floating-badge">
                <i class="bi bi-lightning-charge-fill text-warning"></i>
                Play With Passion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="container contact-info-section mt-4">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="info-card">
            <div class="info-icon">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <h5 class="fw-bold mt-3">Call Us</h5>
            <p class="text-secondary mb-2">Need help with your order?</p>
            <a href="tel:+85512345678" class="contact-link">
              +855 889 220 960
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <div class="info-card">
            <div class="info-icon">
              <i class="bi bi-envelope-fill"></i>
            </div>
            <h5 class="fw-bold mt-3">Email Us</h5>
            <p class="text-secondary mb-2">Send us your questions anytime.</p>
            <a href="mailto:hello@footballshop.com" class="contact-link">
              lorspiseth347@gmail.com
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <div class="info-card">
            <div class="info-icon">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <h5 class="fw-bold mt-3">Visit Our Shop</h5>
            <p class="text-secondary mb-2">Come and explore our products.</p>
            <span class="contact-link"> Phnom Penh, Cambodia </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-form" class="container py-5">
      <div class="row g-5 align-items-start">
        <!-- Left Information -->
        <div class="col-lg-5">
          <span class="section-label">GET IN TOUCH</span>

          <h2 class="fw-bold display-6 mt-3">
            We'd Love to <span class="text-warning">Hear From You</span>
          </h2>

          <p class="text-secondary mt-3">
            Whether you need help choosing the right football boots, tracking an
            order, or finding your favorite team's jersey, send us a message.
          </p>

          <div class="opening-hours mt-4">
            <h5 class="fw-bold mb-3">
              <i class="bi bi-clock-fill text-warning me-2"></i>
              Opening Hours
            </h5>

            <div class="d-flex justify-content-between border-bottom py-3">
              <span>Monday - Friday</span>
              <span class="fw-semibold">8:00 AM - 8:00 PM</span>
            </div>

            <div class="d-flex justify-content-between border-bottom py-3">
              <span>Saturday</span>
              <span class="fw-semibold">9:00 AM - 9:00 PM</span>
            </div>

            <div class="d-flex justify-content-between py-3">
              <span>Sunday</span>
              <span class="text-warning fw-semibold">10:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div class="social-links mt-4">
            <h6 class="fw-bold mb-3">Follow Our Football Community</h6>

            <a href="#" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="TikTok">
              <i class="bi bi-tiktok"></i>
            </a>

            <a href="#" aria-label="Telegram">
              <i class="bi bi-telegram"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-7">
          <div class="form-card">
            <h3 class="fw-bold mb-2">Send Us a Message</h3>

            <p class="text-secondary mb-4">
              Fill in the form below and we'll get back to you.
            </p>

            <form @submit.prevent="submitForm">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                    minlength="2"
                  />
                </div>

                <div class="col-md-6">
                  <label for="email" class="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    class="form-control"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div class="col-12">
                  <label for="subject" class="form-label fw-semibold">
                    Subject
                  </label>

                  <select
                    id="subject"
                    v-model="form.subject"
                    class="form-select"
                    required
                  >
                    <option disabled value="">Choose a subject</option>
                    <option>Product Information</option>
                    <option>Order Tracking</option>
                    <option>Returns and Refunds</option>
                    <option>Football Jerseys</option>
                    <option>Other Questions</option>
                  </select>
                </div>

                <div class="col-12">
                  <label for="message" class="form-label fw-semibold">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    v-model.trim="form.message"
                    class="form-control"
                    rows="5"
                    placeholder="How can we help you?"
                    required
                    minlength="10"
                  ></textarea>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-warning btn-lg w-100 fw-bold submit-btn"
                  >
                    Send Message
                    <i class="bi bi-send-fill ms-2"></i>
                  </button>
                </div>
              </div>
            </form>

            <div
              v-if="successMessage"
              class="alert alert-success mt-4 mb-0"
              role="status"
            >
              <i class="bi bi-check-circle-fill me-2"></i>
              {{ successMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Banner -->
    <!-- <section class="football-banner">
      <div class="container text-center py-5">
        <i class="bi bi-trophy-fill text-warning fs-1"></i>

        <h2 class="fw-bold text-white mt-3">
          Your Game. Your Passion. Your Shop.
        </h2>

        <p class="text-white-50 mt-3 mb-0">
          Everything you need to play your best football.
        </p>
      </div>
    </section> -->
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
import { reactive, ref } from "vue";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = reactive<ContactForm>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const successMessage = ref("");

function submitForm() {
  // This is a frontend demonstration.
  // Connect an API or backend to actually send the message.

  successMessage.value = `Thank you, ${form.name}! Your message has been recorded in this form.`;

  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
}
</script>

<style scoped>
.contact-page {
  background-color: #ffffff;
  color: #212529;
}

/* Hero */
.contact-hero {
  background: linear-gradient(135deg, #fffdf5 0%, #fff3bf 100%);
  overflow: hidden;
}

.contact-hero .text-warning {
  color: #e7aa00 !important;
}

.football-circle {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: #ffca28;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  box-shadow: 0 20px 50px rgba(255, 193, 7, 0.25);
}

.football-icon {
  font-size: 150px;
  color: #ffffff;
  transition: transform 0.5s ease;
}

.football-circle:hover .football-icon {
  transform: rotate(35deg) scale(1.1);
}

.floating-badge {
  position: absolute;
  bottom: 15px;
  right: -25px;
  background: #ffffff;
  padding: 13px 18px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Contact information cards */
.contact-info-section {
  margin-top: -15px;
  position: relative;
}

.info-card {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 18px;
  padding: 30px 20px;
  height: 100%;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(255, 193, 7, 0.16);
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 18px;
  background: #fff3bf;
  color: #d99b00;
  font-size: 27px;
}

.contact-link {
  color: #b88600;
  text-decoration: none;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact-link:hover {
  color: #212529;
}

/* Form section */
.section-label {
  display: inline-block;
  background: #fff3bf;
  color: #a87900;
  padding: 8px 15px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.opening-hours {
  background: #fffdf5;
  border: 1px solid #fff0b3;
  padding: 25px;
  border-radius: 15px;
}

.form-card {
  background: #ffffff;
  padding: 35px;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
}

.form-control,
.form-select {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #dedede;
}

.form-control:focus,
.form-select:focus {
  border-color: #ffc107;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.2);
}

.submit-btn {
  padding: 13px;
  border-radius: 10px;
  border: none;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.submit-btn:hover {
  background-color: #edb400;
  transform: translateY(-2px);
}

/* Social links */
.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-right: 10px;
  border-radius: 50%;
  background: #fff3bf;
  color: #a87900;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #ffc107;
  color: #212529;
  transform: translateY(-4px);
}

/* Bottom banner */
.football-banner {
  background: #202020;
}

/* Responsive */
@media (max-width: 767px) {
  .contact-hero {
    text-align: center;
  }

  .contact-hero h1 {
    font-size: 42px;
  }

  .football-circle {
    width: 220px;
    height: 220px;
  }

  .football-icon {
    font-size: 110px;
  }

  .floating-badge {
    right: -10px;
    font-size: 12px;
  }

  .form-card {
    padding: 22px;
  }

  .opening-hours {
    padding: 18px;
  }
}
</style>


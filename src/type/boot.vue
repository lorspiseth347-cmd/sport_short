

<template>
  <div class="container-fluid py-4 bg-light">
    <div class="row">
      <div class="col-12 col-lg-6 col-md-6">
        <div class="container">
          <span class="bg-warning badge px-3">Spacial Discount</span>
          <p class="fw-bold mt-3" style="font-size: 60px">
            WELLCOME TO FOOT<span class="text-warning">BALL</span> BOOTS
          </p>
          <p class="fs-5 text-secondary">
            We have many brand for you. Please enjoy shopping and choose your
            favourite boots.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <div class="img py-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEIiXc3mx_8KjXstRXrCU6wtXsL8wQ6E1G2xbvYrLhw&s=10"
            class="img-fluid rounded"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="d-flex">
      <RouterLink class="btn btn-outline-warning" style="min-width: 100px;" to="/boot/nike">Nike</RouterLink>
      <RouterLink class="btn btn-outline-warning ms-3" style="min-width: 100px;" to="/boot/adidas">Addias</RouterLink>
    </div>
  </div>

  <RouterView></RouterView>

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

<template>
  <div class="container-fluid">
    <div class="row bg-light py-5" style="height: auto">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="ms-4 m-2">
          <div class="container mt-2">
            <h1 style="font-size: 60px" class="fw-bold">
              WELCOME TO
              <div class="mt-3">
                SPORT<span class="text-warning">SHOP</span>
              </div>
            </h1>
            <div class="mt-3">
              <h5 class="text-muted mt-2">
                We have many SPORT products for you.
              </h5>
              <h5 class="text-muted">
                Please enjoy shopping and buy whatever you want.
              </h5>
            </div>
          </div>
          <div class="d-flex mt-5">
            <RouterLink to="/boot" class="btn btn-warning px-3">
              <h4 class="fw-bold">Shop Now</h4>
            </RouterLink>
            <button class="btn btn-secondary ms-3">
              <h4 class="fw-bold">Learn More</h4>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mt-1">
        <div class="m-3">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6AGA6IxynFQkzPv-J81qpIOe1g8br9QjYWSRkZWrCw&s=10"
                  class="d-block w-100"
                  style="height: 350px"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvS_xuY1aXqpDk2LdjEijJQ94WrYPLYcFgeLDuLuqYg&s=10"
                  style="height: 350px"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfIo81ULQNkPhanQLrshyEb_9D4vuE5vYtuEWmfcJhYtbtXOf5nNU2oXr&s=10"
                  class="d-block w-100"
                  style="height: 350px"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5">
    <div class="text-center">
      <h1 class="fw-bold">Shop By Category</h1>
      <h5 class="text-muted">Choose the Product you want.</h5>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-4">
        <RouterLink to="/boot" class="text-decoration-none text-dark">
          <div class="text-center m-4">
            <img
              class="img-fluid rounded shadow cat"
              style="width: 300px"
              src="https://www.smithsofgreenock.co.uk/wp-content/uploads/2023/07/EskimoST-37932_1.jpg"
              alt="shoes"
            />
            <p class="fw-bold mt-2">Football Shoes</p>
          </div>
        </RouterLink>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <RouterLink to="/shirt" class="text-decoration-none text-dark">
          <div class="text-center m-4">
            <img
              style="width: 300px; height: 300px"
              class="shadow cat img-fluid rounded"
              src="https://cdn.media.amplience.net/i/frasersdev/37868718_o?fmt=auto&upscale=false&w=345&h=345&v=1&sm=c&$h-ttl$"
              alt="shoes"
            />
            <p class="fw-bold mt-2">Football Shirt</p>
          </div>
        </RouterLink>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <RouterLink to="/accessories" class="text-decoration-none text-dark">
          <div class="text-center m-4">
            <img
              class="img-fluid rounded shadow cat"
              style="width: 300px; height: 300px"
              src="https://img.kwcdn.com/product/fancy/a4f713b5-44a4-4662-a876-3fe334d06b37.jpg?imageView2/2/w/500/q/60/format/webphttps://cdn.shopify.com/s/files/1/0695/5689/5834/files/1047495_main.jpg?v=1791999067&width=800"
              alt="shoes"
            />
            <p class="fw-bold mt-2">Football Accessories</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>


  <!-- footer -->

  <div class="container-fluid bg-warning py-4">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
       <div class="ms-4">
         <h1 class="fw-bold "><span class="bg-warning fw-bold">PS</span> <span class="text-white"> Shop</span></h1>
       </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
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

<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
 <!-- HEADER -->
 <header>
      <div class="container">
        <div class="d-flex align-center j-between">
          <div class="logo">
            <img src="/public/image/logo.png" alt="" srcset="">
          </div>
          <div class="right-menu d-flex">
            <div class="menu">
              <ul class="text-c d-flex unstyled g-2">
                <li><a href="">Home</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Video</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Store</a></li>
              </ul>
            </div>
            <span><a href="">new</a></span>
            <button class="workout" type="button">
              <a href="">Schedule a Workout</a>
            </button>
            <div class="icon">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<style>
</style>
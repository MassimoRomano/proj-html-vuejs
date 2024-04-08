<script>
import AppHeader from '/src/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }

}

</script>

<template>

  <body>
    <div class="container">
      <header>
          <div class="logo">
            <img src="/public/image/logo.png" alt="" srcset="">
          </div>
          <div class="d-flex">
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
            <button class="workout" type="click">
              <a href="">Schedule a Workout</a>
            </button>
            <div class="icon">

            </div>
          </div>
      </header>
    </div>
  </body>
</template>




<style>
@import url('./style.css');
</style>

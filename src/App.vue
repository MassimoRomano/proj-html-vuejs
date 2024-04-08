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

    <main>
      <div class="jumbotron">
        <div class="container">
          <div class="jumbotron-container">
            <div class="jumbotron-text">
              <p class="red">Certified fitness professional</p>
              <h1>Take control of your health</h1>
              <p class="wave">&#8767&#8767&#8767</p>
              <p class="trasp">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
              <div>
                <button class="light-b" type="button">Visit my YouTube Channel</button>
                <button class="dark-b" type="button">Buy Avda Today</button>
              </div>
            </div>
            <button class="play-button">Play</button>
            <div class="jumbotron-images">
              <img src="" alt="Immagine 1">
              <img src="" alt="Immagine 2">
            </div>
          </div>
        </div>
      </div>
    </main>

  </body>
</template>




<style>
@import url('./style.css');
</style>

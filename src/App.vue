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
    <!-- HEADER -->
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

    <!-- START MAIN -->
    <!-- JUMBOTRON -->
    <main>
      <section class="jumbotron">
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
            <span class="play-button"></span>
            <div class="jumbotron-images">
              <img src="" alt="Immagine 1">
              <img src="" alt="Immagine 2">
            </div>
          </div>
        </div>
      </section>

      <!-- HEALTH SECTION -->
      <section id="training">
        <div class="container">
          <div class="training-img">
            <img src="/public/image/service6-2x.jpg" alt="">
            <img src="/public/image/box1-2x.jpg" alt="">
            <img src="/public/image/box3-2x.jpg" alt="">
            <div class="text-img">
              <div class="text-contenitor">
                <span>&#8767&#8767&#8767</span>
                <h4>CrossFit Workout</h4>
                <p>Push your limit</p>
              </div>
            </div>
            <div class="text-img">
              <div class="text-contenitor">
                <span>&#8767&#8767&#8767</span>
                <h4>CrossFit Workout</h4>
                <p>Push your limit</p>
              </div>
            </div>
            <div class="text-img">
              <div class="text-contenitor">
                <span>&#8767&#8767&#8767</span>
                <h4>CrossFit Workout</h4>
                <p>Push your limit</p>
              </div>
            </div>
          </div>
          <div class="form">
            <h3>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque nisi unde est mollitia dicta
              pariatur, modi iste odit ad accusantium sunt."</h3>
            <p class="wave">&#8767&#8767&#8767</p>
            <div class="testimonial">
              <img src="/public/image/avatar-1-2x - Copia.jpg" alt="">
              <span>Brand Johnson</span><span>Las Vegas</span>
            </div>
          </div>
        </div>
      </section>

      <!-- HEALTH -->
      <section id="health">
        <div class="health-contanitor">
          <div class="left-health">
            <img src="/public/image/service15-2x.jpg" alt="">
            <span class="play"><i class="fa-solid fa-circle-play"></i></span>
          </div>
          <div class="right-health">
            <p class="tune">Tune up your workouts</p>
            <h4>The best health & fitness advice online</h4>
            <div>
              <span><img src="" alt=""></span><span><img src="" alt=""></span>
            </div>
            <p class="arcu">Arcu eu facilisi ut quisque nunc habitant.Magna sempre mauris,venenatis,leo integer sit
              pellentesque</p>
            <button type="button">Visit my YouTube channel</button>
          </div>
        </div>
        <div class="container">
          <div class="text-featured">
            <h5>Featured playlists</h5>
            <p>View all videos <i class="fa-solid fa-chevron-right"></i></p>

          </div>
          <div class="wrap-featured">
            <div class="featured-video">
              <img src="/public/image/video2-2x.jpg" alt="">
              <button class="play"><i class="fa-solid fa-circle-play"></i></button>
              <h3>Thinghs & glute workout</h3>
              <p>Increase your mobility</p>
            </div>
            <div class="featured-video">
              <img src="/public/image/video7-2x.jpg" alt="">
              <button class="play"><i class="fa-solid fa-circle-play"></i></button>
              <h3>Lift,firm & perk up</h3>
              <p>Feel young again</p>
            </div>
            <div class="featured-video">
              <img src="/public/image/video9-2x.jpg" alt="">
              <button class="play"><i class="fa-solid fa-circle-play"></i></button>
              <h3>Slim & trim your waist</h3>
              <p>Shed those extra pounds</p>
            </div>
          </div>
        </div>
      </section>

    </main>

  </body>
</template>




<style>
@import url('./style.css');
</style>

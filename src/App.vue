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
                <button class="light-b" type="button"><a href=""><i class="fa-brands fa-youtube"></i> Visit my YouTube
                    Channel</a></button>
                <button class="dark-b" type="button"><a href="">Buy Avda Today</a></button>
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
              <span><img style="width: 4%;" src="/public/image/unnamed.jpg" alt=""></span><span><img src=""
                  alt=""></span>
            </div>
            <p class="arcu">Arcu eu facilisi ut quisque nunc habitant.Magna sempre mauris,venenatis,leo integer sit
              pellentesque</p>
            <button type="button"><a href=""><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</a></button>
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

      <!-- JOIN -->
      <section id="Join">
        <div class="join-jumbotron">
          <div class="container">
            <div class="jumbotron-text" id="join-text">
              <p class="red">Join our mailing list today</p>
              <h1>Insider offers & flash sales in your inbox every week.</h1>
              <p class="wave">&#8767&#8767&#8767</p>
              <div>
                <input class="join-email" type="email" name="" id="" placeholder="Insert your email...*">
                <button class="light-b" type="button"><a href="">Subscribe</a></button>
              </div>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet,consectetur adipiscing
                elit sed portitor lectus</p>
            </div>
          </div>
        </div>
      </section>

      <!-- LEARN -->
      <section id="learn">
        <div class="container">
          <div class="learn-wrap">
            <div class="card-body">
              <h5 class="card-title"> Team Training</h5>
              <p class="card-text">Find a partner</p>
              <p class="light-inf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum suscipit dolores
                cupiditate excepturi
                necessitatibus, id dolore at temporibus nobis provident.</p>
              <p>FInd a partner <i class="fa-solid fa-chevron-right"></i></p>
            </div>
            <div class="card-body">
              <h5 class="card-title"> Team Training</h5>
              <p class="card-text">Find a partner</p>
              <p class="light-inf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum suscipit dolores
                cupiditate excepturi
                necessitatibus, id dolore at temporibus nobis provident.</p>
              <p>FInd a partner <i class="fa-solid fa-chevron-right"></i></p>
            </div>
            <div class="card-body">
              <h5 class="card-title"> Team Training</h5>
              <p class="card-text">Find a partner</p>
              <p class="light-inf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum suscipit dolores
                cupiditate excepturi
                necessitatibus, id dolore at temporibus nobis provident.</p>
              <p>FInd a partner <i class="fa-solid fa-chevron-right"></i></p>
            </div>
          </div>
        </div>
      </section>

      <!-- LATEST -->
      <section id="latest">
        <div class="container">
          <div class="text-latest">
            <h5>Featured playlists</h5>
            <p>View all videos <i class="fa-solid fa-chevron-right"></i></p>
          </div>
          <div class="wrap-latest">
            <div class="latest-img">
              <img src="/public/image/video2-2x.jpg" alt="">
              <h3>Thinghs & glute workout</h3>
              <p>Increase your mobility</p>
            </div>
            <div class="latest-img">
              <img src="/public/image/blog1-2x-1200x773.jpg" alt="">
              <h3>Lift,firm & perk up</h3>
              <p>Feel young again</p>
            </div>
            <div class="latest-img">
              <img src="/public/image/blog3-2x-1200x773.jpg" alt="">
              <h3>Slim & trim your waist</h3>
              <p>Shed those extra pounds</p>
            </div>
          </div>
        </div>
      </section>

      <!-- BUY-AVADA -->
      <section id="buy-avada">
        <div class="buy-jumbotron">
          <div class="buy-avada-text" id="buy-text">
            <h1>"I've failed over and over again in my life.And that is why I succeed."</h1>
            <p class="wave">&#8767&#8767&#8767</p>
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet,consectetur adipiscing
              elit sed portitor lectus</p>
            <div>
              <button class="lighter-b" type="click">Bui Avada today <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>

      <!-- CLASS -->
      <section id="class">
        <div class="container">
          <div class="class-wrap">
            <div class="class-body">
              <img src="/public/image/sponsor-1-2x.png" alt="">
              <span>&#8767&#8767&#8767</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nobis quaerat architecto dolores
                quo autem vitae nihil modi delectus corporis</p>
              <a class="dark-class">View all videos <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div class="class-body">
              <img src="/public/image/sponsor-2-2x.png" alt="">
              <span>&#8767&#8767&#8767</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nobis quaerat architecto dolores
                quo autem vitae nihil modi delectus corporis</p>
              <a class="dark-class">View all videos <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div class="class-body">
              <img src="/public/image/sponsor-3-2x.png" alt="">
              <span>&#8767&#8767&#8767</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nobis quaerat architecto dolores
                quo autem vitae nihil modi delectus corporis</p>
              <a class="dark-class">View all videos <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div class="class-body">
              <img src="/public/image/sponsor-4-2x.png" alt="">
              <span>&#8767&#8767&#8767</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nobis quaerat architecto dolores
                quo autem vitae nihil modi delectus corporis</p>
              <a class="dark-class">View all videos <i class="fa-solid fa-chevron-right"></i></a>
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

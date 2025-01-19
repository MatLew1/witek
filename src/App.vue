<template>


  <div id="app">
  <h2>lol</h2>
    <change-availabity v-if="$route.path === '/changeavailability'"></change-availabity>
    <the-nav id="top" class="nav" v-if="$route.path !== '/changeavailability'"></the-nav>
    <div class="hero-img" v-if="$route.path !== '/changeavailability'">
      <div class="hero-shadow"></div>
      <start-page class="start-page"></start-page>
    </div>
    <section v-if="$route.path !== '/changeavailability'">
      <about-us v-if="$route.path !== '/changeavailability'"></about-us>
    </section>
    <section>
      <three-steps v-if="$route.path !== '/changeavailability'"></three-steps>
    </section>

    <section>
      <the-achieviements v-if="$route.path !== '/changeavailability'"></the-achieviements>
    </section>

    <section>
      <the-prices v-if="$route.path !== '/changeavailability'"></the-prices>
    </section>
    
    <section>
      <the-gallery v-if="$route.path !== '/changeavailability'"></the-gallery>
    </section>

  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import StartPage from "./components/StartPage.vue";
import AboutUs from "./components/AboutUs.vue";
import ThreeSteps from "./components/ThreeSteps.vue";
import TheAchieviements from "./components/TheAchievements.vue";
import ThePrices from "./components/ThePrices.vue";
import ChangeAvailabity from "./components/ChangeAvailabity.vue"
import TheGallery from "./components/TheGallery.vue";

export default {
  name: "App",
  components: {
    TheNav,
    StartPage,
    AboutUs,
    ThreeSteps,
    TheAchieviements,
    ThePrices,
    ChangeAvailabity,
    TheGallery,
  },
};
</script>

<style lang="scss">
section {
  height: 100vh;
}

.nav {
  position: absolute;
  z-index: 300;
  width: 100%;
}

.start-page {
  z-index: 1;
  position: absolute;
  height: 100vh;
  width: 100%;
}

body {
  background-color: #36383a;
  font-family: open-sans, sans-serif;
  margin: 0;
  padding: 0;
}

.hero-img {
  background-image: url("/public/background-start.jpg");
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;
}

.hero-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -10;
}


</style>

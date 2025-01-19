<template>
  <the-menu>
    <div class="navbar" :class="{ scrolled: isScrolled }">
      <div class="logo">
        
          <img src="/logo.jpg" alt="logoCompany" @click="scrollToTop"/>
        
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <div id="nav-icon" :class="{ animate: isMenuVisible }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- Zmiana klasy z hidden-menu na menu oraz dodanie klasy show-menu dla reakcji na kliknięcie -->
      <transition name="fade">
        <nav v-show="isMenuVisible">
          <ul class="menu">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              :class="{ active: isActive(item.path, item.anchor) }"
            >
              <router-link :to="{ path: item.path, hash: item.anchor }" @click="() => { item.anchor === '/' ? scrollToTop() : null ; handleLinkClick(); checkScreenWidth()} ">
                {{
                item.label
              }}</router-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </the-menu>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "STRONA GŁÓWNA", path: "/", anchor: '#top' },
        { label: "O NAS", anchor: "#about-us" },
        { label: "3 KROKI", path: '/three-steps', anchor:"#three-steps"},
        { label: "ATUTY", path: "/achievements", anchor: '#achievements'},
        { label: "CENNIK", path: "/prices", anchor: '#prices'},
        { label: "GELERIA", path: "/gallery", anchor: '#gallery'}
      ],
      isMenuVisible: true,
      isScrolled: false,
    };
  },
  mounted() {
    if (this.$route.path === "/") {
      document.querySelector(".menu li:first-child").classList.add("active");
    }
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    isActive(path, anchor) {
      const isActive = this.$route.path === path && this.$route.hash === anchor

      return isActive;
    },
    handleLinkClick() {
      this.isMenuVisible = false;
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    checkScreenWidth() {
      this.isMenuVisible = window.innerWidth > 768;
    },
    handleScroll() {
      
      const navbar = window.pageXOffset || document.documentElement.scrollTop;
    
      this.isScrolled = navbar > 0;
      
    },
    scrollToTop() {
      const targetElement = document.querySelector('#top');
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: Math.max(topOffset, 0), behavior: 'smooth' });
    }
  }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

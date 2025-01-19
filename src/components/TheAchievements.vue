<template>
  <div id="achievements">
    <div class="full-container">
      <the-underline>
        <div class="container">
          <div>
            <p class="underlineP">Atuty</p>
          </div>
        </div>
        <div>
          <div class="underline"></div>
        </div>
      </the-underline>

      <div
        class="achievements-container"
        v-for="(item, index) in achievements"
        :key="index"
        :class="{ 'last-item' : index === achievements.length -1}"
        ref="achievementsContainer"
      >
        <div class="icon">
          <font-awesome-icon :icon="item.icon" />
        </div>
        <div class="text">
          <p>{{ item.number }}</p>
          <p class="text-details">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const containers = this.$refs.achievementsContainer;
    containers.forEach((container) => {
      container.style.opacity = 0;
    });

    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const containers = this.$refs.achievementsContainer;
      containers.forEach((container) => {
        const position = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
          container.classList.add(
            "animate__animated",
            "animate__fadeInLeftBig"
          );
        }
      });
    },
  },

  data() {
    return {
      achievements: [
        {
          icon: ["fas", "boxes-packing"],
          number: "128",
          text: "Boksów",
        },
        {
          icon: ["fas", "square-parking"],
          number: "85",
          text: "miejs parkingowych",
        },
        {
          icon: ["fas", "building"],
          number: "1",
          text: "siedziba",
        },
        {
          icon: ["fas", "car"],
          number: "1",
          text: "samochód służbowy",
        },
        {
          icon: ["fas", "camera"],
          number: "24/h",
          text: "monitoring",
        },
        {
          icon: ["fas", "shield-halved"],
          number: "24h/365dni",
          text: "ochrona",
        },
      ],
    };
  },
};
</script>

<style scoped>
.full-container {
  margin-top: 42rem;
  background-color: aliceblue;
}

.achievements-container {
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  .icon {
    margin-top: -2rem;
    padding: 10px;
    font-size: 50px;
    color: grey;
    text-shadow: 0 0 5px #000;
  }

  .text {
    p {
      margin-top: 0;
      font-size: 25px;
    }

    .text-details {
      margin-top: -1rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      padding-bottom: 2rem;
    }
  }
}

.last-item {
  margin-bottom: 20rem;
}


</style>

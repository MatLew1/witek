<template>
  <div id="about-us" class="fullContainer">
    <the-underline>
      <div class="container">
      <div>
        <p class="underlineP">O Nas</p>
      </div>
    </div>
    <div>
      <div class="underline"></div>
    </div>
    </the-underline>

    <div class="text-container">
      <p>
        Zajmujemy się udostępnianiem przestrzeni do przechowywania rzeczy, z
        którymi nie wiecie Państwo co teraz zrobić.
      </p>
      <p class="marginTop">Chętnie zapewnimy im tymczasowy "dom".</p>
    </div>

    <div
      class="icon-container"
      v-for="(item, index) in items"
      :key="index"
      ref="iconContainers"
    >
      <div class="icon">
        <font-awesome-icon :icon="item.icon" />
      </div>
      <div class="text">
        <p>{{ item.text }}</p>
        <p class="text-details">{{ item.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: ["fas", "business-time"],
          text: "najemca decyduje o okresie najmu boksu",
          details: "BOXY od 6m3 do 57m3",
        },
        {
          icon: ["fas", "briefcase-medical"],
          text: "dbamy o wasze zdrowie",
          details: "Tylko u nas pod Boks podjedziesz samochodem.",
        },
        {
          icon: ["fas", "shield-halved"],
          text: "bezpieczeństwo X2",
          details: "Systemy kontroli sterowane czytnikami zbliżeniowymi i RFID",
        },
        {
          icon: ["fas", "calendar-days"],
          text: "dostępne dla najemcy przez cały rok",
          details: "24h/7 dni w tygodniu",
        },
        {
          icon: ["fas", "file"],
          text: "Podpisanie umowy:",
          details: "Po wcześniejszym ustaleniu terminu",
        },
        {
          icon: ["fas", "car"],
          text: "Istnieje możliwość wynajęcia miejsca postojowego dla:",
          details: "Samochodu, motocykla, Roweru",
        },
      ],
    };
  },
  mounted() {
    const containers = this.$refs.iconContainers;
    containers.forEach(container => {
      container.style.opacity = 0;
    })

    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const containers = this.$refs.iconContainers;
      containers.forEach((container) => {
        const position = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
          container.classList.add("animate__animated", "animate__fadeInLeftBig");
        }
      });
    },
  },
};
</script>

<style scoped>
.fullContainer {
  background-color: #fff;
  padding-bottom: 1rem;
}



.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex-direction: column;

  p {
    margin-top: 4rem;
    font-size: 1.8rem;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
  }

  .marginTop {
    margin-top: 1px;
  }
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;

  .icon {
    font-size: 36px;
    font-weight: 900;
  }

  .text {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }

  .text-details {
    font-size: 14px;
    margin-top: -0.5rem;
    font-weight: normal;
  }
}
</style>

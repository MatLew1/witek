<template>
  <div class="full-container">
    <div class="shadow">
      <div id="three-steps" class="box">
        <the-underline>
          <div class="container">
            <div>
              <p class="underlineP">3 Kroki do Twojego Prywatnego Magazynu</p>
            </div>
          </div>
          <div>
            <div class="underline"></div>
          </div>
        </the-underline>
      </div>

      <div class="step" ref="step1">
        <p class="step-id">Krok 1.</p>
        <p>WYBIERZ BOKS ODPOWIEDNI DLA CIEBIE</p>
        <p class="icon">
          <font-awesome-icon :icon="['fas', 'boxes-stacked']" />
        </p>
        <p class="step-details">
          Zadzwoń, przyjedź osobiście, wyślij e-maila, sms-a. Profesjonalna
          obsługa przedstawi Ci ofertę i doradzi.
        </p>
      </div>
      <div class="step" ref="step2">
        <p class="step-id">Krok 2.</p>
        <p>PRZYJDŹ I WYPEŁNIJ WYMAGANE DOKUMENTY</p>
        <p class="icon">
          <font-awesome-icon :icon="['far', 'file']" />
        </p>
        <p class="step-details">
          Pracownik przedstawi Ci dokumentację, której podpisanie jest
          niezbędne, aby rozpocząć wynajem.
        </p>
      </div>

      <div class="step" ref="step3">
        <p class="step-id">Krok 3.</p>
        <p>ODBIERZ KLUCZE DOSTĘPU I OTWÓRZ BOKS</p>
        <p class="icon">
          <font-awesome-icon :icon="['fas', 'key']" />
        </p>
        <p class="step-details">
          Po podpisaniu niezbędnej dokumentacji otrzymasz Twoją osobistą kartę i
          brelok dostępu, który posiadasz tylko Ty.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.animateStep(this.$refs.step1);
      this.animateStep(this.$refs.step2);
      this.animateStep(this.$refs.step3);
    },
    animateStep(step) {
      const position = step.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight * 0.75) {
        step.classList.add("animate__animated", "animate__pulse");
      }
    },
  },
};
</script>

<style scoped>
.step {
  display: none;
}

.full-container {
  margin-top: 42rem;
  background-image: url("/public/3kroki.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  height: 220%;
  position: relative;
  z-index: 0;
  margin-top: 2rem;
  width: 100%;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

.step {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 250, 250);
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
  font-weight: normal;
  
}

.container {
  text-align: center;
}

.step-id {
  font-size: 35px;
  margin-bottom: -0rem;
}

.icon {
  margin-top: 0;
  font-size: 50px;
  margin-bottom: 1rem;
}

.step-details {
  margin-top: 0;
}

</style>

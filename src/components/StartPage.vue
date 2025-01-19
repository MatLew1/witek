<template>
  <div class="hero-text animate__animated animate__slideInDown" >
    <div>
      <h1>boksy magazynowe</h1>
      <p>Na Czas Remontu, Przeprowadzki, Dla Biznesu</p>
      <p>U Nas Przechowasz Prawie Wszystko!!</p>
    </div>

    <a type="button" class="btn btn-outline-light" @click="scrollToAboutUs">Poznaj Nas</a>
    <div class="animate__animated animate__bounce infinite">
      <font-awesome-icon :icon="['fas', 'arrow-down']" class="custom-icon" />
    </div>
  </div>
</template>



<script>
export default {
  methods: {
  scrollToAboutUs() {
    const targetElement = document.querySelector('#about-us');
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: Math.max(topOffset, 0), behavior: 'smooth' });
    }
  }
}
};
</script>

<style scoped>
.hero-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: white;
  margin-top: 2rem;

  h1 {
    text-transform: uppercase;
    font-size: 35px;
  }

  p {
    line-height: 1.5;
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 20px;
  }
}

.btn-outline-light {
  text-transform: uppercase;
  cursor: pointer;
  font-size: 24px;
  color: white;
  border: 5px solid #99cc00;
  padding: 1rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: bold;
}

.btn-outline-light:hover {
  background-color: #3c4815;
  
  transition: all 0.3s;
}

.custom-icon {
  margin-top: 2rem;
  font-size: 3rem;
}

.infinite {
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

@media only screen and (min-width: 768px) {
  .hero-text {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 30px;
    }
  }

  .btn-outline-light {
    margin-top: 40px;
    margin-bottom: 0;
  }

  .infinite {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .hero-text {
    margin-bottom: 0;
  }
}
</style>

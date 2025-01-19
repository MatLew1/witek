<template>
  <div id="prices">
    <div class="full-container">
      <the-underline>
        <div class="container">
          <div>
            <p class="underlineP">Cennik naszych boksów magazynowych:</p>
          </div>
        </div>
        <div>
          <div class="underline"></div>
        </div>
      </the-underline>

      <p class="text">
        Do ceny czynszu przy podpisaniu umowy pobierana jest opłata wstępna w
        wysokości 60,00zł / wkładka do zamka, brelok, karta lub naklejka / oraz
        kaucja w wysokości 160,00zł / zwrotna po zdaniu boksu.
      </p>

      <p class="text text-title">Wybierz interesujący rozmiar boksu:</p>

      <div class="container-button">
        <router-link  to="/boxTwo" class="custom-btn btn"
          >2m<sup>2</sup></router-link
        >
        <router-link to="/boxTwoAndfive" class="custom-btn btn"
          >2,5m<sup>2</sup></router-link
        >
        <router-link to="/boxThree" class="custom-btn btn">3m<sup>2</sup></router-link>
        <router-link  to="/boxThreeAndFive" class="custom-btn btn">3,5m<sup>2</sup></router-link>
        <router-link to="/boxFour" class="custom-btn btn">4m<sup>2</sup></router-link>
        <router-link to="/boxFourAndFive" class="custom-btn btn">4,5m<sup>2</sup></router-link>
        <router-link to="/boxFive" class="custom-btn btn">5m<sup>2</sup></router-link>
        <router-link to="/boxFiveAndFive" class="custom-btn btn">5,5m<sup>2</sup></router-link>
        <router-link to="boxSix" class="custom-btn btn">6m<sup>2</sup></router-link>
        <router-link to="/boxSixAndFive" class="custom-btn btn">6,5m<sup>2</sup></router-link>
        <router-link to="/boxSeven" class="custom-btn btn">7m<sup>2</sup></router-link>
        <router-link to="/boxSevenAndFive" class="custom-btn btn">7,5m<sup>2</sup></router-link>
        <router-link to="/boxEight" class="custom-btn btn">8m<sup>2</sup></router-link>
        <router-link to="/boxEightAndFive" class="custom-btn btn">8,5m<sup>2</sup></router-link>
        <router-link to="/boxNineAndFive" class="custom-btn btn">9,5m<sup>2</sup></router-link>
        <router-link to="/boxTen" class="custom-btn btn">10m<sup>2</sup></router-link>
        <router-link to="/boxElewenAndFive" class="custom-btn btn">11,5m<sup>2</sup></router-link>
        <router-link to="/boxTwelweAndFive" class="custom-btn btn">12,5m<sup>2</sup></router-link>
        <router-link to="/boxFourteen" class="custom-btn btn">14m<sup>2</sup></router-link>
        <router-link to="/boxTwentyThree" class="custom-btn btn">23m<sup>2</sup></router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.full-container {
  margin-top: 44rem;
  text-align: center;
}

.text {
  color: white;
  margin-top: 4rem;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1.1rem;
}

.text-title {
  margin-top: 1rem;
  color: #99cc00;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.container-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-between;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  
}

.custom-btn {
  padding-top: 1rem;
  margin-top: 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  width: 70px;
  height: 40px;
  color: black;
  border-radius: 5px;

  font-weight: bold;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn {
  background: rgb(241, 239, 245);
  background: linear-gradient(
    0deg,
    rgb(240, 238, 244) 0%,
    rgb(228, 221, 235) 100%
  );
  border: none;
}

.btn:before {
  height: 0%;
  width: 2px;
}

.btn:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
}
</style>

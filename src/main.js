import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'animate.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'


import App from './App.vue'; // Zakładając, że plik App.vue zawiera twoją główną aplikację
import routes from './routes'; // Importowanie tras aplikacji
import TheMenu from './components/UI/TheMenu.vue';
import MyUnderline from './components/UI/MyUnderline.vue';
import TheBoxes from './components/UI/TheBoxes.vue';

import { library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, reject) => {
        const targetElement = document.querySelector(to.hash);
        if (targetElement) {
          setTimeout(() => {
            // Dynamiczne ustawienie wartości marginesu w zależności od wysokości ekranu
            const screenHeight = window.innerHeight;
            let marginOffset = 60; // Domyślna wartość marginesu
            if (screenHeight > 800) {
              marginOffset = 140; // Ustaw inny margines dla większych ekranów
            } else if (screenHeight > 600) {
              marginOffset = 80; // Ustaw inny margines dla średnich ekranów
            }
            const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - marginOffset;
            resolve({ selector: to.hash, behavior: 'smooth', top: Math.max(topOffset, 0) });
          }, 100); // Opóźnienie 100ms, aby dać czas na załadowanie elementów na stronie
        } else {
          reject({ top: 0 });
        }
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 60 }; // Domyślnie przewiń o 60px od góry, jeśli nie ma hasha
    }
  }
});

router.afterEach((to, ) => {
  // Mapa, która przyporządkowuje ścieżki routingu do identyfikatorów elementów
  const scrollMap = {
    '/boxTwo': 'boxTwo',
    '/boxTwoAndfive': 'boxTwoAndFive',
    '/boxThree' : 'boxThree',
    '/boxThreeAndFive' : 'boxThreeAndFive',
    '/boxFour' : 'boxFour',
    '/boxFourAndFive' : 'boxFourAndFive',
    '/boxFive' : 'boxFive',
    '/boxFiveAndFive' : 'boxFiveAndFive',
    '/boxSix' : 'boxSix',
    '/boxSixAndFive' : 'boxSixAndFive',
    '/boxSeven' : 'boxSeven',
    '/boxSewenAndFive' : 'boxSewenAndFive',
    '/boxEight' : 'boxEight',
    '/boxEightAndFive' : 'boxEightAndFive',
    '/boxNineAndFive' : 'boxNineAndFive',
    '/boxTen' : 'boxTen',
    '/boxElewenAndFive' : 'boxElewenAndFive',
    '/boxTwelweAndFive' : 'boxTwelweAndFive',
    '/boxFourteen' : 'boxFourteen',
    '/boxTwentyThree' : 'boxTwentyThree',
    // Dodaj inne ścieżki i ich odpowiadające identyfikatory elementów tutaj
  };

  // Sprawdź, czy nowa ścieżka prowadzi do komponentu, który chcesz przewinąć
  const targetElementId = scrollMap[to.path];
  if (targetElementId) {
    // Przewiń stronę do odpowiedniego komponentu po zmianie routingu
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});


const app = createApp(App);
app.component('the-menu', TheMenu)
app.component('my-underline', MyUnderline)
app.component('the-boxes', TheBoxes)
app.component('font-awesome-icon', FontAwesomeIcon)

// Tworzenie instancji aplikacji za pomocą createApp

app.use(ElementPlus);
app.use(router);
app.mount('#app');

// routes.js
import App from './App.vue';
import AboutUs from './components/AboutUs.vue';
import ThreeSteps from './components/ThreeSteps.vue';
import TheAchievements from './components/TheAchievements.vue';
import ThePrices from './components/ThePrices.vue';
import TheGallery from './components/TheGallery.vue';

import BoxTwo from './components/BOXES/BoxTwo.vue';
import BoxTwoAndFive from "./components/BOXES/BoxTwoAndFive.vue"
import BoxThree from "./components/BOXES/BoxThree.vue"
import BoxThreeAndFive from "./components/BOXES/BoxThreeAndFive"
import BoxFour from "./components/BOXES/BoxFour.vue"
import BoxFourAndFive from "./components/BOXES/BoxFourAndFive.vue"
import BoxFive from "./components/BOXES/BoxFive.vue"
import BoxFiveAndFive from "./components/BOXES/BoxFiveAndFive.vue"
import BoxSix from "./components/BOXES/BoxSix.vue"
import BoxSixAndFive from "./components/BOXES/BoxSixAndFive"
import BoxSeven from "./components/BOXES/BoxSeven.vue"
import BoxSevenAndFive from "./components/BOXES/BoxSevenAndFive.vue"
import BoxEight from "./components/BOXES/BoxEight.vue"
import BoxEightAndFive from "./components/BOXES/BoxEightAndFive.vue"
import BoxNineAndFive from "./components/BOXES/BoxNineAndFive.vue"
import BoxTen from "./components/BOXES/BoxTen.vue"
import BoxElewenAndFive from "./components/BOXES/BoxElewenAndFive.vue"
import BoxTwelweAndFive from "./components/BOXES/BoxTwelweAndFive.vue"
import BoxFourteen from "./components/BOXES/BoxFourteen.vue"
import BoxTwentyThree from "./components/BOXES/BoxTwentyThree.vue"
import ChangeAvailabity from './components/ChangeAvailabity.vue';

const routes = [
  { path: '/', component: App,
  redirect: '/boxTwo' },
  { path: '/about-us', component: AboutUs,
  redirect: '/boxTwo' },
  { path: '/three-steps', component: ThreeSteps,
  redirect: '/boxTwo'},
  { path: '/achievements', component: TheAchievements,
  redirect: '/boxTwo'},
  { path: '/prices', component: ThePrices, redirect: '/boxTwo'},
  { path: '/gallery', component:
  TheGallery, redirect:'/boxTwo'},


  { path: '/boxTwo', component: BoxTwo},
  { path: '/boxTwoAndFive', component: BoxTwoAndFive},  
  { path: '/boxThree', component: BoxThree},
  { path: '/BoxThreeAndFive', component: BoxThreeAndFive},
  { path: '/boxFour', component: BoxFour},
  { path: '/boxFourAndFive', component: BoxFourAndFive},
  { path: '/boxFive', component: BoxFive},
  { path: '/boxFiveAndFive', component: BoxFiveAndFive},
  { path: '/boxSix', component: BoxSix},
  { path: '/boxSixAndFive', component: BoxSixAndFive},
  { path: '/boxSeven', component: BoxSeven},
  { path: '/boxSevenAndFive', component: BoxSevenAndFive},
  { path: '/boxEight', component: BoxEight},
  { path: '/boxEightAndFive', component: BoxEightAndFive},
  { path: '/boxNineAndFive', component: BoxNineAndFive},
  { path: '/boxTen', component: BoxTen},
  { path: '/boxElewenAndFive', component: BoxElewenAndFive},
  { path: '/boxTwelweAndFive', component: BoxTwelweAndFive},
  { path: '/boxFourteen', component: BoxFourteen},
  { path: '/boxTwentyThree', component: BoxTwentyThree},
  { path: '/changeavailabity',component: ChangeAvailabity,}
];




export default routes;
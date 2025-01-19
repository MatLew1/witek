import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGLYa54I0KssayIDwndqJKyUXpzuZ-IJk",
  authDomain: "stronawitka-d5994.firebaseapp.com",
  projectId: "stronawitka-d5994",
  storageBucket: "stronawitka-d5994.appspot.com",
  messagingSenderId: "196965270018",
  appId: "1:196965270018:web:79a7b66cd3db1312615d1b"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
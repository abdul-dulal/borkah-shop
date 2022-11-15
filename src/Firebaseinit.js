import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsn9n-w3oKYt7e9PIZTHHFuNImcq4QLxs",
  authDomain: "borkha-shop.firebaseapp.com",
  projectId: "borkha-shop",
  storageBucket: "borkha-shop.appspot.com",
  messagingSenderId: "582327270986",
  appId: "1:582327270986:web:f224c301084933453070b3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

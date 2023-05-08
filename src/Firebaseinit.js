import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd8cNV3oY617j0YIW7oKPy_zCNjVPKpRE",
  authDomain: "borkha-shop-8ba37.firebaseapp.com",
  projectId: "borkha-shop-8ba37",
  storageBucket: "borkha-shop-8ba37.appspot.com",
  messagingSenderId: "29783163165",
  appId: "1:29783163165:web:519ca498f740a9db9661f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

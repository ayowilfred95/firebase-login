import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyTsj-173RCSVLJIenL2G4rlXK2m5gdH0",
    authDomain: "openai-ecbf0.firebaseapp.com",
    projectId: "openai-ecbf0",
    storageBucket: "openai-ecbf0.appspot.com",
    messagingSenderId: "466799895928",
    appId: "1:466799895928:web:83c7a773b2650c7023948d",
    measurementId: "G-P3MC1R60H2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {app, auth};



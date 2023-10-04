// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f8946.firebaseapp.com",
  projectId: "real-estate-f8946",
  storageBucket: "real-estate-f8946.appspot.com",
  messagingSenderId: "157389713648",
  appId: "1:157389713648:web:4b57130f83751985d3d235"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
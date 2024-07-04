// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSB5d-34zKzffO63Eom4-vi2nYKwyIOY",
  authDomain: "passpulse-e3a46.firebaseapp.com",
  projectId: "passpulse-e3a46",
  storageBucket: "passpulse-e3a46.appspot.com",
  messagingSenderId: "854746977588",
  appId: "1:854746977588:web:6a853385d357c4b6efc161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
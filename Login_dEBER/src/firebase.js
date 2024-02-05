// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AKI EL API KEY",
  authDomain: "react-fb-auth22.firebaseapp.com",
  projectId: "react-fb-auth22",
  storageBucket: "react-fb-auth22.appspot.com",
  messagingSenderId: "EL ID DE ENVIO",
  appId: "EL APP ID WEB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

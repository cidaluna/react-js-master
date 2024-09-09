// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvhtMoOgV6KHew1NPxZDzm2dAgVqHp97g",
  authDomain: "miniblog-41ded.firebaseapp.com",
  projectId: "miniblog-41ded",
  storageBucket: "miniblog-41ded.appspot.com",
  messagingSenderId: "375410659724",
  appId: "1:375410659724:web:7be1dde4c0a413624f86a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

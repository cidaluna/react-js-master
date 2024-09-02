// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Banco de dados
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcKtRsn9V65RJxV4DIkuWWK21Zy4bfvnI",
  authDomain: "designauts-website.firebaseapp.com",
  projectId: "designauts-website",
  storageBucket: "designauts-website.appspot.com",
  messagingSenderId: "40647113964",
  appId: "1:40647113964:web:eee2818b2ed07b3ca039c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

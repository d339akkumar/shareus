// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcW52_VM636keG-c28FmA__y5d1lyKidE",
  authDomain: "connectus-social-media.firebaseapp.com",
  projectId: "connectus-social-media",
  storageBucket: "connectus-social-media.appspot.com",
  messagingSenderId: "453837606103",
  appId: "1:453837606103:web:1baaf2a291f956f8ebb492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
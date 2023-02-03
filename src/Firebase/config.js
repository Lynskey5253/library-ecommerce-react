// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtKemrIMbfUhCIMwXKm8XdHZkh97gyoQQ",
  authDomain: "react-library-8bd79.firebaseapp.com",
  projectId: "react-library-8bd79",
  storageBucket: "react-library-8bd79.appspot.com",
  messagingSenderId: "885073905302",
  appId: "1:885073905302:web:3b529d6d8c8219d643e4b7",
  measurementId: "G-Q59775K3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app)
export {auth, provider};
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCCgDWhO9wZ0iHlq6-Navg1wpsNzUYR_0",
  authDomain: "portfolio-8f71f.firebaseapp.com",
  projectId: "portfolio-8f71f",
  storageBucket: "portfolio-8f71f.firebasestorage.app",
  messagingSenderId: "833561835280",
  appId: "1:833561835280:web:d02f733e36fe85e38c9795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app);

export { db };

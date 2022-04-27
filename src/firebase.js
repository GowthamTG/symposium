import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZRWhePnY8wpRy57IjgZaPilFK-z3JplQ",
  authDomain: "threads22-cb396.firebaseapp.com",
  projectId: "threads22-cb396",
  storageBucket: "threads22-cb396.appspot.com",
  messagingSenderId: "1088732062082",
  appId: "1:1088732062082:web:c5a5a9e0ccbfc819a2ef9b",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

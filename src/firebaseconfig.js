// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_8hTwbvQRaMZn9rHOq3u06_tmmoUkfeI",
  authDomain: "fir-storage-865c9.firebaseapp.com",
  projectId: "fir-storage-865c9",
  storageBucket: "fir-storage-865c9.firebasestorage.app",
  messagingSenderId: "327519832059",
  appId: "1:327519832059:web:c0e941498722f25688ed5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
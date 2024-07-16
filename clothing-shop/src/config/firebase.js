import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK3X2TMfSVODLu2ZMGe4YmrwI8PuT4eOc",
  authDomain: "clothing-shop-c1115.firebaseapp.com",
  projectId: "clothing-shop-c1115",
  storageBucket: "clothing-shop-c1115.appspot.com",
  messagingSenderId: "14124603285",
  appId: "1:14124603285:web:72a1f76f657ea147e6c89c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fs = getFirestore(app);
export const storage = getStorage(app);

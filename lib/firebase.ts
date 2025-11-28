import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjV3BSpySgLbxRtR_3mVIKjp5YwaZhAno",
  authDomain: "o2coffee.firebaseapp.com",
  projectId: "o2coffee",
  storageBucket: "o2coffee.firebasestorage.app",
  messagingSenderId: "539698857280",
  appId: "1:539698857280:web:7fa22e310ea37426a5a6a5",
  measurementId: "G-116HDNXBHK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY2auoAF3aGANMK9hR_XDQrbiiTsJMEqA",
  authDomain: "pebb-aizu.firebaseapp.com",
  projectId: "pebb-aizu",
  storageBucket: "pebb-aizu.appspot.com",
  messagingSenderId: "782979903127",
  appId: "1:782979903127:web:e3bf40bce7e1b8e2bfc3d2",
  measurementId: "G-4SN7N5PVV3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);

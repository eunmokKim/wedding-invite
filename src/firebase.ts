import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5751rNt4ynx67Kgz7B9WQJAlR28mtinc",
  authDomain: "wedding-invite-7e7fa.firebaseapp.com",
  projectId: "wedding-invite-7e7fa",
  storageBucket: "wedding-invite-7e7fa.firebasestorage.app",
  messagingSenderId: "640243982331",
  appId: "1:640243982331:web:e174abc28287d2485cb55e",
  measurementId: "G-FCGBFMPM55"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

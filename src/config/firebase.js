// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore" 
const firebaseConfig = {
  apiKey: "AIzaSyAYCNkDJ4-R4VUfJH9wt1mg5qOO58wRLyQ",
  authDomain: "maisonpyramide-71150.firebaseapp.com",
  projectId: "maisonpyramide-71150",
  storageBucket: "maisonpyramide-71150.appspot.com",
  messagingSenderId: "284357631687",
  appId: "1:284357631687:web:d2addf6209aaa44c3168e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
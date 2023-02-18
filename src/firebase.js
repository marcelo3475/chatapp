import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth"
import {  getFirestore  } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpGKBog7ItOWSOKZA8NeFSoGSEq3XUqJU",
    authDomain: "anoterchat.firebaseapp.com",
    projectId: "anoterchat",
    storageBucket: "anoterchat.appspot.com",
    messagingSenderId: "705896919212",
    appId: "1:705896919212:web:5250d9cba1d57ec28caf09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

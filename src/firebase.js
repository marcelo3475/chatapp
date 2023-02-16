import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth"
import {  getFirestore  } from "firebase/firestore"
//import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpGKBog7ItOWSOKZA8NeFSoGSEq3XUqJU",
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDERID,
    appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
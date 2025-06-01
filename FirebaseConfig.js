// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth} from 'firebase/auth';
import {getReactNativePersistence} from '@firebase/auth/dist/rn/index.js';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6WvVxHSe3hHJLvln590v3oB8WHEomvEg",
  authDomain: "projetoreact-919df.firebaseapp.com",
  projectId: "projetoreact-919df",
  storageBucket: "projetoreact-919df.firebasestorage.app",
  messagingSenderId: "66663397502",
  appId: "1:66663397502:web:f0dcb51ad73c97b75f002f",
  measurementId: "G-JY4Z8TCBPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
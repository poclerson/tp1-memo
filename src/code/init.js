import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import configFirebase from './config';

// Initialiser Firebase
export const appliFirebase = initializeApp(configFirebase);

// Initialiser l'authentification Firebase
export const authFirebase = getAuth(appliFirebase);

// Initialiser l'authentification Google
export const authGoogle = new GoogleAuthProvider();

// Initialiser Firestore
export const bdFirestore = getFirestore();

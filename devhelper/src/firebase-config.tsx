// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyArCoY1FWsX2HXKpjtMfYIx-YdOzQpsn0A",
  authDomain: "devhelper-743ee.firebaseapp.com",
  projectId: "devhelper-743ee",
  storageBucket: "devhelper-743ee.appspot.com",
  messagingSenderId: "1032735507434",
  appId: "1:1032735507434:web:bdcc931da367766f072893",
  measurementId: "G-5TX50V94MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
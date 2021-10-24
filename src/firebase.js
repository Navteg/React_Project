// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDM4Wz-nsYCLnOkq7Tws1XErKvYwoWcXE",
  authDomain: "fir-demo-eb82f.firebaseapp.com",
  projectId: "fir-demo-eb82f",
  storageBucket: "fir-demo-eb82f.appspot.com",
  messagingSenderId: "490953860481",
  appId: "1:490953860481:web:a177c0252417ea26bc3480"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users')
}

export const storage = firebase.storage();

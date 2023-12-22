
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgRIfP_6Mle7AuKwaR7AYkdrNJwOPF-Dc",
  authDomain: "pokemon-app-5eccd.firebaseapp.com",
  projectId: "pokemon-app-5eccd",
  storageBucket: "pokemon-app-5eccd.appspot.com",
  messagingSenderId: "961876156099",
  appId: "1:961876156099:web:121eaa4d270d5224458c76",
  measurementId: "G-RKFC9N2Y1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

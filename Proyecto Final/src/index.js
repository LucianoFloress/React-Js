import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeSVO6KGX76Nk-odsXp_jFY0KfL6Aygyc",
  authDomain: "cell-max.firebaseapp.com",
  projectId: "cell-max",
  storageBucket: "cell-max.appspot.com",
  messagingSenderId: "790102717299",
  appId: "1:790102717299:web:3187cc03bb80c023e84b06"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


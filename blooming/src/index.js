import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'
import './components/about.css';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrqLg0yhAesJKSq1S3gbBRnivjTe4BR0Q",
  authDomain: "blooming-960e3.firebaseapp.com",
  projectId: "blooming-960e3",
  storageBucket: "blooming-960e3.appspot.com",
  messagingSenderId: "785617964490",
  appId: "1:785617964490:web:bfa7f282bf5bbe2d6dd333",
  measurementId: "G-YYZ9XE5443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      {/* <App firebaseApp={app}/> */}
    </React.StrictMode>
  </BrowserRouter>
);


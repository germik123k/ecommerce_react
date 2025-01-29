import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcAYZ1JYGs5yqX3MdOF4qFDataBLwn3yw",
  authDomain: "tienda-65655.firebaseapp.com",
  projectId: "tienda-65655",
  storageBucket: "tienda-65655.firebasestorage.app",
  messagingSenderId: "968578468430",
  appId: "1:968578468430:web:d3487d1139777b1954d11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)



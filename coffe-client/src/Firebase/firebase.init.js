// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBNSMbfNsi7tfUAVqNUgKX1YcLLJM1ZJk",
    authDomain: "coffee-store-a19db.firebaseapp.com",
    projectId: "coffee-store-a19db",
    storageBucket: "coffee-store-a19db.firebasestorage.app",
    messagingSenderId: "465327622878",
    appId: "1:465327622878:web:8b06495e919ee81a93504f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
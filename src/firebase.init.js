// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwUaO2Dfy7BtGtT0oaYDnJZ0gztLJ8PAY",
    authDomain: "motors-client-app.firebaseapp.com",
    projectId: "motors-client-app",
    storageBucket: "motors-client-app.appspot.com",
    messagingSenderId: "1041154963787",
    appId: "1:1041154963787:web:76ad6ecd01da95efda90ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

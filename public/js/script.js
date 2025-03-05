// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSTAGn5lgADakvtIZZ6eKXFSlQxv89peo",
    authDomain: "taleemul-quran.firebaseapp.com",
    projectId: "taleemul-quran",
    storageBucket: "taleemul-quran.firebasestorage.app",
    messagingSenderId: "152516080082",
    appId: "1:152516080082:web:129246bfd9d897b59c180b",
    measurementId: "G-C7K7MFYKBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

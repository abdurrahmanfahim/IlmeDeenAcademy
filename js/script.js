// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY",
    authDomain: "ilmedeenacademy.com",
    projectId: "ilmedeenacademy",
    storageBucket: "ilmedeenacademy.appspot.com",
    messagingSenderId: "YOUR_NEW_MESSAGING_SENDER_ID",
    appId: "YOUR_NEW_APP_ID",
    measurementId: "YOUR_NEW_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

alert('hi');
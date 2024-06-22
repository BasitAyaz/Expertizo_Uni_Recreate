// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeLe2II4vwKqwL0algcfONVEVmBOaXtb4",
    authDomain: "expertizoclass.firebaseapp.com",
    projectId: "expertizoclass",
    storageBucket: "expertizoclass.appspot.com",
    messagingSenderId: "341078310688",
    appId: "1:341078310688:web:21ee9b6986b4b96a0f2145",
    measurementId: "G-0FQ56RBY34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app
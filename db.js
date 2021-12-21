import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCuHUubMX4aONyeTUBteadiWX9R6ehwBPE",

  authDomain: "votes-591e7.firebaseapp.com",

  projectId: "votes-591e7",

  storageBucket: "votes-591e7.appspot.com",

  messagingSenderId: "668478442398",

  appId: "1:668478442398:web:d13fbd253b4db0a4d7248f",

  measurementId: "G-1D62EYNDCE"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
 


const analytics = getAnalytics(app);

export { database }
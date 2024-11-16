// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkuPvb-ySUDp5VjtFJtm46NSEIyYBvfxY",
  authDomain: "pythonbootcamp-9cea5.firebaseapp.com",
  databaseURL: "https://pythonbootcamp-9cea5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pythonbootcamp-9cea5",
  storageBucket: "pythonbootcamp-9cea5.firebasestorage.app",
  messagingSenderId: "115508434005",
  appId: "1:115508434005:web:ca0d7db6edd695a6db30dc",
  measurementId: "G-CTZC4E7DF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database };
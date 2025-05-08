// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqtgorqxO_TdKr1249on0ybOQ1ccVDa_U",
  authDomain: "pwia-2d5bc.firebaseapp.com",
  databaseURL: "https://pwia-2d5bc-default-rtdb.firebaseio.com",
  projectId: "pwia-2d5bc",
  storageBucket: "pwia-2d5bc.firebasestorage.app",
  messagingSenderId: "728432633575",
  appId: "1:728432633575:web:b3de604212e44ebfed6442",
  measurementId: "G-TVQHWTYGQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);
// Initialize Realtime Database and get a reference to the service
export { db };

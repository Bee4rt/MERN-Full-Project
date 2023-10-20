// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-fullstackproject.firebaseapp.com",
  projectId: "mern-fullstackproject",
  storageBucket: "mern-fullstackproject.appspot.com",
  messagingSenderId: "256340322099",
  appId: "1:256340322099:web:504ab321c05eb0cec80046",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

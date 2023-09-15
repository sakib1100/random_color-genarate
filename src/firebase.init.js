// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqf5QxPj2cpZtRkDlhCaKCyD3T9mLv4n0",
  authDomain: "color-genaraton.firebaseapp.com",
  projectId: "color-genaraton",
  storageBucket: "color-genaraton.appspot.com",
  messagingSenderId: "178575339557",
  appId: "1:178575339557:web:f771e0066a27a9cd6c4fcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
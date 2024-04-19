// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN404oHZPoxrFqntnT2whHhItYlw1DvaY",
  authDomain: "funmovie-5d0f0.firebaseapp.com",
  projectId: "funmovie-5d0f0",
  storageBucket: "funmovie-5d0f0.appspot.com",
  messagingSenderId: "858548786899",
  appId: "1:858548786899:web:9fee83b9cfe78f1dfba626",
  measurementId: "G-DLYVNCY677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db
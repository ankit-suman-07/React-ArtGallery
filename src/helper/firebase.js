// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAft0WCuUqadMlFdbWtHVUfRFaGGjySk5s",
    authDomain: "arity-art-gallery.firebaseapp.com",
    projectId: "arity-art-gallery",
    storageBucket: "arity-art-gallery.appspot.com",
    messagingSenderId: "926968063815",
    appId: "1:926968063815:web:a09a6722d15942aa88ce62",
    measurementId: "G-DVVS4EL3CP"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

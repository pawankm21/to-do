import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    getAuth,
    updateProfile
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAd9vku7gZwAy1FF64kq4EPHQj2sv_jnNw",
    authDomain: "to-do-3fafa.firebaseapp.com",
    projectId: "to-do-3fafa",
    storageBucket: "to-do-3fafa.appspot.com",
    messagingSenderId: "288282243382",
    appId: "1:288282243382:web:c29713f5110925dad60397"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
}

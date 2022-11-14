import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd9vku7gZwAy1FF64kq4EPHQj2sv_jnNw",
  authDomain: "to-do-3fafa.firebaseapp.com",
  projectId: "to-do-3fafa",
  storageBucket: "to-do-3fafa.appspot.com",
  messagingSenderId: "288282243382",
  appId: "1:288282243382:web:c29713f5110925dad60397",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

async function getNotes(uid) {
  console.log("called getNotes", uid);
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return {
    "To Do": {},
    "In Progress": {},
    Completed: {},
  };
}
async function setNotes(uid, notes) {
  console.log("Called setNotes", uid,notes);
  setDoc(doc(db, "users", uid), notes);
}

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  collection,
  doc,
  getNotes,
  setNotes,
};

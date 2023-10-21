import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeSfIG1Qa2Th5330WRExbzNJtqf57EBX8",
  authDomain: "notes-app-react-23d59.firebaseapp.com",
  projectId: "notes-app-react-23d59",
  storageBucket: "notes-app-react-23d59.appspot.com",
  messagingSenderId: "871839372703",
  appId: "1:871839372703:web:deb5e311628d1d15a359aa"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")


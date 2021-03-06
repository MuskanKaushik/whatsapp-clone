// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = 
{
  apiKey: "AIzaSyCKNAJKupmrSFrhpgJaGNyiD7HE-POGpzE",
  authDomain: "whatsapp-clone-93570.firebaseapp.com",
  projectId: "whatsapp-clone-93570",
  storageBucket: "whatsapp-clone-93570.appspot.com",
  messagingSenderId: "1060707527214",
  appId: "1:1060707527214:web:5a8a7d3dcb9e2607028dbf",
  measurementId: "G-NDNGDXL9SW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); //responsible for authentication part
const provider = new firebase.auth.GoogleAuthProvider(); //responsible for google authentication

export {auth, provider};
export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, orderBy,
  query, where, serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
// import {
//   getAuth, createUserWithEmailAndPassword,
//   signInWithEmailAndPassword, signOut,
//   onAuthStateChanged
// } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyBNdwjfoG-he6dme2HgFQzDRz19p4TEh04",
  authDomain: "perinka-43aa1.firebaseapp.com",
  projectId: "perinka-43aa1",
  storageBucket: "perinka-43aa1.appspot.com",
  messagingSenderId: "497237107708",
  appId: "1:497237107708:web:5aff75fd2639259f7c8879",
  measurementId: "G-XWB9YMB5GM"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const auth = getAuth();//authentication
const colRef = collection(db, 'users');
 

// Function to save data to Firebase
const sendDataToFirebase = async (formData) => {
  console.log("hello", formData)
   
  addDoc(colRef, {

    name:formData.name,
    email:formData.email,
    createdAt: serverTimestamp(),
  })
  // Create the data object to be stored in the database
  

  // Save the data to the database under the 'formData' node with the generated key
  // return database.ref(`formData/${newKey}`).set(data);
};

export {  sendDataToFirebase };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, 
  addDoc,  
  serverTimestamp,
    updateDoc
} from 'firebase/firestore'
 
 
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
const colRef = collection(db, 'users');
 

// Function to save data to Firebase
const sendDataToFirebase = async (formData) => {
  
   
  addDoc(colRef, {

    name:formData.name,
    email:formData.email,
    createdAt: serverTimestamp(),
  })
};

export {  sendDataToFirebase };
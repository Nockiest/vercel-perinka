// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { addDoc,serverTimestamp, getFirestore, getDoc, doc, updateDoc, collection, onSnapshot , query} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNdwjfoG-he6dme2HgFQzDRz19p4TEh04",
  authDomain: "perinka-43aa1.firebaseapp.com",
  projectId: "perinka-43aa1",
  storageBucket: "perinka-43aa1.appspot.com",
  messagingSenderId: "497237107708",
  appId: "1:497237107708:web:5aff75fd2639259f7c8879",
  measurementId: "G-XWB9YMB5GM"
};

export type FanArticleValues = {
  text: string
  title: string
  coverImage: string
  author?: string
  id: string
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const colRef = collection(db, 'users');
export const fanArticleColRef = collection(db, 'fanArticles');
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(name, email, profilePic);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserAuthentication = async () => {
  const user = await new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });

  return user;
};



auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User has signed out');
  }
});

// export const fetchPosts = async () => {
//   const colRef = collection(db, 'BlogPosts');
//   const snapshot = await onSnapshot(colRef);
//   const postsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//   return postsData;
// };


// Function to save data to Firebase
export const sendDataToFirebase = async (formData) => {


  addDoc(colRef, {

    name:formData.name,
    email:formData.email,
    createdAt: serverTimestamp(),
  })
};

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz3tvx3XCB6NF4NoydyPCKNQ-v7-NgT7c",
  authDomain: "realtor-clonev1.firebaseapp.com",
  projectId: "realtor-clonev1",
  storageBucket: "realtor-clonev1.appspot.com",
  messagingSenderId: "530894248536",
  appId: "1:530894248536:web:49b7106908aa3f654d482d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

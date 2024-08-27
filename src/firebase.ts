// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBysGpBVZGWe_eHXRev3Hqzg-dOTUeK7s",
  authDomain: "house-hold-react.firebaseapp.com",
  projectId: "house-hold-react",
  storageBucket: "house-hold-react.appspot.com",
  messagingSenderId: "637491265127",
  appId: "1:637491265127:web:40a684f1d6bad220c09ec2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

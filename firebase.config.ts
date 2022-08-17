// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7q3hbOA79lRkiDJJCGRjj51KNpLByT6U",
    authDomain: "expert-goggles-9be08.firebaseapp.com",
    projectId: "expert-goggles-9be08",
    storageBucket: "expert-goggles-9be08.appspot.com",
    messagingSenderId: "150843428658",
    appId: "1:150843428658:web:82449fa617c0a0ac2e912b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getFirestore(app);

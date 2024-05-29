// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSicMhaqX77qINo8h_n4DoldB99MdcF_U',
  authDomain: 'house-marketplace-edf2c.firebaseapp.com',
  projectId: 'house-marketplace-edf2c',
  storageBucket: 'house-marketplace-edf2c.appspot.com',
  messagingSenderId: '218635462386',
  appId: '1:218635462386:web:c4003700822c2202de126b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

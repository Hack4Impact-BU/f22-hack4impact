// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgXbpNkQt7jJ1-V8_j9y4suxO3SZ3Udks',
  authDomain: 'react-firebase-email-log-cbf7b.firebaseapp.com',
  projectId: 'react-firebase-email-log-cbf7b',
  storageBucket: 'react-firebase-email-log-cbf7b.appspot.com',
  messagingSenderId: '83227227855',
  appId: '1:83227227855:web:62d718d11078e59c79a9ba',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {app};
export {auth};
export default db;

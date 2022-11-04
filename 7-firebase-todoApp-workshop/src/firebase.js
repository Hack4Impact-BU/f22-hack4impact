import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// copy from your own database config
const firebaseConfig = {
  apiKey: 'AIzaSyDv-OLBs-WI-6pdVt-f69k5vz6UCyBbpYk',
  authDomain: 'todo-app-13d2a.firebaseapp.com',
  projectId: 'todo-app-13d2a',
  storageBucket: 'todo-app-13d2a.appspot.com',
  messagingSenderId: '307477351978',
  appId: '1:307477351978:web:accc034d60e7b730163d53',
};

// initializing firebase + firestore (to create the database that you are going to use)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export db so you can use it in other files
export {db};

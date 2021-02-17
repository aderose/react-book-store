import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGa_XYfanItnPRipScoI2r3QHjGzvE46o',
  authDomain: 'book-store-e3c95.firebaseapp.com',
  projectId: 'book-store-e3c95',
  storageBucket: 'book-store-e3c95.appspot.com',
  messagingSenderId: '977209493664',
  appId: '1:977209493664:web:73d2cb646b2bea5e5521c5',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

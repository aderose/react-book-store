import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { books } from './books.json';

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

export const signInWithGoogle = async () => {
  const credentials = await auth.signInWithPopup(provider);
  firestore
    .collection('users')
    .doc(credentials.user.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        // create the user document
        firestore.collection('users').doc(credentials.user.uid).set({
          displayName: credentials.user.displayName,
          email: credentials.user.email,
          photoURL: credentials.user.photoURL,
        });

        // populate the user document with initial books
        books.forEach((book) => addBookToFirestore(book));
      }
    });
};

export const signOut = () => {
  auth.signOut();
};

export const addBookToFirestore = async (book) => {
  return await firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('books')
    .add({
      ...book,
      removed: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => docRef.id)
    .catch((e) => {
      console.error('Error writing new book to database', e);
    });
};

export const getBooksFromFirestore = async () => {
  return await firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('books')
    .where('removed', '==', false)
    .orderBy('createdAt', 'asc')
    .get()
    .then((snapshot) => {
      const books = [];
      snapshot.forEach((doc) => {
        const { title, author, price, isRead, isBought } = doc.data();
        books.push({
          id: doc.id,
          title,
          author,
          price,
          isRead,
          isBought,
        });
      });
      return books;
    });
};

export const updateBookPropertyInFirestore = (id, property, value) => {
  firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('books')
    .doc(id)
    .update({
      [property]: value,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((e) => console.error(`Error updating book with id: ${id}`, e));
};

export const updateBookInFirestore = ({
  id,
  author,
  title,
  price,
  isRead,
  isBought,
}) => {
  firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('books')
    .doc(id)
    .update({
      author,
      title,
      price,
      isRead,
      isBought,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((e) => console.error(`Error updating book with id: ${id}`, e));
};

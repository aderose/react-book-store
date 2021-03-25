import { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { initialBooks } from '../initialBooks.json';

const useFirebase = () => {
  const [userInitialised, setUserInitialised] = useState(false);

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGa_XYfanItnPRipScoI2r3QHjGzvE46o',
      authDomain: 'book-store-e3c95.firebaseapp.com',
      projectId: 'book-store-e3c95',
      storageBucket: 'book-store-e3c95.appspot.com',
      messagingSenderId: '977209493664',
      appId: '1:977209493664:web:73d2cb646b2bea5e5521c5',
    });
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const checkUserExistsInFirestore = async (uid) => {
    const doc = await firestore.collection('users').doc(uid).get();

    return doc.exists;
  };

  const signInWithGoogle = async () => {
    const credentials = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider(),
    );
    const userExists = await checkUserExistsInFirestore(credentials.user.uid);

    if (!userExists) {
      await firestore.collection('users').doc(credentials.user.uid).set({
        displayName: credentials.user.displayName,
        email: credentials.user.email,
        photoURL: credentials.user.photoURL,
      });

      // Add each book to firestore
      await Promise.all(initialBooks.map((book) => addBookToFirestore(book)));
    }

    setUserInitialised(true);
  };

  const updateUserInitialisation = async () => {
    const userExists = await checkUserExistsInFirestore(auth.currentUser.uid);
    if (userExists) setUserInitialised(true);
  };

  const signOut = () => auth.signOut();

  const addBookToFirestore = async (book) => {
    const docRef = await firestore
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
    return docRef.id;
  };

  const getBooksFromFirestore = async () => {
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

  const updateBookPropertyInFirestore = async (id, property, value) => {
    await firestore
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

  const updateBookInFirestore = async ({
    id,
    author,
    title,
    price,
    isRead,
    isBought,
  }) => {
    await firestore
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

  const removeBookFromFirestore = (id) => {
    firestore
      .collection('users')
      .doc(auth.currentUser.uid)
      .collection('books')
      .doc(id)
      .update({ removed: true })
      .catch((e) => console.error(`Error removing book with id: ${id}`, e));
  };

  return {
    auth,
    firestore,
    userInitialised,
    updateUserInitialisation,
    checkUserExistsInFirestore,
    signInWithGoogle,
    signOut,
    addBookToFirestore,
    getBooksFromFirestore,
    updateBookPropertyInFirestore,
    updateBookInFirestore,
    removeBookFromFirestore,
    setUserInitialised,
  };
};

export default useFirebase;

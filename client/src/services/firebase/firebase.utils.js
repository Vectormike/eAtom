import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB99qUdDKGmDe6iBoLsOgZL6CfvSlAhMy0',
  authDomain: 'eatom-f9c76.firebaseapp.com',
  databaseURL: 'https://eatom-f9c76.firebaseio.com',
  projectId: 'eatom-f9c76',
  storageBucket: '',
  messagingSenderId: '603306457560',
  appId: '1:603306457560:web:a27812315f6183de',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Store userid into firestore
export const createUserProfile = async (user, additionalData) => {
  if (!user) return;

  const userRef = await firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  // If user availability is false, create user
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    // .then(result => {
    //   const token = result.credential.accessToken;
    //   const user = result.user;
    // })
    .catch(error => {
      //   const errorCode = error.errorCode;
      //   const errorMessage = error.message;
      //   const email = error.email;
      //   const credential = error.credential;
      console.log(error);
    });

export default firebase;

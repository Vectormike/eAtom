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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });

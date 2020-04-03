import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ9YymTWWRBoyq42fxY2dsMhIhgcKAHRc",
    authDomain: "crwn-db-84765.firebaseapp.com",
    databaseURL: "https://crwn-db-84765.firebaseio.com",
    projectId: "crwn-db-84765",
    storageBucket: "crwn-db-84765.appspot.com",
    messagingSenderId: "836268003706",
    appId: "1:836268003706:web:1e5264e8c23b9afe3ac6c3",
    measurementId: "G-Y3VJ87XS2Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
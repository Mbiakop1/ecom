import firebase from "firebase/app";

import "firebase/firestore";
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyCNXwKPjoMy7ScTI3g6luCXa0NXQSnwXIM",
    authDomain: "crwn-db-d667c.firebaseapp.com",
    projectId: "crwn-db-d667c",
    storageBucket: "crwn-db-d667c.appspot.com",
    messagingSenderId: "828579579182",
    appId: "1:828579579182:web:5d1fe546bd5e4e5ab7e6bf"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
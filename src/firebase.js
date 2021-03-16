// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAZhs8Uiz6Qd2GhGc9t0ppUVLVfyOcT2qk",
    authDomain: "snapshot-aa7dc.firebaseapp.com",
    projectId: "snapshot-aa7dc",
    storageBucket: "snapshot-aa7dc.appspot.com",
    messagingSenderId: "755387272225",
    appId: "1:755387272225:web:81ef3a1c15c1556bd72760",
    measurementId: "G-7GYSSGNH6B"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider()

export default db;
export {auth,storage,provider};
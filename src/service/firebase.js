import firebaseConfig from './firebaseConfig.js'
import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/storage";


firebase.initializeApp(firebaseConfig);

export default firebase;
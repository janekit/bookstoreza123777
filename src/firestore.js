import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAROZagamPFy8F_3A1ezyXL0heWvavdikU",
    authDomain: "book-store-4ab64.firebaseapp.com",
    databaseURL: "https://book-store-4ab64.firebaseio.com",
    projectId: "book-store-4ab64",
    storageBucket: "book-store-4ab64.appspot.com",
    messagingSenderId: "910842346537"
  };
  

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
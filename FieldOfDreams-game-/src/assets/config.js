import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

let Config = {
  apiKey: "AIzaSyBvNjDynKzkhuKmdYTSrSCcu-iwu4Wg4SM",
  authDomain: "field-of-dreams-3b1c5.firebaseapp.com",
  databaseURL: "https://field-of-dreams-3b1c5.firebaseio.com",
  projectId: "field-of-dreams-3b1c5",
  storageBucket: "field-of-dreams-3b1c5.appspot.com",
  messagingSenderId: "784334289049",
  appId: "1:784334289049:web:027b4d6bcf7c44f8e4e008",
  measurementId: "G-WDFM9KCM95"
};

const base = firebase.initializeApp(Config);

export const storage = firebase.storage();
export const store = firebase.firestore();
export default base;

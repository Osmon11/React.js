import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

let Config = {
  apiKey: 'AIzaSyDkvJ1kyX3gQcCIXel6h7OfCPOeDg_sRSw',
  authDomain: 'fashion-shop-a8655.firebaseapp.com',
  databaseURL: 'https://fashion-shop-a8655.firebaseio.com',
  projectId: 'fashion-shop-a8655',
  storageBucket: 'fashion-shop-a8655.appspot.com',
  messagingSenderId: '802578240478',
  appId: '1:802578240478:web:f6ee30a761319e65ef434f',
  measurementId: 'G-NE34VDJ2LZ',
};

const base = firebase.initializeApp(Config);

export const storage = firebase.storage();
export const store = firebase.firestore();
export default base;

import firebase from 'firebase/app'

import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBFILfuDgx8-OLABv4zxWkCHt1QjnFn0fg",
  authDomain: "woosuktime.firebaseapp.com",
  databaseURL: "https://woosuktime-default-rtdb.firebaseio.com",
  projectId: "woosuktime",
  storageBucket: "woosuktime.appspot.com",
  messagingSenderId: "323571326599",
  appId: "1:323571326599:web:5866f371cdcf376a202222",
  measurementId: "G-8NXT8V5RSC"
};

firebase.initializeApp(config);

const db = firebase.firestore();


export default db;
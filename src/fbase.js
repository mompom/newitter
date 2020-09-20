import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  // apiKey: `${process.env.REACT_APP_API_KEY}`,
  // authDomain: process.env.RECAT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // mesaurementId: process.env.REACT_APP_MESAUREMENT_ID
  apiKey: "AIzaSyBRGwahv7UuDoGZ4qVPpo3rhE5ULZ9ghoI",
  authDomain: "nwitter-5209c.firebaseapp.com",
  databaseURL: "https://nwitter-5209c.firebaseio.com",
  projectId: "nwitter-5209c",
  storageBucket: "nwitter-5209c.appspot.com",
  messagingSenderId: "861637955964",
  appId: "1:861637955964:web:682110d3523371863654f9",
  measurementId: "G-N2FFRVNDNJ",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
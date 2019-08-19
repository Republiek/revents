import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnMw2U6uYX6IDMrlK7lQdP4qPSaixwm7M",
  authDomain: "revents-33972.firebaseapp.com",
  databaseURL: "https://revents-33972.firebaseio.com",
  projectId: "revents-33972",
  storageBucket: "",
  messagingSenderId: "446805036924",
  appId: "1:446805036924:web:a507902cc07d73d7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

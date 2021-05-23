import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcK-IRNfGYR37i_c8izXm2yekMegSqOSg",
  authDomain: "dance-chives.firebaseapp.com",
  projectId: "dance-chives",
  storageBucket: "dance-chives.appspot.com",
  messagingSenderId: "649724317145",
  appId: "1:649724317145:web:52f24e40b99dc345c21dc8",
  measurementId: "G-5HCQP4SBZL",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;

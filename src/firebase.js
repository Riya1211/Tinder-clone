import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBS1OPNTrpDJU0arSyWMcKu3WZvLK8PzXQ",
  authDomain: "tinder-weekend-clone-1f406.firebaseapp.com",
  projectId: "tinder-weekend-clone-1f406",
  storageBucket: "tinder-weekend-clone-1f406.appspot.com",
  messagingSenderId: "105623726200",
  appId: "1:105623726200:web:9e43fec349b29da09be58d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db


import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyCzXZhsXZSNtR6qsNHallujYNZGR2gT9eg",
//   authDomain: "react-app-udemy-df16b.firebaseapp.com",
//   databaseURL: "https://react-app-udemy-df16b.firebaseio.com",
//   projectId: "react-app-udemy-df16b",
//   storageBucket: "react-app-udemy-df16b.appspot.com",
//   messagingSenderId: "134955528040",
//   appId: "1:134955528040:web:3bca20d38c67bef50c70dd"
// };

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyDh6Zk-xooQKQOC9Lggr200L2FhsF2v9c8",
//   authDomain: "react-app-udemy-test.firebaseapp.com",
//   databaseURL: "https://react-app-udemy-test.firebaseio.com",
//   projectId: "react-app-udemy-test",
//   storageBucket: "react-app-udemy-test.appspot.com",
//   messagingSenderId: "323803106828",
//   appId: "1:323803106828:web:e2aec78f2c09d6386e6829"
// };

// if(process.env.NODE_ENV === 'test'){
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase

const db= firebase.firestore();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
};
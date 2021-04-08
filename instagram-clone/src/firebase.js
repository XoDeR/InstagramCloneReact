import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBowSy6vrf4sd56cwuwa5cS0QWlKVgqqdg",
  authDomain: "instagram-clone-react-0001.firebaseapp.com",
  projectId: "instagram-clone-react-0001",
  storageBucket: "instagram-clone-react-0001.appspot.com",
  messagingSenderId: "458883054865",
  appId: "1:458883054865:web:96af5b547a007121be60b0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

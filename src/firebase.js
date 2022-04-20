import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzylNyoybKU3LXEHIGaOGV1kI66BLBN4s",
  authDomain: "whatsapp-clone-cca53.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cca53.firebaseio.com",
  projectId: "whatsapp-clone-cca53",
  storageBucket: "whatsapp-clone-cca53.appspot.com",
  messagingSenderId: "1062645880945",
  appId: "1:1062645880945:web:ba4bcd05eda03fa47563d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

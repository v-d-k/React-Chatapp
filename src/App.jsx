import "./App.css";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB3xebR_aDtCqehjt60X8xANulYgqc6ywQ",
  authDomain: "stalwart-way-356207.firebaseapp.com",
  projectId: "stalwart-way-356207",
  storageBucket: "stalwart-way-356207.appspot.com",
  messagingSenderId: "352167268223",
  appId: "1:352167268223:web:76a41cc5a49171d59ed44a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider);
  return auth.currentUser;
};

function App() {
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return <section>{user ? <ChatRoom /> : <SignIn />}</section>;
}

export default App;

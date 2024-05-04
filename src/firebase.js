import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBreT4M54_ijXU8YiOMJtRuTKklEaQFX6A",
  authDomain: "email-contect.firebaseapp.com",
  projectId: "email-contect",
  storageBucket: "email-contect.appspot.com",
  messagingSenderId: "243416475048",
  appId: "1:243416475048:web:c1d714660bb77e3ae5699d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

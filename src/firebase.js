import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { USER_NOT_FOUND, PASSWORD_WRONG } from "./constants";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const login = async (email, password) => {
    try{
        return await signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
        if(err.code==='auth/user-not-found') {
            return USER_NOT_FOUND;
        }
        if(err.code==='auth/wrong-password') {
            return PASSWORD_WRONG;
        }
        return err.code
    }
}

export const logout = async ( ) => {
//   try {
//     await signOut(auth)
//   } catch (err) {
//     toast.error(err.code)
//   }
}


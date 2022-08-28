import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFq5q9xstYzZN8aD43hFHEonZUfBrK3_0",
  authDomain: "comeon-fa149.firebaseapp.com",
  projectId: "comeon-fa149",
  storageBucket: "comeon-fa149.appspot.com",
  messagingSenderId: "1008758418414",
  appId: "1:1008758418414:web:963105a53ac88fc3217cff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const login = async (email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user)
    } catch(err) {
        //toast.error(err.code)
        console.log(err.code)
    }
}

export const logout = async ( ) => {
//   try {
//     await signOut(auth)
//   } catch (err) {
//     toast.error(err.code)
//   }
}


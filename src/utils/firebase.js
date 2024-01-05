// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlYBotvDwaiyxKp3m1pzi6hCtoQyhjuo",
  authDomain: "netflixgpt-203f9.firebaseapp.com",
  projectId: "netflixgpt-203f9",
  storageBucket: "netflixgpt-203f9.appspot.com",
  messagingSenderId: "930371717208",
  appId: "1:930371717208:web:a317d43a63ebf6efcce22d",
  measurementId: "G-DGMED6SVCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
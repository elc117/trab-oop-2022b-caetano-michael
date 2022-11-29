// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiNPwEf58cCyPNxlFl1WuS88QpNf0en9Y",
  authDomain: "teste-d03c6.firebaseapp.com",
  projectId: "teste-d03c6",
  storageBucket: "teste-d03c6.appspot.com",
  messagingSenderId: "534268655967",
  appId: "1:534268655967:web:5022331b2df952d353deea",
  databaseURL: "https://teste-d03c6-default-rtdb.firebaseio.com/",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

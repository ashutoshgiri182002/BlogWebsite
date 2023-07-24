import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnLeP3_2Tm1KCLf6Ga97v2LkQ-QY50Z2o",
  authDomain: "fir-tut-83384.firebaseapp.com",
  projectId: "fir-tut-83384",
  storageBucket: "fir-tut-83384.appspot.com",
  messagingSenderId: "506911330175",
  appId: "1:506911330175:web:63ecb8a07742f769abd44a",
  measurementId: "G-74Y2RHB2V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



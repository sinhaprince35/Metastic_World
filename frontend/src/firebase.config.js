import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgyIrJ12B_9aMBE-emYEj2r25FR_z5VRA",
  authDomain: "mern-stack-project-805b1.firebaseapp.com",
  projectId: "mern-stack-project-805b1",
  storageBucket: "mern-stack-project-805b1.appspot.com",
  messagingSenderId: "458636270609",
  appId: "1:458636270609:web:dccf3887978abacd8f65b0",
  measurementId: "G-S2EDZ1GCRP"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
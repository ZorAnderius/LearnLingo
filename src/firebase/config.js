import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgp4wz-_pIuN9mP0BBoViJMJQK8UiPYXs",
  authDomain: "learn-lingo-school.firebaseapp.com",
  projectId: "learn-lingo-school",
  storageBucket: "learn-lingo-school.firebasestorage.app",
  messagingSenderId: "1082053106173",
  appId: "1:1082053106173:web:c29531ba45fb4537122194",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize auth
export const auth = getAuth(app);

// Get data from Database
export const database = getDatabase(app);

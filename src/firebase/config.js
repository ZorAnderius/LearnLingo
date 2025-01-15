import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { envConfig } from "../helpers/env_config.js";
import { ENV_VAR } from "../helpers/constants/ENV_VAR.js";

const firebaseConfig = {
  apiKey: envConfig(ENV_VAR.FIREBASE_API_KEY),
  authDomain: envConfig(ENV_VAR.FIREBASE_AUTH_DOMIAN),
  projectId: envConfig(ENV_VAR.FIREBASE_PROJECT_ID),
  storageBucket: envConfig(ENV_VAR.FIREBASE_STORAGE_BUCKET),
  messagingSenderId: envConfig(ENV_VAR.FIREBASE_MESSAGING_SENDER_ID),
  appId: envConfig(ENV_VAR.FIREBASE_APP_ID),
  databaseURL: envConfig(ENV_VAR.FIREBASE_DATABASE_URL),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize auth
export const auth = getAuth(app);

// Get data from Database
export const database = getDatabase(app);

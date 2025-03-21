// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const config = useRuntimeConfig();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {

  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessageSenderId,
  appId: config.firebaseAppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

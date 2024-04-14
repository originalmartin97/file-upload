import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGyP3teblwQoTH8aD8os34tixhtBgGUJg",
  authDomain: "test-4935c.firebaseapp.com",
  projectId: "test-4935c",
  storageBucket: "test-4935c.appspot.com",
  messagingSenderId: "147830851814",
  appId: "1:147830851814:web:d0fc329790bc17764b9327",
  measurementId: "G-KPDYLMNND9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
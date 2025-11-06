// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAs2ifV2q3UNNKUn6UNxmzcZmmodIJMtW8",
  authDomain: "av-online-market.firebaseapp.com",
  projectId: "av-online-market",
  storageBucket: "av-online-market.firebasestorage.app",
  messagingSenderId: "676842301885",
  appId: "1:676842301885:web:ee61d6f75de258bc0d4ad4",
  measurementId: "G-3DCP5HGLEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // 👈 Forces account chooser
});

// Export what your app needs
export { auth, provider };
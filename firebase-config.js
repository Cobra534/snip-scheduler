// ---- Paste your Firebase web app config here ----
// Get this from: Firebase console → Project settings → General → Your apps → Web app → Config
// (Create a free project at https://console.firebase.google.com if you don't have one,
//  then enable Firestore Database from the left sidebar, in "test mode" to start.)
const firebaseConfig = {
  apiKey: "AIzaSyC0JJlHisElfbql76CYb_h4lyP0ejFnQz4",
  authDomain: "snip-160f9.firebaseapp.com",
  projectId: "snip-160f9",
  storageBucket: "snip-160f9.firebasestorage.app",
  messagingSenderId: "381793154273",
  appId: "1:381793154273:web:63d5d23868e0b3c3eab3a0"
};
// ---------------------------------------------------

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

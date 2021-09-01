import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAjwPoqC7isifdqBqe8RXlWyPXGhOh44b8",
  authDomain: "login-32cd0.firebaseapp.com",
  projectId: "login-32cd0",
  storageBucket: "login-32cd0.appspot.com",
  messagingSenderId: "838825018344",
  appId: "1:838825018344:web:7212dde1b8debbd77a1a5d",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

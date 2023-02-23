import { initializeApp } from "firebase/app";
import "firebase/compat/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZnH4YPRLjKpFF96hliwW8t-xHlPSekC8",
    authDomain: "prueba-login-isagonzalez.firebaseapp.com",
    projectId: "prueba-login-isagonzalez",
    storageBucket: "prueba-login-isagonzalez.appspot.com",
    messagingSenderId: "426204513378",
    appId: "1:426204513378:web:14044ee24a96141a37fd3b"
});

export default firebaseApp
import {initializeApp} from "firebase/app";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyD-ZpG1pENynB1EpPJ8-FV5xzylhpNW4ZE",
    authDomain: "agenda-isagonzalez.firebaseapp.com",
    projectId: "agenda-isagonzalez",
    storageBucket: "agenda-isagonzalez.appspot.com",
    messagingSenderId: "889826307097",
    appId: "1:889826307097:web:dee3a2f3e98da674398e88"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

export const auth = firebaseApp.auth();

export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

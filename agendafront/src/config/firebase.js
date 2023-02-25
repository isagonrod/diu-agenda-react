import {firestore, initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZnH4YPRLjKpFF96hliwW8t-xHlPSekC8",
    authDomain: "prueba-login-isagonzalez.firebaseapp.com",
    projectId: "prueba-login-isagonzalez",
    storageBucket: "prueba-login-isagonzalez.appspot.com",
    messagingSenderId: "426204513378",
    appId: "1:426204513378:web:14044ee24a96141a37fd3b"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

export const auth = firebaseApp.auth();
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

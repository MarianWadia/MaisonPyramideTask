const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin");
const { getFirestore, collection, addDoc } = require("firebase-admin/firestore");

initializeApp();

exports.createUserDocument = functions.auth.user().onCreate(async (userCredentials) => {
    const user = userCredentials;

    // Create a new user document in Firestore
    const db = getFirestore();
    const userRef = collection(db, "users");

    try {
        await addDoc(userRef, {
            name: user.displayName,
            email: user.email,
            createdAt: user.metadata.creationTime
        });
        return null;
    } catch (error) {
        console.error("Error creating user document:", error);
        return null;
    }
});

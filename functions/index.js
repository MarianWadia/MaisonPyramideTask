const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const { getFirestore, collection, addDoc } = require("firebase-admin/firestore");


const serviceAccount = require("./maisonpyramide-71150-firebase-adminsdk-3rcb2-716bf7595a.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.createUserDocument = functions.auth.user().onCreate(async (userCredentials) => {
    const user = userCredentials.user;
  
    // Create a new user document in Firestore
    const db = admin.firestore(); 
    const userRef = db.collection("users"); 
  
    try {
      await userRef.add({
        name: user.displayName,
        email: user.email,
        createdAt: user.metadata.creationTime,
      });
      return null;
    } catch (error) {
      console.error("Error creating user document:", error);
      return null;
    }
  });
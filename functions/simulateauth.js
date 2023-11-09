// simulateAuthEvent.js

const firebase = require("firebase");
const admin = require("firebase-admin");

const serviceAccount = require("./maisonpyramide-71150-firebase-adminsdk-3rcb2-716bf7595a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const config = {
    apiKey: "AIzaSyAYCNkDJ4-R4VUfJH9wt1mg5qOO58wRLyQ",
    authDomain: "maisonpyramide-71150.firebaseapp.com",
    projectId: "maisonpyramide-71150",
    storageBucket: "maisonpyramide-71150.appspot.com",
    messagingSenderId: "284357631687",
    appId: "1:284357631687:web:d2addf6209aaa44c3168e2"
};

firebase.initializeApp(config);

const simulateUserCreation = async () => {
  try {
    // Simulate a user creation event
    const userCredentials = await firebase.auth().createUserWithEmailAndPassword(
      "john.doe@example.com",
      "password"
    );

    console.log("User creation simulated successfully.");
  } catch (error) {
    console.error("Error simulating user creation:", error);
  }
};

simulateUserCreation();

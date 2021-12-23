import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: "diyetapp-c2d87.firebaseapp.com",
	projectId: "diyetapp-c2d87",
	storageBucket: "diyetapp-c2d87.appspot.com",
	messagingSenderId: "26519687867",
	appId: "1:26519687867:web:d42c6dbd53c65e0b1e0f9e",
	measurementId: "${config.measurementId}",
};
let app;

if (firebase.apps.length === 0) {
	const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: "dietapp-4426f.firebaseapp.com",
	projectId: "dietapp-4426f",
	storageBucket: "dietapp-4426f.appspot.com",
	messagingSenderId: "34378773611",
	appId: "1:34378773611:web:0733d037592f077dab6d2e",
	measurementId: "G-1Y4F9T4R23",
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

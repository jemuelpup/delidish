import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import Store from './Store';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Header from './Header/Header'
import Footer from './Footer/Footer';

import {
	BrowserRouter as Router,
} from "react-router-dom";


firebase.initializeApp({
	apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
	authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
	databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
	projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
	measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}` 
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn(){
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider);
	}
	return (
		<button onClick={signInWithGoogle}>Sign in with google</button>
	)
}

function SignOut(){
	return auth.currentUser && (
		<button onClick={()=>auth.signOut()}>Sign Out</button>
	)
}

export default function App() {
	let [user] = useAuthState(auth);
	return (
		<Router>
			<Provider store={Store}>
				<section>
					{user ? <SignOut />: <SignIn />}
				</section>
				<Header />
				<Root />
				<Footer />
			</Provider>
		</Router>
	)
}
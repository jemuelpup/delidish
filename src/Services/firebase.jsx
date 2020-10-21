const { ReactComponent } = require("*.svg");

import React, {Component} from 'react';
import * from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCz6tb4EPOwWNvJL2uXLJTUq-qEx_ICIxw",
  authDomain: "delidish-1d77d.firebaseapp.com",
  databaseURL: "https://delidish-1d77d.firebaseio.com",
  projectId: "delidish-1d77d",
  storageBucket: "delidish-1d77d.appspot.com",
  messagingSenderId: "644208128180",
  appId: "1:644208128180:web:e582c3416b5c5ae05b27e1",
  measurementId: "G-LJZ6STELNZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
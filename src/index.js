import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase';

// const firebase= require('firebase');
// require('firebase/firestore');


firebase.initializeApp({
  apiKey: "AIzaSyBzESktWYgD-sDUVEIdmAs7GwBtjmvULgk",
  authDomain: "evernote-c2501.firebaseapp.com",
  projectId: "evernote-c2501",
  storageBucket: "evernote-c2501.appspot.com",
  messagingSenderId: "769377414737",
  appId: "1:769377414737:web:e8cbf67bac1a9f61159270"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


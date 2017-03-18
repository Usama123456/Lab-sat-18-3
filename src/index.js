import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase';




<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtuQFXJrgKk5liNSat9KtxWnWiUc0WLaA",
    authDomain: "popping-fire-491.firebaseapp.com",
    databaseURL: "https://popping-fire-491.firebaseio.com",
    storageBucket: "popping-fire-491.appspot.com",
    messagingSenderId: "103211868921"
  };
  firebase.initializeApp(config);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

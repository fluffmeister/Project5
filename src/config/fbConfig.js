 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDn8pZvWnIyphR_E9V4w9daVghdzb1envo",
    authDomain: "project5messageboard.firebaseapp.com",
    databaseURL: "https://project5messageboard.firebaseio.com",
    projectId: "project5messageboard",
    storageBucket: "project5messageboard.appspot.com",
    messagingSenderId: "205347778508",
    appId: "1:205347778508:web:17c282b58ed5030e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  firebase.firestore().settings({timestampsInSnapshots:true});


  export default firebase;
  
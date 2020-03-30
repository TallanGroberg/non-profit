import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyB42vEvdOYkTxk7otojg-hv1VxWoOKfiM8",
  authDomain: "tallans-imageupload-tutorial.firebaseapp.com",
  databaseURL: "https://tallans-imageupload-tutorial.firebaseio.com",
  projectId: "tallans-imageupload-tutorial",
  storageBucket: "tallans-imageupload-tutorial.appspot.com",
  messagingSenderId: "585496860083",
  appId: "1:585496860083:web:6a06f727b0302bea1867c6",
  measurementId: "G-K56ZGTLDJ6"
};
  //you will have to replace the keys

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 const storage = firebase.storage()

 export  {
   storage, firebase as default
 }
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDT2lkYRcYFd6ZruHgIftAikR8Wg_NfLHM",
    authDomain: "nesmatalbustan-ac52c.firebaseapp.com",
    databaseURL: "https://nesmatalbustan-ac52c.firebaseio.com",
    projectId: "nesmatalbustan-ac52c",
    storageBucket: "",
    messagingSenderId: "832281960880",
    appId: "1:832281960880:web:35af3ffb6ba333e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
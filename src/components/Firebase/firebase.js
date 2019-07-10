import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
 // Your web app's Firebase configuration
 console.log('FIREBASE', env.REACT_APP_API_KEY)

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
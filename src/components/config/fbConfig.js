import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCMsTSS8CWsczxIPIT7JMk1YiNgCnv9XRU",
    authDomain: "react-crs.firebaseapp.com",
    databaseURL: "https://react-crs.firebaseio.com",
    projectId: "react-crs",
    storageBucket: "react-crs.appspot.com",
    messagingSenderId: "1081138009514",
    appId: "1:1081138009514:web:9a266c1735aa19517bc7d3"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true });

  export default firebase;
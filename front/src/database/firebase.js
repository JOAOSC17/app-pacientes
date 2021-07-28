import firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.AUTH_DOMAIN_FIREBASE,
    databaseURL: process.env.DATABASE_URL_FIREBASE,
    projectId: process.env.PROJECT_ID_FIREBASE,
    storageBucket: process.env.STORAGE_BUCKET_FIREBASE,
    messagingSenderId: process.env.MENSSAGING_SENDER_ID_FIREBASE,
    appId: process.env.API_ID_FIREBASE
  };
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
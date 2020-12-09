import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB-vDjlWA1gP5t_JGVUMxxTsz7JufDLxzU",
    authDomain: "rn-rep.firebaseapp.com",
    databaseURL: "https://rn-rep.firebaseio.com",
    projectId: "rn-rep",
    storageBucket: "rn-rep.appspot.com",
    messagingSenderId: "1648489531",
    appId: "1:1648489531:web:9c98bf7ff37303f71e981e"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase 

// import firebase from 'firebase'
// import {
//     API_KEY,
//     AUTH_DOMAIN,
//     DATABASE_URL,
//     PROJECT_ID,
//     MESSAGE_SENDER_ID,
//     APP_ID
// } from 'react-native-dotenv'

// const firebaseConfig = {
//     apiKey: API_KEY,
//     authDomain: AUTH_DOMAIN,
//     databaseURL: DATABASE_URL,
//     projectId: PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: MESSAGE_SENDER_ID,
//     appId: APP_ID
// }

// // Initialize Firebase
// let Firebase = firebase.initializeApp(firebaseConfig)

// export default Firebase

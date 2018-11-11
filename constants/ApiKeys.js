import firebase from 'firebase';

let FirebaseConfig = {
    apiKey: "AIzaSyDKzBHmnJejK2GcXcwlKwcVq8gzycax8yM",
    authDomain: "coral-app-a09d1.firebaseapp.com",
    databaseURL: "https://coral-app-a09d1.firebaseio.com",
    projectId: "coral-app-a09d1",
    storageBucket: "coral-app-a09d1.appspot.com",
    messagingSenderId: "483050320782"
};

let app = firebase.initializeApp(FirebaseConfig);
export const db = app.database();

// export default {
//     FirebaseConfig: {
//         apiKey: "AIzaSyDKzBHmnJejK2GcXcwlKwcVq8gzycax8yM",
//         authDomain: "coral-app-a09d1.firebaseapp.com",
//         databaseURL: "https://coral-app-a09d1.firebaseio.com",
//         projectId: "coral-app-a09d1",
//         storageBucket: "coral-app-a09d1.appspot.com",
//         messagingSenderId: "483050320782"
//     },
// }
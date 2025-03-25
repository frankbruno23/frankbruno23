// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//<script>src="https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js"</script>
//<script>src="https://www.gstatic.com/firebase/9.9.1/firebase-auth.js"</script>
//<script>src="https://www.gstatic.com/firebase/9.9.1/firebase-firestore.js"</script>
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoE88oxxBf5hzA0yK0yuJZ2pdJZwmaOY4",
  authDomain: "main-567ee.firebaseapp.com",
  projectId: "main-567ee",
  storageBucket: "main-567ee.appspot.com",
  messagingSenderId: "263493427721",
  appId: "1:263493427721:web:31aa153337e153bf3e4ed8",
  measurementId: "G-BT883ZKC1J",
  databaseURL: "https://main-567ee-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

/*var firebaseRef = firebase.database().ref('emails');
document.querySelector('#send').addEventListener('click',()=>{
  const email=document.getElementById('email').value;
  firebaseRef.push(email);
});*/
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
 set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  })
  .then(() => {
    // Data saved successfully!
  })
  .catch((error) => {
    // The write failed...
  });
}
// Import necessary Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration object (make sure this matches your Firebase settings)
const firebaseConfig = {
  apiKey: "AIzaSyBuFEepNQUBHEdTleti6N6Zbx4cr_WeQ0Y",
  authDomain: "hearthnet-790dd.firebaseapp.com",
  projectId: "hearthnet-790dd",
  storageBucket: "hearthnet-790dd.appspot.com",
  messagingSenderId: "1032398706079",
  appId: "1:1032398706079:web:d40b69e860efc844da59aa",
  measurementId: "G-5H9V91G6XK"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the auth instance
const auth = getAuth(app);

// Get the logout button from the DOM
const logoutBtn = document.getElementById('logoutBtn');

// Add click event listener to the logout button
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Clear the user's session in localStorage
    localStorage.removeItem('loggedInUserId');
    
    // Redirect to the login page (index.html)
    window.location.href = 'index.html';
  }).catch((error) => {
    // Show error message in case of failure
    alert("Error logging out: " + error.message);
  });
});

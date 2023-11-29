import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOFlbaDhSc8dKH7Nk_gBCFfhiitNIyjc",
  authDomain: "conso-1b00b.firebaseapp.com",
  databaseURL:
    "https://conso-1b00b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "conso-1b00b",
  storageBucket: "conso-1b00b.appspot.com",
  messagingSenderId: "591889917053",
  appId: "1:591889917053:web:62560f3f9d4d5125987d14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get a reference to the counter in the Firebase Realtime Database
const counterRef = ref(database, "formCounter");

// Function to format the number with leading zeros
function formatNumberWithZeros(number, length) {
  return number.toString().padStart(length, "0");
}

// Update the counter in the Firebase Realtime Database
onValue(counterRef, (snapshot) => {
  const currentCounter = snapshot.val() || 0;
  const formattedCounter = formatNumberWithZeros(currentCounter, 4);

  // Update the content of the div with class "formCounter"
  document.querySelector(".formCounter").innerText = formattedCounter;
});

// Form submission
document
  .getElementById("containerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Update the counter in the Firebase Realtime Database
    get(counterRef).then((snapshot) => {
      const currentCounter = snapshot.val() || 0;
      const newCounter = currentCounter + 1;

      // Update the counter in the database
      set(counterRef, newCounter);
    });

    // Your existing hideForm function logic here
    var containerForm = document.getElementById("containerForm");
    if (containerForm) {
      containerForm.style.display = "none";
    } else {
      console.error("Element with ID 'containerForm' not found.");
    }

    $(".steptwo").hide();
    $(".stepthree").show();
  });

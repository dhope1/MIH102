import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCZiK1sRtB1w17wINFhuwBJA9AistLJME",
  authDomain: "myhealthid-8413d.firebaseapp.com",
  projectId: "myhealthid-8413d",
  storageBucket: "myhealthid-8413d.firebasestorage.app",
  messagingSenderId: "193887559938",
  appId: "1:193887559938:web:c1d66fd335e779ce50e21b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const nationalId = document.getElementById("nationalId").value;
  const phone = document.getElementById("phone").value;
  const allergies = document.getElementById("allergies").value;
  const bloodGroup = document.getElementById("bloodGroup").value;

  try {
    const docRef = await addDoc(collection(db, "patients"), {
      name,
      nationalId,
      phone,
      allergies,
      bloodGroup
    });

    alert("Patient registered successfully with ID: " + docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

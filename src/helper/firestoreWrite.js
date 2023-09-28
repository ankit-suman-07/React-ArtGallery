import { db } from "./firebase"; // Import your Firebase configuration
import { getFirestore, setDoc, doc } from "firebase/firestore";

const spendsDoc = doc(db, 'favcollect', 'favdoc');

export function writeExpenses() {
    // Create an array of objects for each entry
    const docData = {
        ID: ["ball", "qwerty", "apple"],
    };

    // Use setDoc to write the array of objects to Firestore
    setDoc(spendsDoc, { docData })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

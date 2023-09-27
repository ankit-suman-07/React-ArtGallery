import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const colRef = collection(db, 'favourites');

export const fetchData = () => {
    getDocs(colRef)
        .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                // Access each document's data using doc.data()
                data.push(doc.data());
            });
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../helper/firebase';
import { fetchData } from '../helper/firestore';
import { writeExpenses } from "../helper/firestoreWrite";

export const SignUp = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    const googleSignUp = () => {
        signInWithPopup(auth, provider).then((data) => {
            setLoggedIn(true);
            setUser(data.user.email);
            fetchData();
            // window.location.href = '/mainpage';

        })
    }

    const signOut = () => {
        writeExpenses();
        auth.signOut();
        console.log("Logged Out");
        setLoggedIn(false);
    }
    return (
        <div>
            <button onClick={googleSignUp} >Sign In</button>
            {
                loggedIn ? <div>{user}</div> : <div>No User</div>
            }
            <button onClick={signOut} >Sign Out</button>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../helper/firebase';
import { fetchData } from '../helper/firestore';
import { writeExpenses } from "../helper/firestoreWrite";
import { useData } from '../helper/UserContext';
import { UserProvider } from "../helper/UserContext";

import "../css/SignUp.css";

import PhoneBG from "../assets/background-phone.jpg";
import CompBG from "../assets/background-pc.jpg";
import GoogleLogo from "../assets/google.png";

export const SignUp = () => {
    const [loggedIn_, setLoggedIn_] = useState(false);
    const [userMail_, setUserMail_] = useState("");
    const [userPhoto_, setUserPhoto_] = useState("");
    const [username_, setUserName_] = useState("");

    const { loggedIn, setLoggedIn, userMail, setUserMail, userPhoto, setUserPhoto, username, setUserName, updateUser } = useData();

    const googleSignUp = () => {
        signInWithRedirect(auth, provider)
            .then((data) => {
                console.log("-------");
                console.log(data);
                console.log("Logged In");

                // Update the local state variables
                const newLoggedIn = true;
                const newUserMail = data.user.email;
                const newUserPhoto = data.user.photoURL;
                const newUsername = data.user.displayName;

                // Set the context state variables
                setLoggedIn(newLoggedIn);
                setUserMail(newUserMail);
                setUserPhoto(newUserPhoto);
                setUserName(newUsername);
                updateUser({ newLoggedIn, newUserMail, newUserPhoto, newUsername });

                setLoggedIn_(newLoggedIn);

                // Redirect after the state updates
                // window.location.href = '/home';
            }).then(() => {
                console.log(loggedIn);

            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });

    };

    useEffect(() => {
        console.log(loggedIn);
        console.log(loggedIn_);
    }, []);

    return (
        <div className='signup-page' >
            <UserProvider />
            <div className='banner' >
                <div className="text-box">
                    Welcome to <span className="text-design one">Artify</span> - Your Gateway to <span
                        className="text-design two">Extraordinary</span> Artistry!
                    Discover curated, <span className="text-design three">Awe-inspiring</span> artworks chosen just for you.
                    <span className="text-design four">Immerse</span> yourself in a world
                    of
                    <span className="text-design five">Limitless</span> artistic
                    expression. <span className="text-design six">Explore</span>, appreciate, and adorn your life with the
                    <span className="text-design seven">Beauty</span> of fine art.
                    SignUp below and enjoy!!!
                </div>
            </div>
            <div className='backgroung-img' >
                <img src={CompBG} />
            </div>
            <div className='btn-div' >
                <button
                    onClick={googleSignUp}
                    className='signup-btn'
                >
                    <img src={GoogleLogo} /> Sign In with Google
                </button>
            </div>

            {/* <button onClick={signOut} >Sign Out</button> */}
        </div>
    )
}
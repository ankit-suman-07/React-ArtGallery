import React, { useState, useEffect } from 'react';
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../helper/firebase';
import { fetchData } from '../helper/firestore';
import { writeExpenses } from "../helper/firestoreWrite";
import { useData } from '../helper/UserContext';

import "../css/SignUp.css";

import PhoneBG from "../assets/background-phone.jpg";
import CompBG from "../assets/background-pc.jpg";
import GoogleLogo from "../assets/google.png";

export const SignUp = () => {
    const { setLoggedIn, setUserMail, setUserPhoto, setUserName, updateUser } = useData();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, you can access user data here
                console.log("Logged In");
                const newLoggedIn = true;
                const newUserMail = user.email;
                const newUserPhoto = user.photoURL;
                const newUsername = user.displayName;

                // Set the context state variables
                setLoggedIn(newLoggedIn);
                setUserMail(newUserMail);
                setUserPhoto(newUserPhoto);
                setUserName(newUsername);
                updateUser({ newLoggedIn, newUserMail, newUserPhoto, newUsername });

                // Redirect after the state updates
                window.location.href = '/home';
            } else {
                // User is signed out
                console.log("Logged Out");
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [setLoggedIn, setUserMail, setUserPhoto, setUserName, updateUser]);

    const googleSignUp = () => {
        signInWithRedirect(auth, provider)
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };



    return (
        <div className='signup-page' >

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
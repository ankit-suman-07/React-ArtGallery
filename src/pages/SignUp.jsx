import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../helper/firebase';
import { fetchData } from '../helper/firestore';
import { writeExpenses } from "../helper/firestoreWrite";
import { useData } from '../helper/UserContext';

import "../css/SignUp.css";

import PhoneBG from "../assets/background-phone.jpg";
import CompBG from "../assets/background-pc.jpg";
import GoogleLogo from "../assets/google.png";

export const SignUp = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    const { loggedIn, setLoggedIn, userMail, setUserMail, userPhoto, setUserPhoto, setUserName } = useData();

    const googleSignUp = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log("Logged In");
            setLoggedIn(true);
            setUserMail(data.user.email);
            setUserPhoto(data.user.photoURL);
            setUserName(data.user.displayName);
            fetchData();
            window.location.href = '/home';

        })
    }


    return (
        <div className='signup-page' >

            <div className='banner' >
                <div class="text-box">
                    Welcome to <span class="text-design one">Artify</span> - Your Gateway to <span
                        class="text-design two">Extraordinary</span> Artistry!
                    Discover curated, <span class="text-design three">Awe-inspiring</span> artworks chosen just for you.
                    <span class="text-design four">Immerse</span> yourself in a world
                    of
                    <span class="text-design five">Limitless</span> artistic
                    expression. <span class="text-design six">Explore</span>, appreciate, and adorn your life with the
                    <span class="text-design seven">Beauty</span> of fine art.
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
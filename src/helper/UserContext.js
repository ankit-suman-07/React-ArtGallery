import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, provider } from '../helper/firebase';

// Create a new context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
    const [theme, setTheme] = useState('light'); // Default theme is 'light'
    const [loggedIn, setLoggedIn] = useState(false);
    const [userMail, setUserMail] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [username, setUserName] = useState("");
    const [favourites, setFavourites] = useState([]);
    const [filter, setFilter] = useState("all");

    const updateUser = ({ loggedIn, userMail, userPhoto, username }) => {
        // Log the values
        console.log("loggedIn:", loggedIn);
        console.log("userMail:", userMail);
        console.log("userPhoto:", userPhoto);
        console.log("username:", username);
        setLoggedIn(loggedIn);
        setUserMail(userMail);
        setUserPhoto(userPhoto);
        setUserName(username);
    }


    // Toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const signOut = () => {
        // writeExpenses();
        auth.signOut();
        console.log("Logged Out");
        setLoggedIn(false);
        setUserMail("");
        setUserPhoto("");
        setUserName("");
        window.location.href = '/';
    }

    return (
        <UserContext.Provider value={
            {
                theme, toggleTheme,
                loggedIn, setLoggedIn,
                userMail, setUserMail,
                userPhoto, setUserPhoto,
                username, setUserName,
                favourites, setFavourites,
                filter, setFilter,
                signOut, updateUser,
            }}>
            {children}
        </UserContext.Provider>
    );
}

// Create a custom hook to access the theme context
export function useData() {
    return useContext(UserContext);
}

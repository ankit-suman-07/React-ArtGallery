import React, { createContext, useState, useContext } from 'react';

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


    // Toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <UserContext.Provider value={{ theme, toggleTheme, loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

// Create a custom hook to access the theme context
export function useData() {
    return useContext(UserContext);
}

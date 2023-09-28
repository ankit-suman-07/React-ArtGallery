import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Images } from '../components/Images';
import { Navbar } from '../components/Navbar';
import { ImageDisplay } from '../components/ImageDisplay';
import { useData } from '../helper/UserContext';
import MyComponent from '../components/MyComponent';

export const Home = () => {

    const { theme, toggleTheme, userPhoto, username } = useData();
    console.log(userPhoto);
    console.log(username);

    return (
        <div className='home-page' >
            <Navbar />
            <MyComponent />
            Home

            {
                theme

            }
            {userPhoto}
            {username}

            <button onClick={toggleTheme} >Change</button>
            <img src={userPhoto} />
            <ImageDisplay />
        </div>
    )
}

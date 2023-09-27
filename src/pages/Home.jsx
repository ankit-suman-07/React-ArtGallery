import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Images } from '../components/Images';
import { ImageDisplay } from '../components/ImageDisplay';
import { useData } from '../helper/UserContext';

export const Home = () => {

    const { theme, toggleTheme } = useData();

    return (
        <div>
            Home

            {
                theme
            }

            <button onClick={toggleTheme} >Change</button>
            <ImageDisplay />
        </div>
    )
}

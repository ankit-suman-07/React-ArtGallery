import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Images } from '../components/Images';
import { ImageDisplay } from '../components/ImageDisplay';

export const Home = () => {

    return (
        <div>
            Home
            <ImageDisplay />
        </div>
    )
}

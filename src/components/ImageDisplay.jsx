import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/ImageDisplay.css";
import { API_KEY } from '../helper/API';

export const ImageDisplay = () => {
    const [images, setImages] = useState([]);
    const query = 'Rare';


    const fetchImages = async () => {
        const data = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=50`);
        console.log(data.data.hits);
        setImages(data.data.hits);

    }

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <div className='image-display' >

            {images.map((image) => (
                <div key={image.id} className="image-card">
                    <img src={image.largeImageURL} alt={image.alt_description} />
                    <div className='image-heart' ></div>
                </div>
            ))}
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/ImageDisplay.css";
import { useData } from '../helper/UserContext';
import { API_KEY } from '../helper/API';

export const ImageDisplay = ({ query }) => {
    const [images, setImages] = useState([]);

    const { filter } = useData();

    // const query = 'Art';
    const perPage = 50;


    const fetchImages = async () => {
        const data = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${filter}&per_page=${perPage}`);
        console.log(data.data.hits);
        setImages(data.data.hits);

    }

    useEffect(() => {
        fetchImages();
    }, [filter]);
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

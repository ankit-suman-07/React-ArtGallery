import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Images = () => {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        const data = await axios.get('https://pixabay.com/api/?key=39685403-acbb33c32140de5188390d80b&q=Art');
        console.log(data.data.hits);
        setImages(data.data.hits);

    }

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <div>

            {images.map((image) => (
                <div key={image.id} className="image-card">
                    <img src={image.largeImageURL} alt={image.alt_description} />
                </div>
            ))}
        </div>
    )
}

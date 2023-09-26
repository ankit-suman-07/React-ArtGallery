import React from 'react';
import "../css/Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <div className='nav-logo' >
                ARTIFY
            </div>
            <div className='nav-menu' >
                Home
                All
                Modern
                Classic
                Contemporary
                Abstract
                Sculpture
            </div>
        </nav>
    )
}

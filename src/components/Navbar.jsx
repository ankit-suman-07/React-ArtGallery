import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signOut from "../pages/SignUp";
import { useData } from '../helper/UserContext';
import "../css/Navbar.css";


export const Navbar = () => {
    const [activeButton, setActiveButton] = useState('all');
    const { signOut, userPhoto, setFilter } = useData();
    const handleFilterChange = (newFilter) => {

        setFilter(newFilter);
        setActiveButton(newFilter);
    };
    return (
        <nav>
            <div className='nav-logo' >
                <Link to="/home" className="link-nav" > ARTIFY </Link>
            </div>
            <div className='nav-menu' >
                <button
                    className={activeButton === "all" ? "active-filter" : "all"}
                    onClick={() => handleFilterChange("all")}
                >
                    All
                </button>
                <button
                    className={activeButton === "modern" ? "active-filter" : "modern"}
                    onClick={() => handleFilterChange("modern")}
                >
                    Modern
                </button>
                <button
                    className={activeButton === "classic" ? "active-filter" : "classic"}
                    onClick={() => handleFilterChange("classic")}
                >
                    Classic
                </button>
                <button
                    className={activeButton === "contemporary" ? "active-filter" : "contemporary"}
                    onClick={() => handleFilterChange("contemporary")}
                >
                    Contemporary
                </button>
                <button
                    className={activeButton === "abstract" ? "active-filter" : "abstract"}
                    onClick={() => handleFilterChange("abstract")}
                >
                    Abstract
                </button>
                <button
                    className={activeButton === "sculpture" ? "active-filter" : "sculpture"}
                    onClick={() => handleFilterChange("sculpture")}
                >
                    Sculpture
                </button>
            </div>
            <div className='nav-user' >
                <button onClick={signOut} >Logout</button>
                <div className='nav-profile' >
                    <img src={userPhoto} />
                </div>
            </div>
        </nav>
    )
}

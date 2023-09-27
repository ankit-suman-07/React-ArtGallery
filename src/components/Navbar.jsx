import React from 'react';
import signOut from "../pages/SignUp";
import "../css/Navbar.css";
import { useData } from '../helper/UserContext';


export const Navbar = () => {
    const { signOut } = useData();
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
            <div className='nav-user' >
                <button onClick={signOut} >Logout</button>
                <div className='nav-profile' >
                    User
                </div>
            </div>
        </nav>
    )
}

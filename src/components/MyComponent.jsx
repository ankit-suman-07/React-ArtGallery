import React from 'react';
import { useData } from '../helper/UserContext';

function MyComponent() {
    const { loggedIn, userMail, userPhoto, signOut } = useData();
    console.log(userMail);

    return (
        <div>
            {loggedIn ? (
                <div>
                    <p>Welcome, {userMail}!</p>
                    <img src={userPhoto} alt="User" />
                    <button onClick={signOut}>Sign Out</button>
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}

export default MyComponent;
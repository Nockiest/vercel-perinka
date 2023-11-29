import React from 'react'
import { auth } from '../../firebase';

const LogOutBtn = () => {
    const handleSignOut = async () => {
        try {

        localStorage.clear();
        console.log(localStorage.getItem('name'), localStorage.getItem('profilePic'),"xxx")
        window.location.reload();
        await auth.signOut();


        } catch (error) {
        // Handle sign out error
        console.error('Error signing out:', error);
        }
    };
    const logoutButtonStyles = {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
      };
  return (
    <button className="log-out-btn btn" onClick={handleSignOut}
          style={logoutButtonStyles} >
            Log Out
          </button>
  )
}

export default LogOutBtn
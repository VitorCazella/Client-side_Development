import React from 'react';
import logo from '../img/camera.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>New Zealand Pics</h3>
        </div>
    );
}

export default Header;
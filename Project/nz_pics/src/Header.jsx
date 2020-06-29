import React from 'react';
import logo from './img/camera.png';

function Header() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>New Zealand Pics</h3>
        </header>
    );
}

export default Header;
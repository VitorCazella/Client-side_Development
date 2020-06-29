import React from 'react';
import Img from '../img/wellington/owhiro_vitor.jpg';

function Main() {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={Img} alt="photo" class="image" width="300" height="200" />
        </div>
    );
}

export default Main;
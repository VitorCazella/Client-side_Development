import React from 'react';
import Carousel from 'react-images';
import Img1 from '../../img/wellington/owhiro_vitor.jpg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';

const images = [{ source: Img1 }, { source: Img2 }];

class Main extends React.Component {
    render() {
        return (
            <div className="photobox">
                <h1>Best Photos</h1>
                <Carousel views={images} />
            </div>
        );
    }
}

export default Main;
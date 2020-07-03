import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../../img/wellington/owhiro_vitor.jpg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';
import Img3 from '../../img/taupo/hukaFalls.jpeg';

class Main extends React.Component {
    render() {
        return (
            <div className="photobox">
                <h1>Best Photos</h1>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Owhiro, wellington</h3>
                            <p>Vitor Cazella</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Mount Victoria, Wellington</h3>
                            <p>Vitor Cazella</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>HukaFalls, Taupo</h3>
                            <p>Yasmin</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Main;
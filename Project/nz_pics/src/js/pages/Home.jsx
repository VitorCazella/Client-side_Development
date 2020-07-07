import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Img1 from '../../img/queenstown/MilfordSound.jpeg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';
import Img3 from '../../img/taupo/hukaFalls.jpeg';

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Best Photos</h1><br></br>
                <Container className="photobox">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>MilfordSound, Queenstown</h3>
                                <p>Yasmin Melech</p>
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
                                <p>Yasmin Melech</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </>
        );
    }
}

export default Home;
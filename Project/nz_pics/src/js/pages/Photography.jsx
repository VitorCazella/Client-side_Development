import React from 'react';
import { Container, Image, Row, Col, ResponsiveEmbed, Button } from 'react-bootstrap';
import Img1 from '../../img/photographer.jpg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';
import Img3 from '../../img/taupo/hukaFalls.jpeg';

function Photography() {
    return (
        <>
            <h1>World of Photography</h1><br></br>
            <Container className="container-shadow">
                <Row>
                    <Col xs={8}>
                        <h2>What is Photography?</h2>
                        <br></br>
                        <p>Photography is the art, application and practice of creating durable images
                        by recording light or other electromagnetic radiation, either electronically
                        by means of an image sensor, or chemically by means of a light-sensitive
						material such as photographic film.</p>
                    </Col>
                    <Col>
                        <Image src={Img1} width='100%' rounded />
                    </Col>
                </Row>
                <br></br>
                <hr></hr>
                <br></br>
                <Row>
                    <Col lg={6}>
                        <div className="youtubeVideo">
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed type="image/svg+xml" src="https://www.youtube.com/embed/JoxGEymA8ro" />
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col>
                        <h2>What Camera Do You Need for Photography?</h2>
                        <br></br>
                        <p>Many people today believe that their phone is good enough for most photography, and they have no need to buy a separate camera. And you know what? They’re not wrong. For most people out there, a dedicated camera is overkill.</p>
                        <a href="https://photographylife.com/what-is-photography" target="_blank" style={{ float: 'right', paddingRight: '15px' }}>Read more</a>
                    </Col>
                </Row>
                <br></br>
                <hr></hr>
                <br></br>
                <Row>
                    <Col>
                        <a id="mikeButton" href="https://www.mikehollman.com/" target="_blank"><h2>Mike Hollman</h2></a>
                        <br></br>
                        <p>Multi award winning photographer, Mike Hollman is a member of the Advertising and Illustrative Photographers Association (NZ) and a qualified professional photographer with the New Zealand Institute of Professional Photography (Fellow).</p>
                        <a href="http://www.nikon.co.nz/en_NZ/community/ambassador?lang=&ID=templatedata/en_NZ/taggable_content/data/ambassador/Mike%20Holman&Category=community&Section=" target="_blank" style={{ float: 'right', paddingRight: '15px' }}>Read more</a>
                    </Col>
                </Row>
                <br></br>
                <hr></hr>
                <br></br>
                <Row>
                    <Col>
                        <div>
                            <ResponsiveEmbed aspectRatio="4by3">
                                <embed type="image/svg+xml" src="https://photography.org.nz/" />
                            </ResponsiveEmbed>
                        </div>
                        <br></br>
                        <a href="https://photography.org.nz/" target="_blank" style={{ float: 'right', paddingRight: '15px' }}>Go to website</a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Photography;
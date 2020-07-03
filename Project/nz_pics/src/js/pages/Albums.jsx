import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Wellington from '../../img/wellington/wellington-cable-car.jpg';
import Auckland from '../../img/auckland/auckland-city.jpg';
import Queenstown from '../../img/queenstown/queenstown-post.jpeg'

function Albuns() {
    return (
        <div>	
            <h2>Cities</h2>
            <Container className="d-md-flex" className="overflow-auto">
                <Row style={{ width: '1000px', height: '300px'}}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Wellington} />
                            <Card.Body>
                                <Card.Title>Wellington</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Auckland} />
                            <Card.Body>
                                <Card.Title>Auckland</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Queenstown} />
                            <Card.Body>
                                <Card.Title>Queenstown</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Auckland} />
                            <Card.Body>
                                <Card.Title>Auckland</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <h2>Photographer</h2>
            <Container className="d-md-flex" className="overflow-auto">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Wellington} />
                            <Card.Body>
                                <Card.Title>Vitor Cazella</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Auckland} />
                            <Card.Body>
                                <Card.Title>Yasmin</Card.Title>
                                <Button variant="primary">See album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Albuns;
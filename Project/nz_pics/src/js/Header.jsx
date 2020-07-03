import React from 'react';
import logo from '../img/camera.png';
import { Container, Image, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <>
            {/* <div className="header">
                <img src={logo} className="App-logo Animated" alt="logo" />
                <h3>New Zealand Pics</h3>
            </div> */}
            <Container fluid>
                <Row className="p-2 header align-middle">
                    <Col>
                        <Image src={logo} height='60vh' />
                    </Col>
                    <Col xs={8} className="text-center">
                        <h1>New Zealand Pics</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;
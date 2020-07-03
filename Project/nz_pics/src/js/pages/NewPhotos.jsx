import React, { useState } from 'react';
import { Container, Image, Row, Col, Modal, Button } from 'react-bootstrap';
import Img1 from '../../img/wellington/owhiro_vitor.jpg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';
import Img3 from '../../img/taupo/hukaFalls.jpeg';

function NewPhotos() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h1>Latest Photos</h1><br></br>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><Image width='100%' src={Img1} rounded /></Modal.Body>
            </Modal>
            <Container>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <a onClick={handleShow}><Image width='100%' src={Img1} rounded /></a>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <Image width='100%' src={Img2} rounded />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <Image width='100%' src={Img3} rounded />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <Image width='100%' src={Img1} rounded />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NewPhotos;
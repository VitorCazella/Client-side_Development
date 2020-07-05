import React, { useState } from 'react';
import { Container, Image, Row, Col, Modal } from 'react-bootstrap';
import Img1 from '../../img/wellington/owhiro_vitor.jpg';
import Img2 from '../../img/wellington/mountvic_vitor.jpg';
import Img3 from '../../img/taupo/hukaFalls.jpeg';


function NewPhotos() {
    const [Img, setImg] = useState(Img1);
    const [show, setShow] = useState(false);

    function handleClick(image) {
        setShow(true);
        setImg(image);
    }

    function handleClickClose() {
        setShow(false);
    }

    return (
        <>
            <h1>Latest Photos</h1><br></br>
            <Modal show={show} onHide={handleClickClose} size="xl">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><Image width='100%' src={Img} rounded /></Modal.Body>
            </Modal>


            <Container>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <h2>Owhiro, Wellington</h2>
                            <h5>Vitor Cazella</h5>
                            <a onClick={() => handleClick(Img1)}><Image width='100%' src={Img1} rounded /></a>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <h2>Mount Victoria, Wellington</h2>
                            <h5>Vitor Cazella</h5>
                            <a onClick={() => handleClick(Img2)}><Image width='100%' src={Img2} rounded /></a>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <h2>HukaFalls, Taupo</h2>
                            <h5>Yasmin Melech</h5>
                            <a onClick={() => handleClick(Img3)}><Image width='100%' src={Img3} rounded /></a>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="sm-photobox">
                            <h2>Owhiro, Wellington</h2>
                            <h5>Vitor Caazella</h5>
                            <a onClick={() => handleClick(Img1)}><Image width='100%' src={Img1} rounded /></a>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NewPhotos;
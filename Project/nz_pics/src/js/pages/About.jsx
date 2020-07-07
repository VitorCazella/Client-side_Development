import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ThankYou from './ThankYou';

function About() {

    function thankyou(){
        var root = document.getElementById('root');
        
        ReactDOM.render(
            <ThankYou />,
            root
        );

    }

    return (
        <>
            <h1>About the Website</h1>
            <Container className="container-shadow">
                <Row>
                    <Col>
                        <p>
                            This site was created as a project for the Software Development course at Whitecliffe College.

                            The purpose of this project is to enable us to demonstrate the skills in designing and
                            building a responsive website. Need to apply the principles and skills you have learnt from the Client-side development part of the course.
				        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Form>
                        <h3>Send your feedback here:</h3>
                        <Form.Group controlId="formTextarea">
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Row>
                            <Col lg={6}>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Group controlId="checkboxGender">
                            <Form.Check type="radio" name="gender" label="Male" />
                            <Form.Check type="radio" name="gender" label="Female" />
                        </Form.Group>
                        <Button onClick={thankyou} variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default About;
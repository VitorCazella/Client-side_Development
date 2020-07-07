import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import App from '../App';
import Footer from '../Footer';
import Header from '../Header';

function ThankYou() {

    function goBack(){
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        )
    }

    return (
        <>
            <Header />
            <Button className="m-4" onClick={goBack} variant="danger" type="submit">Go Back To Website</Button>
            <Container className="center" style={{ height: '70vh' }}>
                <Jumbotron>
                    <h1>Thank you for your feedback</h1>
                    <hr></hr>
                </Jumbotron>
            </Container>
            <Footer />
        </>
    );
}

export default ThankYou;
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Signin.css';
import login from './Login.png';
import "bootstrap/dist/css/bootstrap.css";

const Signin = () => {
    return (
        <>
            <Header />
            <Container fluid className="px-5 pt-xs-2 pt-sm-4">
                <Row>
                    <Col md={5}>
                        <Form>
                            <h3 className="pb-2"><b>Login</b></h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="flabel">Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="flabel">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Link to="/signin" className="fpass">
                                Forgot Password?
                            </Link>
                            <br />
                            <br />
                            <Button type="submit" className="subbtn block">
                                <b>Login</b>
                            </Button>
                            <br />
                            <br />
                            <Link to="/" className="fpass">
                                Don't have an account yet? <b>Signup!</b>
                            </Link>
                        </Form>
                    </Col>
                    <Col md={7} className="text-right py-5">
                        <h3 className="flabel"><b>Unlock your stuck revenue</b></h3>
                        <p className="flabel">We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</p>
                        <img src={login} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Signin;
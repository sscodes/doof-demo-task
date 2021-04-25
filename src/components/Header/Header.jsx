import { Container, Navbar, Button } from "react-bootstrap";
import './Header.css';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    return (
        <Navbar className="headerClass">
            <Container fluid>
                <Navbar.Brand href="#" className="navBrand pl-md-2 brand">DOOF</Navbar.Brand>
                <div className="btnTestdiv mr-md-5">
                    <Button className="btnTest px-5"><b>Test</b></Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
import { Navbar } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
    return (
        <Navbar fixed="bottom" className="pl-sm-4">
            <h6 className="pr-3">Terms of Service</h6>
            <h6 className="pl-3">Privacy Policy</h6>
        </Navbar>
    );
}

export default Footer;
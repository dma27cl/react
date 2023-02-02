import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../img/Logo.png";

export default function Navigation() {
 return (
 <>
 <Navbar className="pink">
 <Container className="justify-content-start me-4">
 <Navbar.Brand>
            <img src={Logo}
              width="150"
              height="150"
              className="imgLogo" />
          </Navbar.Brand>

 <Link to="/" className="text-white ms-3 text-decoration-none">
 Inicio
 </Link>
 <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
 Contacto
 </Link>
 </Container>
 </Navbar>
 </>
 );
}
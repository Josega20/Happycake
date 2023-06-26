import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Navb() {
  return (
    <Navbar expand="sm" bg="danger">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🏠 Home
          </Link>
          <Link to="/contactos" className="text-white ms-3 text-decoration-none">
          📒 Contactos
          </Link>
        </Nav>
      </Container>
      <div className="text-white ms-3 text-decoration-none">HAPPY CAKE 🍰</div>
    </Navbar>
  );
}

export default Navb;

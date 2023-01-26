import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//TEsting context
import { useContext } from "react";
import AuthContext from "../context/AuthContex";
//testing context

function CollapsibleExample() {
  const navigate = useNavigate();
  //get contxt
  const { authT, accInfo, logOffRemoveCookies } = useContext(AuthContext);

  const makeLogOff = () => {
    logOffRemoveCookies();
    navigate("/");
  };

  //If auth === false, no acc logged
  if (authT === false) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            WiPet-0
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="me-auto"></Nav>
          <Nav className="mr-2">
            <Nav.Link as={Link} to="/register/user">
              REGISTRO
            </Nav.Link>
          </Nav>
          <Nav className="ml-2">
            <Nav.Link as={Link} to="/login">
              LOGIN
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    );
  }
  //if auth === true && AccType === user -> its user logged
  if (authT === true && accInfo.accType === "user") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WiPet - {accInfo.accType}</Navbar.Brand>

          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="FotitoPerfil" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to={`/${accInfo.accType}/${accInfo.accId}`}
              >
                Mi Perfil
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/${accInfo.accType}/${accInfo.accId}/reserves`}
              >
                Mis Reservas
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item onClick={makeLogOff}>
                Cerrar Sesion
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  if (authT === true && accInfo.accType === "store") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WiPet - {accInfo.accType}</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={`/store/${accInfo.accId}`}>
              {accInfo.name}
            </Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown title="FotitoPerfil" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to={`/${accInfo.accType}/${accInfo.accId}`}
              >
                Mi Perfil
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/${accInfo.accType}/${accInfo.accId}/reserves`}
              >
                Mis Reservas
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item onClick={makeLogOff}>
                Cerrar Sesion
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default CollapsibleExample;

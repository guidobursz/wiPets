import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

//TEsting context
import { useContext } from "react";
import AuthContext from "../context/AuthContex";
//testing context

function CollapsibleExample() {
	//get contxt
	const { authT, accInfo, logOffRemoveCookies } = useContext(AuthContext);

	const makeLogOff = () => {
		logOffRemoveCookies();
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
					<Nav>
						<Nav.Link href="#">REGISTRO</Nav.Link>
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
							<NavDropdown.Item href="#action/3.1">Mi Perfil</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
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
						<Nav.Link href="#features">StoreName</Nav.Link>
					</Nav>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<NavDropdown title="FotitoPerfil" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Reservas</NavDropdown.Item>

								<hr />
								<NavDropdown.Item onClick={makeLogOff}>
									Cerrar Sesion
								</NavDropdown.Item>
								{/* <NavDropdown.Divider /> */}
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
export default CollapsibleExample;
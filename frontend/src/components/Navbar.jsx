import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// 0 not signed, 1 user, 2 store, 3 admin
let userTest = 2;

function CollapsibleExample() {
	if (userTest === 0) {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">WiPet-0</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav"> */}
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link href="#deets">REGISTRO</Nav.Link>
					</Nav>
					{/* </Navbar.Collapse> */}
				</Container>
			</Navbar>
		);
	}
	if (userTest === 1) {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">WiPet-User</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<NavDropdown title="FotitoPerfil" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									Mi Perfil
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Mis Reservas
								</NavDropdown.Item>
								<hr />
								<NavDropdown.Item href="#action/3.3">
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
	if (userTest === 2) {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">WiPet-2</Navbar.Brand>
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
								<NavDropdown.Item href="#action/3.3">
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

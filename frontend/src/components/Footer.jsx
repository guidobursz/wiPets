import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Container>
				{/* mi primer intento */}
				{/* <Navbar.Brand href="#home">WiPet-User</Navbar.Brand>
				<Navbar.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa
					totam a tempore veritatis velit vel eaque id amet consequuntur
					repellat dolor consequatur et maiores aliquid animi
				</Navbar.Text>
				<Nav className="flex-column">
					<Navbar.Text>Contact</Navbar.Text>
					<Nav.Link>Pepe</Nav.Link>
				</Nav> */}
				{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
				{/* hasta aca mi codigo */}

				{/* <!-- Section: Links  --> */}
				<section className="">
					<div className="container text-center text-md-start mt-5">
						{/* <!-- Grid row --> */}
						<div className="row mt-3">
							{/* <!-- Grid column 1 --> */}
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								{/* <!-- Content --> */}
								{/* <Navbar.Brand href="#home">
								<h6 className="text-uppercase fw-bold mb-4">WiPet</h6>
							</Navbar.Brand> */}

								<Nav className="flex-column">
									<Navbar.Text>
										<h6 className="text-uppercase fw-bold mb-4">WiPet</h6>
									</Navbar.Text>
									<Navbar.Text>
										Nuestra mision es poder hacer mas sencilla la tarea de poder
										reservar un turno para nuestras mascostas!
									</Navbar.Text>
								</Nav>
							</div>
							{/* <!-- Grid column 1 --> */}

							{/* <!-- Grid column 2 --> */}
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<Nav className="flex-column">
									<Navbar.Text>
										<h6 className="text-uppercase fw-bold mb-4">CONTACT</h6>
									</Navbar.Text>
									<Nav.Link>Pepe1</Nav.Link>
									<Nav.Link>Pepe2</Nav.Link>
									<Nav.Link>Pepe3</Nav.Link>
									<Nav.Link>Pepe4</Nav.Link>
								</Nav>
							</div>
							{/* <!-- Grid column 2 --> */}

							{/* <!-- Grid column 3 --> */}
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<Nav className="flex-column">
									<Navbar.Text>
										<h6 className="text-uppercase fw-bold mb-4">
											Useful links
										</h6>
									</Navbar.Text>
									<Nav.Link>Pepe1</Nav.Link>
									<Nav.Link>Pepe2</Nav.Link>
									<Nav.Link>Pepe3</Nav.Link>
									<Nav.Link>Pepe4</Nav.Link>
								</Nav>
							</div>
							{/* <!-- Grid column 3 --> */}

							{/* <!-- Grid column 4 --> */}
							{/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<Nav className="flex-column">
									<Navbar.Text>
										<h6 class="text-uppercase fw-bold mb-4">Que ponemo?</h6>
									</Navbar.Text>
									<Nav.Link>Pepe1</Nav.Link>
								</Nav>
							</div> */}
							{/* <!-- Grid column 4 --> */}
						</div>
						{/* <!-- Grid row --> */}
					</div>
				</section>
				{/* <!-- Section: Links  --> */}
			</Container>
		</Navbar>
	);
};

export default Footer;

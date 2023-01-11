import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
// import TESTbtnCookie from "../components/TESTbtnCookie";
import Footer from "../components/Footer";

const indexPage = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<h1> Titulo? </h1>
				<h1> mas texto?</h1>
				<br />
				<hr />
				<br />
				<h3>Filtro con tres botones estilo:</h3>

				<div>
					<button>Veterinaria</button>
					<button>Lavado</button>
					<button>Cortar pelo</button>
				</div>
				<h4>Preview de tiendas, random cumpliendo el filtro?</h4>
				<br />
				<hr />
				<h3>Mapa? mostrando las tiendas registradas?</h3>
				<hr />
				<br />

				{/* <TESTbtnCookie /> */}
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default indexPage;

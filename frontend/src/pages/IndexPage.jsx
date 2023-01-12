import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
import StoreRegisterOpt from "../components/indexUse/StoreRegisterOpt";
import TableStoresHome from "../components/indexUse/TableStoresHome";
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
				<TableStoresHome />
				<br />
				<hr />
				<h3>Mapa? mostrando las tiendas registradas?</h3>
				<hr />
				<StoreRegisterOpt />
				<br />
				<br />

				{/* <TESTbtnCookie /> */}
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default indexPage;

import React, { useState } from "react";

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";
import PetPreview from "../PetPreview";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserPetsDisplay = ({ loading, fetchData, petsData }) => {
	//  console.log(typeof fetchData);

	return (
		<>
			<div className="mt-2 mb-1 p-2 rounded border border-primary">
				<div>
					<Row className="mt-1 mb-1">
						<Col>
							<h3>Tus mascotas</h3>
						</Col>
						<Col className="d-flex justify-content-end">
							<button onClick={fetchData}>Flechita</button>
						</Col>
					</Row>
					<hr />
				</div>

				{/* div for center spinner */}
				<div className="mx-auto">
					{loading && (
						<>
							<br />
							<br />
							<h4 className="d-flex justify-content-center">Cargando...</h4>
							<div className="d-flex justify-content-center">
								<SpinnerBootstrap />
							</div>
							<br />
							<br />
						</>
					)}
				</div>

				{/* displaying animals */}
				{/* #TODO: falta confirmar una segunda condicion para el render de lo de adentro */}
				{loading === false && (
					<>
						<div className="rounded border border-warning">
							<div>Esto tendria que poder abrirse/cerrar. Default: cerrado</div>

							<div className="d-flex justify-content-end mb-2">
								<Button>Agregar mascota</Button>
							</div>
							<div>
								<div className="d-flex flex-row gx-1 justify-content-center text-center">
									{/* Aca hacemos el .map de la info que se va a destructurar */}
									{petsData.length === 0 ? (
										<p>No se encuentran mascotas en nuestra base de datos...</p>
									) : (
										petsData.map((el, idx) => {
											return (
												<div className="m-1">
													<PetPreview key={idx} data={el} />
												</div>
											);
										})
									)}
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default UserPetsDisplay;

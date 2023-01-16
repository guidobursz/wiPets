import React, { useState } from "react";

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";
import ReactDataTable from "../ReactDataTable";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserAppointmentsDisplay = ({ loading, fetchData, userAppointments }) => {
	//Create data for table:
	const columns = [
		{
			name: "Dia",
			selector: (row) => row.date,
		},
		{
			name: "Hora",
			selector: (row) => row.time,
		},
		{
			name: "Comentario",
			selector: (row) => row.comment,
		},
		{
			name: "Local",
			selector: (row) => row.Store.name,
		},
		{
			name: "Mascota",
			selector: (row) => row.Pet.name,
		},
		{
			name: "Estado",
			selector: (row) => row.Status.description,
		},
	];

	return (
		<>
			<div className="mt-2 mb-1 p-2 rounded border border-primary">
				<div>
					<Row className="mt-1 mb-1">
						<Col>
							<h3>Tus proximas reservas</h3>
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

							<div>
								<div className="d-flex flex-row gx-1 justify-content-center text-center">
									{/* Aca hacemos el .map de la info que se va a destructurar */}
									{userAppointments.length === 0 ? (
										<p>No se reservas en la base de datos...</p>
									) : (
										<ReactDataTable columns={columns} data={userAppointments} />
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

export default UserAppointmentsDisplay;

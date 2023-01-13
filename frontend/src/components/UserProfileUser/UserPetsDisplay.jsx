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

const UserPetsDisplay = () => {
	const fakePetsData = [
		{
			id: 1,
			name: "Katy",
			age: "8",
			gender: "female",
			extra_info_one: "Hermosa",
			extra_info_two: "Tranquila",
			extra_info_three: "No juega",
			createdAt: "2023-01-05T19:25:34.000Z",
			updatedAt: "2023-01-05T19:25:34.000Z",
			deletedAt: null,
			UserId: 9,
			PetTypeId: 1,
			PetBreedId: 10,
		},
		{
			id: 2,
			name: "Ruffo",
			age: "2",
			gender: "male",
			extra_info_one: "tam mediano",
			extra_info_two: null,
			extra_info_three: null,
			createdAt: "2023-01-05T19:25:34.000Z",
			updatedAt: "2023-01-05T19:25:34.000Z",
			deletedAt: null,
			UserId: 9,
			PetTypeId: 5,
			PetBreedId: 23,
		},
		{
			id: 5,
			name: "Samuel",
			age: "7",
			gender: "male",
			extra_info_one: null,
			extra_info_two: null,
			extra_info_three: null,
			createdAt: "2023-01-05T19:25:34.000Z",
			updatedAt: "2023-01-05T19:25:34.000Z",
			deletedAt: null,
			UserId: 9,
			PetTypeId: 1,
			PetBreedId: 72,
		},
	];

	return (
		<div className="mt-2 mb-1 p-2 rounded border border-primary">
			<div>
				<Row className="mt-1 mb-1">
					<Col>
						<h3>Tus mascotas</h3>
					</Col>
					<Col className="d-flex justify-content-end">
						<p>
							{" "}
							<b>Flechita</b>(open/close)
						</p>
					</Col>
				</Row>
			</div>
			<div className="rounded border border-warning">
				<div>Esto tendria que poder abrirse/cerrar. Default: cerrado</div>

				<div className="d-flex justify-content-end mb-2">
					<Button>Agregar mascota</Button>
				</div>
				<div>
					<div className="d-flex flex-row gx-1 justify-content-center text-center">
						{/* Aca hacemos el .map de la info que se va a destructurar */}
						{/* En este caso lo hago con el fakePetsData */}
						{fakePetsData.map(function (el, idx) {
							// console.log(`${idx}`, el);
							return (
								<div className="m-1">
									<PetPreview data={el} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPetsDisplay;

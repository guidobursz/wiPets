import React, { useState } from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getUserPetsByUserId } from "../../services/PetsAPI";

//import components
import SpinnerBootstrap from "../SpinnerBootstrap";
import PetPreview from "../PetPreview";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowDownCircleFill,
} from "react-icons/bs";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import context
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const UserPetsDisplay = () => {
	//Get userId
	let params = useParams();
	let userId = params.id;
	//Get context data for jwt:
	const { accInfo } = useContext(AuthContext);
	let tokenJ = accInfo.ajt;

	//States:
	//For open/close:
	const [openState, setOpenState] = useState(false);
	//For getting data:
	const [loading, setLoading] = useState(false);
	const [petsData, setPetsData] = useState([]);

	//For open/close:
	const openFilters = async (e) => {
		if (openState === false) {
			//make loading true bc of the api call
			setLoading(true);
			//Api call:
			let userPets = await getUserPetsByUserId(userId, tokenJ);
			// console.log(userPets.data.userPets);
			//Save the data in the state
			setPetsData(userPets.data.userPets);
			//Make loading false
			setLoading(false);
		} else if (openState === true) {
			setPetsData("");
		}
		//Make openState state the opposite
		setOpenState(!openState);
	};
	//End open/close

	return (
		<>
			{/* If state is closed = not display */}
			{!openState && (
				<>
					<div className="mt-2 mb-1 p-2 rounded border border-primary ">
						<div className="divContainer ">
							<div className="divTop p-1">
								<Row className="d-flex align-items-center">
									<Col>
										<h3 style={{ verticalAlign: "bottom" }}>Tus mascotas</h3>
									</Col>
									<Col
										className="d-flex justify-content-end"
										style={{ height: "39px" }}
									>
										<BsFillArrowLeftCircleFill
											size={30}
											onClick={openFilters}
										/>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</>
			)}

			{/* If state is open = display */}
			{openState && (
				<>
					<div className="mt-2 mb-1 p-2 rounded border border-primary">
						<div className="divContainer ">
							<div className="divTop p-1">
								<Row className="d-flex align-items-center">
									<Col>
										<h3 style={{ verticalAlign: "bottom" }}>Tus mascotas</h3>
									</Col>
									<Col
										className="d-flex justify-content-end"
										style={{ height: "39px" }}
									>
										<BsFillArrowLeftCircleFill
											size={30}
											onClick={openFilters}
										/>
									</Col>
								</Row>
							</div>
							{/* comienza el children div: */}
							<div className="divChild">
								{/* Spinner */}
								{/* div for center spinner */}
								<div className="mx-auto">
									{loading && (
										<>
											<br />
											<br />
											<h4 className="d-flex justify-content-center">
												Cargando...
											</h4>
											<div className="d-flex justify-content-center">
												<SpinnerBootstrap />
											</div>
											<br />
											<br />
										</>
									)}
								</div>

								{/* displaying pets */}
								{/* displaying animals */}
								<div className="mt-2 mb-1 p-2 rounded border border-primary">
									{/* #TODO: falta confirmar una segunda condicion para el render de lo de adentro */}
									{loading === false && (
										<>
											<div className="rounded">
												<div className="d-flex justify-content-end mb-2">
													<Button>Agregar mascota</Button>
												</div>
												<div>
													<div className="d-flex flex-row gx-1 justify-content-center text-center">
														{/* Aca hacemos el .map de la info que se va a destructurar */}
														{petsData.length === 0 ? (
															<p>
																No se encuentran mascotas en nuestra base de
																datos...
															</p>
														) : (
															petsData.map((el, idx) => {
																return (
																	<div className="m-1" key={idx}>
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
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default UserPetsDisplay;

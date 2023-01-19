import React, { useState } from "react";
import { useForm } from "react-hook-form";

//import components
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowDownCircleFill,
} from "react-icons/bs";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterInputs = ({ updateFilters }) => {
	const { register, handleSubmit } = useForm();

	//States:
	const [openState, setOpenState] = useState(false);

	//For open/close:
	const openFilters = () => {
		//Make openState state the opposite
		setOpenState(!openState);
		// console.log(openState);
	};
	//End open/close

	//Handle submit
	const onSubmit = async (data) => {
		// console.log(data);

		updateFilters(data);
		setOpenState(false);
	};
	return (
		<>
			{/* If state is closed = not display */}
			{!openState && (
				<>
					<div className="divContainer">
						<div className="divTop border border-warning p-1">
							<Row className="d-flex align-items-center">
								<Col>
									<h3 style={{ verticalAlign: "bottom" }}>Filtros</h3>
								</Col>
								<Col className="d-flex justify-content-end">
									<BsFillArrowLeftCircleFill size={30} onClick={openFilters} />
								</Col>
							</Row>
						</div>
					</div>
				</>
			)}
			{/* If state is open = display */}
			{openState && (
				<>
					<div className="divContainer border border-warning">
						<div className="divTop border p-1">
							<Row>
								<Col>
									<h3 style={{ verticalAlign: "bottom" }}>Filtros</h3>
								</Col>
								<Col className="d-flex justify-content-end">
									<BsFillArrowDownCircleFill size={30} onClick={openFilters} />
								</Col>
							</Row>
						</div>
						<hr />
						<div className="divChild">
							<Form
								autoComplete="off"
								className="p-2"
								onSubmit={handleSubmit(onSubmit)}
							>
								<Row>
									<Col className="primer-input col-6">
										{/* form group for store name */}
										<Form.Group className="mb-3" controlId="formBasicName">
											<div class="d-flex justify-content-center">
												<div>
													<Form.Label>
														<u>
															<i>
																<b>Nombre del local</b>
															</i>
														</u>
													</Form.Label>
												</div>
											</div>
											<Form.Control
												type="text"
												placeholder="Ingrese nombre de la tienda"
												{...register("storeName")}
											/>
										</Form.Group>
									</Col>

									<Col className="second-input col-6">
										{/* form group for store name */}
										<Form.Group className="mb-3" controlId="formBasicPetName">
											<div class="d-flex justify-content-center">
												<div>
													<Form.Label>
														<u>
															<i>
																<b>Nombre de la mascota</b>
															</i>
														</u>
													</Form.Label>
												</div>
											</div>
											<Form.Control
												type="text"
												placeholder="Ingrese nombre de la mascota"
												{...register("petName")}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col className="third-input col-6">
										{/* form group for store service type */}
										<Form.Group className="mb-3" controlId="formBasicServType">
											<div class="d-flex justify-content-center">
												<div>
													<Form.Label>
														<u>
															<i>
																<b>Servicios</b>
															</i>
														</u>
													</Form.Label>
												</div>
											</div>

											<div class="d-flex justify-content-center">
												<div>
													<Form.Check
														type="checkbox"
														label="Veterinaria"
														value="vet"
														{...register("services")}
													/>
													<Form.Check
														type="checkbox"
														label="Peluqueria"
														value="hair"
														{...register("services")}
													/>
													<Form.Check
														type="checkbox"
														label="Lavadero"
														value="washer"
														{...register("services")}
													/>
												</div>
											</div>
										</Form.Group>
									</Col>

									<Col className="four-input col-6">
										{/* form group for status filter */}

										<Form.Group
											className="mb-3"
											controlId="formBasicStatuesType"
										>
											<div class="d-flex justify-content-center">
												<div>
													<Form.Label>
														<u>
															<i>
																<b>Estados</b>
															</i>
														</u>
													</Form.Label>
												</div>
											</div>

											<div className="d-flex justify-content-center">
												<div>
													<Form.Check
														type="checkbox"
														label="Pendientes"
														value="pending"
														{...register("statues")}
													/>
													<Form.Check
														type="checkbox"
														label="confirmados"
														value="confirmed"
														{...register("statues")}
													/>
													<Form.Check
														type="checkbox"
														label="Cancelados"
														value="cancelled"
														{...register("statues")}
													/>
													<Form.Check
														type="checkbox"
														label="contactar"
														value="contact"
														{...register("statues")}
													/>
													<Form.Check
														type="checkbox"
														label="completados"
														value="completed"
														{...register("statues")}
													/>
												</div>
											</div>
										</Form.Group>
									</Col>
								</Row>

								<div class="d-flex justify-content-center">
									<Button variant="primary" type="submit">
										Filtrar
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FilterInputs;

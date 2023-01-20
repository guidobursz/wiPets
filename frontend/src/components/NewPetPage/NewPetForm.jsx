import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Import queries

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewPetForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//States:
	const [loadingQuery, setLoadingQuery] = useState(false);
	//successfully register
	const [registersuccessfully, setRegisterSuccessfully] = useState(false);
	//In case of an error
	const [registerError, setRegisterError] = useState(false);
	const [registerErrorMessage, setRegisterMessage] = useState(false);

	//Handle submit:
	const onSubmit = async (data) => {
		console.log(data);
	};

	const testError = (variant, text) => (
		<CustomAlert
			variant={variant}
			text={text}
			className="d-flex justify-content-center"
		/>
	);

	return (
		<>
			<div>
				<h2>pepe testing</h2>
			</div>

			{/* div for center spinner */}
			<div className="mx-auto">
				{loadingQuery && (
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

			<div>
				<Form onSubmit={handleSubmit(onSubmit)}>
					{/* form group for store name */}
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Nombre de la mascota</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingrese nombre de la tienda"
							{...register("name", { required: true })}
						/>
						<Form.Text className="text-muted">
							{errors.name?.type === "required" && (
								<Alert variant="danger">
									Es obligatorio escribir el nombre
								</Alert>
							)}
						</Form.Text>
					</Form.Group>
				</Form>
			</div>
		</>
	);
};

export default NewPetForm;

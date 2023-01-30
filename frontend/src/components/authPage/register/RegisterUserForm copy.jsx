import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { userRegister } from "../../../services/AuthAPI";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RegisterUserForm = () => {
	// const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//States:
	const [loadingQuery, setLoadingQuery] = useState(false);
	//successfully register
	const [registersuccessfully, setRegisterSuccessfully] = useState(false);
	const [userNameRegistered, setUserNameRegistered] = useState("");
	//In case of an error
	const [registerError, setRegisterError] = useState(false);
	const [registerErrorMessage, setRegisterMessage] = useState(false);

	//helper function to make first leter uppercase:
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	//on submit function
	const onSubmit = async (data) => {
		// console.log(data);

		//make first letter of name and lastname uppercase:
		let firstName = capitalizeFirstLetter(data.first_name);
		let lastName = capitalizeFirstLetter(data.last_name);

		//First loading true
		setLoadingQuery(true);
		//Create data for query
		let dataQuery = {
			name: firstName,
			lastname: lastName,
			email: data.email,
			password: data.password,
			birthday: data.birthday,
			phone: data.telefono,
		};

		try {
			//Third. Create query.
			// eslint-disable-next-line
			let newUser = await userRegister(dataQuery);
			//After insert:
			setUserNameRegistered(firstName);
			setRegisterSuccessfully(true);
			setLoadingQuery(false);
		} catch (error) {
			console.log(error.response.data.error);

			if (error.response.data.error === "User with that email already exists") {
				setRegisterMessage(
					"Ya existe un usuario con el correo ingresado. Por favor compruebe si ya este registrado o utilice otro correo."
				);
			}

			//Make loginError state true
			setRegisterError(true);
			//Stop the loading query spinner
			setLoadingQuery(false);
		}
	};

	//Jsx element:
	const testError = (variant, text) => (
		<CustomAlert
			variant={variant}
			text={text}
			className="d-flex justify-content-center"
		/>
	);

	return (
		<>
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

			{/* registro exitoso */}
			<div>
				{registersuccessfully && loadingQuery === false && (
					<>
						<br />
						<br />
						<Alert variant="success">
							<Alert.Heading className="d-flex justify-content-center">
								Gracias {userNameRegistered}, tu registro fue exitoso!
							</Alert.Heading>
							<br />
							<p className="d-flex justify-content-center">
								Revisa la casilla de email para poder confirmar tu cuenta y
								comenzar a usar la web!
							</p>
							<p className="d-flex justify-content-center">
								En caso de no recibir ningun correo, por favor contactar con
								soporte C:
							</p>
						</Alert>
						<br />
						<br />
					</>
				)}
			</div>

			{/* form */}
			{loadingQuery === false && registersuccessfully === false && (
				<>
					<Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						{/* Nombre y apellido */}
						<Row>
							{/* nombre */}
							<Col>
								{/* form group for store name */}
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Nombre: </Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese su nombre"
										{...register("first_name", {
											required: true,
											maxLength: 22,
											pattern: /^[a-zA-Z ]*$/,
										})}
									/>
									<Form.Text className="text-muted">
										{errors.first_name?.type === "required" && (
											<Alert variant="danger">
												Es obligatorio escribir el nombre.
											</Alert>
										)}
										{errors.first_name?.type === "maxLength" && (
											<Alert variant="danger">
												Maximo de caracteres de nombre: 22.
											</Alert>
										)}
										{errors.first_name?.type === "pattern" && (
											<Alert variant="danger">Ingrese unicamente letras.</Alert>
										)}
									</Form.Text>
								</Form.Group>
							</Col>
							{/* apellido */}
							<Col>
								<Form.Group className="mb-3" controlId="formBasicLastName">
									<Form.Label>Apellido:</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese su apellido"
										{...register("last_name", {
											required: true,
											maxLength: 22,
											pattern: /^[a-zA-Z ]*$/,
										})}
									/>
									<Form.Text className="text-muted">
										{errors.last_name?.type === "required" && (
											<Alert variant="danger">
												Es obligatorio escribir el apellido.
											</Alert>
										)}

										{errors.last_name?.type === "maxLength" && (
											<Alert variant="danger">
												Maximo de caracteres de apellido: 22.
											</Alert>
										)}
										{errors.last_name?.type === "pattern" && (
											<Alert variant="danger">Ingrese unicamente letras.</Alert>
										)}
									</Form.Text>
								</Form.Group>
							</Col>
						</Row>

						{/* form group for email */}
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Correo electronico</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								{...register("email", { required: true })}
							/>
							<Form.Text className="text-muted">
								{errors.email?.type === "required" && (
									<Alert variant="danger">
										Es obligatorio escribir el correo
									</Alert>
								)}
							</Form.Text>
						</Form.Group>

						{/* form group for password */}
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Contraseña: </Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								{...register("password", {
									required: true,
									minLength: 6,
									maxLength: 18,
								})}
							/>
							<Form.Text className="text-muted">
								{errors.password?.type === "required" && (
									<Alert variant="danger">
										Es obligatorio escribir la contraseña
									</Alert>
								)}
								{errors.password?.type === "minLength" && (
									<Alert variant="danger">
										Minimo de contraseña: 6 caracteres
									</Alert>
								)}
								{errors.password?.type === "maxLength" && (
									<Alert variant="danger">
										Maximo de contraseña: 18 caracteres
									</Alert>
								)}
							</Form.Text>
						</Form.Group>

						{/* telefono y cumple */}
						<Row>
							{/* nombre */}
							<Col>
								{/* form group for phone number */}
								<Form.Group className="mb-3" controlId="formBasicTelefono">
									<Form.Label>Numero de contacto: </Form.Label>
									<Form.Control
										type="number"
										placeholder="Numero de telefono"
										{...register("telefono", {
											required: true,
											minLength: 8,
											maxLength: 12,
										})}
									/>
									<Form.Text className="text-muted">
										{errors.telefono?.type === "required" && (
											<Alert variant="danger">
												Es obligatorio escribir un telefono de contacto
											</Alert>
										)}
										{errors.telefono?.type === "minLength" && (
											<Alert variant="danger">Minimo 8 caracteres.</Alert>
										)}
										{errors.telefono?.type === "maxLength" && (
											<Alert variant="danger">Minimo 12 caracteres.</Alert>
										)}
									</Form.Text>
								</Form.Group>
							</Col>
							{/* phone & Birthday */}
							<Col>
								<Form.Group className="mb-3" controlId="formBasicBirthday">
									<Form.Label>Fecha de nacimiento </Form.Label>
									<Form.Control
										type="date"
										{...register("birthday", {
											required: true,
										})}
									/>
									<Form.Text className="text-muted">
										{errors.birthday?.type === "required" && (
											<Alert variant="danger">
												Es obligatorio colocar su fecha de nacimiento
											</Alert>
										)}
									</Form.Text>
								</Form.Group>
							</Col>
						</Row>

						<Button variant="primary" type="submit">
							Registrar Usuario
						</Button>
					</Form>
				</>
			)}

			{/* Message in error case */}
			{registerError &&
				loadingQuery === false &&
				registersuccessfully === false && (
					<>
						<br />
						{testError("danger", registerErrorMessage)}
						{/* {testError("danger", "peperoni")} */}
					</>
				)}
		</>
	);
};

export default RegisterUserForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//Import queries
import { userLogin, storeLogin } from "../../../services/AuthAPI";

//Import context
import { useContext } from "react";
import AuthContext from "../../../context/AuthContex";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";

//styles
import {
	Box,
	Paper,
	Grid,
	ToggleButtonGroup,
	ToggleButton,
	Button,
	TextField,
} from "@mui/material";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

//#TODO: falta agregar cuando el user no esta verificado
const LoginForm = () => {
	const { logInAddCookies } = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//States
	const [loadingQuery, setLoadingQuery] = useState(false);
	//successfully login
	const [loginsuccessfully, setLoginSuccessfully] = useState(false);

	//In case of an error
	const [loginError, setLoginError] = useState(false);
	const [loginErrorMessage, setLoginErrorMessage] = useState(false);

	//Handle toggle button
	const [alignment, setAlignment] = React.useState("usuario");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	//Handle show password:
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	//Handle submit:
	const onSubmit = async (data) => {
		console.log("submit data: ", data);
		// setLoadingQuery(true);
		// //Check acc type, and make query
		// if (data.accType === "user") {
		// 	//Try login data
		// 	try {
		// 		let userLoginQ = await userLogin(data);
		// 		// console.log("Response: ", userLoginQ);
		// 		//Save data in cookies after good login:
		// 		logInAddCookies({
		// 			ajt: userLoginQ.data.jwtToken,
		// 			accType: "user",
		// 			accId: userLoginQ.data.userData.id,
		// 			name: userLoginQ.data.userData.first_name,
		// 			email: userLoginQ.data.userData.email,
		// 		});
		// 		//Finish all log in process
		// 		setLoginSuccessfully(true);
		// 		setLoadingQuery(false);
		// 		//After succes login, redirect to homePage
		// 		if (setLoginSuccessfully) {
		// 			setTimeout(() => {
		// 				navigate("/");
		// 			}, 1500);
		// 		}
		// 	} catch (error) {
		// 		//In case of bad attemp:
		// 		//First. Get the error message:
		// 		// console.log("testing: ", error.response.data.error);
		// 		if (error.response.data.error === "Email does not exist") {
		// 			setLoginErrorMessage(
		// 				"No se pudo encontrar el correo. Por favor revise los datos e intente nuevamente"
		// 			);
		// 		} else if (error.response.data.error === "Password incorrect") {
		// 			setLoginErrorMessage(
		// 				"Contraseña incorrecta o invalida. Por favor revise los datos e intente nuevamente"
		// 			);
		// 		}
		// 		//Make loginError state true
		// 		setLoginError(true);
		// 		//Stop the loading query spinner
		// 		setLoadingQuery(false);
		// 	}
		// } else if (data.accType === "store") {
		// 	setLoadingQuery(true);
		// 	try {
		// 		let storeLoginQ = await storeLogin(data);
		// 		// console.log("Response: ", storeLoginQ);
		// 		logInAddCookies({
		// 			ajt: storeLoginQ.data.jwtToken,
		// 			accType: "store",
		// 			accId: storeLoginQ.data.storeAcc.id,
		// 			name: storeLoginQ.data.storeAcc.name,
		// 			email: storeLoginQ.data.storeAcc.email,
		// 		});
		// 		//Finish all log in process
		// 		setLoginSuccessfully(true);
		// 		setLoadingQuery(false);
		// 		//Redirect to homePage
		// 		//if theres userLogin.user.uid it bc login was 100% succesfull
		// 		if (setLoginSuccessfully) {
		// 			setTimeout(() => {
		// 				navigate("/");
		// 			}, 1500);
		// 		}
		// 	} catch (error) {
		// 		//In case of bad attemp:
		// 		//First. Make login error true
		// 		if (error.response.data.error === "Email not vinculated to any store") {
		// 			setLoginErrorMessage(
		// 				"No se pudo encontrar el correo. Por favor revise los datos e intente nuevamente"
		// 			);
		// 		} else if (error.response.data.error === "Password incorrect") {
		// 			setLoginErrorMessage(
		// 				"Contraseña incorrecta o invalida. Por favor revise los datos e intente nuevamente"
		// 			);
		// 		}
		// 		//Make loginError state true
		// 		setLoginError(true);
		// 		//Stop the loading query spinner
		// 		setLoadingQuery(false);
		// 	}
		// }
	};

	const testError = (variant, text) => (
		<CustomAlert
			variant={variant}
			text={text}
			className="d-flex justify-content-center"
		/>
	);

	return (
		<div>
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
				{loginsuccessfully && loadingQuery === false && (
					<>
						<br />
						<br />
						<Alert variant="success">
							<Alert.Heading className="d-flex justify-content-center">
								Ingreso exitoso!
							</Alert.Heading>
							<br />
							<p className="d-flex justify-content-center">
								En instantes sera redireccionado... aguarde por favor!
							</p>
						</Alert>
						<br />
						<br />
					</>
				)}
			</div>

			{loadingQuery === false && loginsuccessfully === false && (
				<>
					<Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						{/* form group for radio input for user/store */}
						<Grid>
							<Paper
								elevation={12}
								style={{ padding: 20, margin: "20px auto" }}
							>
								<Grid>
									<ToggleButtonGroup
										color="primary"
										value={alignment}
										exclusive
										onChange={handleChange}
										aria-label="Platform"
									>
										<ToggleButton value="usuario">Usuario</ToggleButton>

										<ToggleButton value="tienda">Tienda</ToggleButton>
									</ToggleButtonGroup>
								</Grid>
								<Grid>
									<TextField
										id="filled-basic"
										label="Filled"
										variant="filled"
										{...register("email2", { required: true })}
									/>
								</Grid>
								<Grid>
									<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
										<InputLabel htmlFor="outlined-adornment-password">
											Password
										</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showPassword ? "text" : "password"}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
														edge="end"
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
											label="Password"
										/>
									</FormControl>
								</Grid>
							</Paper>
						</Grid>

						<Form.Group controlId="formBasicAccType">
							<Form.Label>Tipo de usuario: </Form.Label>
							<br />
							<Form.Check
								inline
								key={"check1"}
								value="user"
								type="radio"
								aria-label="radio 1"
								label="Usuario"
								{...register("accType", { required: true })}
							/>
							<Form.Check
								inline
								key={"check2"}
								value="store"
								type="radio"
								aria-label="radio 2"
								label="Tienda"
								{...register("accType", { required: true })}
							/>
							<Form.Text className="text-muted">
								{errors.email?.type === "required" && (
									<Alert variant="danger">
										Es obligatorio seleccionar tipo de cuenta
									</Alert>
								)}
							</Form.Text>
						</Form.Group>

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

						<Button variant="contained" type="submit">
							Logear
						</Button>
					</Form>
					<br />
				</>
			)}

			{loginError && loadingQuery === false && loginsuccessfully === false && (
				<>
					{testError("danger", loginErrorMessage)}
					{/* {testError("danger", "peperoni")} */}
				</>
			)}
		</div>
	);
};

export default LoginForm;

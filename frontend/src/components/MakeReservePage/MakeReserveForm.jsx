import React from "react";
import { useForm } from "react-hook-form";

//Material Ui
import {
	Box,
	Paper,
	Grid,
	FormControl,
	TextField,
	Button,
	Alert,
} from "@mui/material";

const MakeReserveForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//on submit handler
	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<>
			<form
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
				className="border border-primary"
			>
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={12} md={12}>
							<FormControl>
								<TextField
									type="text"
									id="outlined-basic"
									label="Comentarios"
									variant="outlined"
									placeholder="pepepepepe"
									{...register("comment", { required: true })}
								/>
								{errors.comment?.type === "required" && (
									<Alert severity="error">Por favor ingrese su nombre</Alert>
								)}
							</FormControl>
						</Grid>
						<Grid>
							<Button variant="contained" type="submit">
								Reservar
							</Button>
						</Grid>
					</Grid>
				</Box>
			</form>
		</>
	);
};

export default MakeReserveForm;

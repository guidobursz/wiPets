import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { userRegister } from "../../../services/AuthAPI";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";
import AlertBootstrap from "../../AlertBootstrap";
//Bootstrap styles
import {
  Alert,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
// test time picker
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// test time picker
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
    console.log(data);

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

    console.log("data pre query: ", dataQuery);
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
            <AlertBootstrap
              heading={`Gracias ${userNameRegistered}, tu registro fue exitoso!`}
              t1={`Revisa la casilla de email para poder confirmar tu cuenta y
                comenzar a usar la web!`}
              t2={`En caso de no recibir ningun correo, por favor contactar con
                soporte C:`}
            />
            <br />
            <br />
          </>
        )}
      </div>

      {/* form */}
      {loadingQuery === false && registersuccessfully === false && (
        <>
          <br />
          {/* new form with material ui*/}
          <Box>
            <Paper elevation={12}>
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} padding={1}>
                  <Grid item align="center" xs={12} md={12} lg={12}>
                    <Typography variant="h4">Registro de usuario</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        {...register("first_name", {
                          required: true,
                          maxLength: 22,
                          pattern: /^[a-zA-Z ]*$/,
                        })}
                      />
                      {errors.first_name?.type === "required" && (
                        <Alert severity="error">
                          <Typography>
                            Es obligatorio escribir el nombre.
                          </Typography>
                        </Alert>
                      )}
                      {errors.first_name?.type === "maxLength" && (
                        <Alert variant="danger">
                          <Typography>
                            Es obligatorio escribir el nombre.
                          </Typography>
                        </Alert>
                      )}
                      {errors.first_name?.type === "pattern" && (
                        <Alert variant="danger">
                          <Typography>
                            Es obligatorio escribir el nombre.
                          </Typography>
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        label="Apellido"
                        variant="outlined"
                        {...register("last_name", {
                          required: true,
                          maxLength: 22,
                          pattern: /^[a-zA-Z ]*$/,
                        })}
                      />
                      {errors.last_name?.type === "required" && (
                        <Alert severity="error">
                          <Typography>
                            Es obligatorio escribir el apellido.
                          </Typography>
                        </Alert>
                      )}
                      {errors.last_name?.type === "maxLength" && (
                        <Alert variant="danger">
                          <Typography>
                            Es obligatorio escribir el apellido.
                          </Typography>
                        </Alert>
                      )}
                      {errors.last_name?.type === "pattern" && (
                        <Alert variant="danger">
                          <Typography>
                            Es obligatorio escribir el apellido.
                          </Typography>
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        label="Correo"
                        variant="outlined"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      {errors.email?.type === "required" && (
                        <Alert severity="error">
                          <Typography>
                            Es obligatorio escribir el correo.
                          </Typography>
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        type={"password"}
                        label="Contraseña"
                        variant="outlined"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 22,
                        })}
                      />
                      {errors.password?.type === "required" && (
                        <Alert severity="error">
                          <Typography>
                            Es obligatorio escribir una contraseña.
                          </Typography>
                        </Alert>
                      )}
                      {errors.password?.type === "minLength" && (
                        <Alert variant="error">
                          <Typography>
                            El minimo de la contraseña es de 6 caracteres.
                          </Typography>
                        </Alert>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <Alert variant="error">
                          <Typography>
                            El maximo de la contraseña es de 22 caracteres.
                          </Typography>
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        type={"number"}
                        label="Telefono"
                        variant="outlined"
                        {...register("telefono", {
                          required: true,
                          minLength: 8,
                          maxLength: 13,
                        })}
                      />
                      {errors.telefono?.type === "required" && (
                        <Alert severity="error">
                          <Typography>
                            Es obligatorio escribir un telefono.
                          </Typography>
                        </Alert>
                      )}
                      {errors.telefono?.type === "minLength" && (
                        <Alert severity="error">
                          <Typography>Minimo 8 caracteres.</Typography>
                        </Alert>
                      )}
                      {errors.telefono?.type === "maxLength" && (
                        <Alert severity="error">
                          <Typography>Minimo 12 caracteres.</Typography>
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        label="Fecha de nacimiento"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...register("birthday", {
                          required: true,
                        })}
                      />
                      {errors.birthday?.type === "required" && (
                        <Alert severity="error">
                          Es obligatorio colocar su fecha de nacimiento.
                        </Alert>
                      )}
                    </FormControl>
                    {/*
no funco
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        label="Fecha de nacimiento"
                        inputFormat="MM/DD/YYYY"
                        renderInput={(params) => <TextField {...params} />}
                        value={dateValue}
                        onChange={handleDateChange}
                        {...register("birthday", {
                          required: true,
                        })}
                      />
                    </LocalizationProvider>

*/}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                    <Button variant="contained" type="submit">
                      Registrar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
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

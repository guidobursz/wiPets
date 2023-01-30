import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { userRegister } from "../../../services/AuthAPI";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";

//Bootstrap styles
import {
  Alert,
  Box,
  Paper,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
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

      {/* new form with material ui*/}
      <Box>
        <Paper elevation={12}>
          <form autoComplete="false">
            <Grid container spacing={2} padding={1}>
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
                        Es obligatorio escribir el nombre.
                      </Typography>
                    </Alert>
                  )}
                  {errors.last_name?.type === "pattern" && (
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
                      maxLength: 22,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <Alert severity="error">
                      <Typography>
                        Es obligatorio escribir una contraseña".
                      </Typography>
                    </Alert>
                  )}
                  {errors.first_name?.type === "maxLength" && (
                    <Alert variant="danger">
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
                    {...register("Telefono", {
                      required: true,
                      minLength: 8,
                      maxLength: 13,
                    })}
                  />
                  {errors.telefono?.type === "required" && (
                    <Alert severity="error">
                      <Typography>
                        Es obligatorio escribir un numero de contacto.
                      </Typography>
                    </Alert>
                  )}
                  {errors.telefono?.type === "minLength" && (
                    <Alert severity="error">
                      <Typography>Minimo 8 caractereso.</Typography>
                    </Alert>
                  )}
                  {errors.telefono?.type === "maxLength" && (
                    <Alert severity="error">
                      <Typography>Minimo 12 caracteres.</Typography>
                    </Alert>
                  )}
                </FormControl>
              </Grid>

              <div></div>
            </Grid>
          </form>
        </Paper>
      </Box>

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
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            {/* Nombre y apellido */}
            {/* nombre */}
            {/* telefono y cumple */}
            <Row>
              {/* nombre */}
              <Col>{/* form group for phone number */}</Col>
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

            <Grid>
              <Button variant="contained" type="submit">
                Registrar
              </Button>
            </Grid>
          </form>
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

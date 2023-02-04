import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

//Import queries
import { userLogin, storeLogin } from "../../../services/AuthAPI";

//Import context
import { useContext } from "react";
import AuthContext from "../../../context/AuthContex";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";
import AlertBootstrap from "../../AlertBootstrap";

//styles
import {
  Alert,
  Paper,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";

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
  const [alignment, setAlignment] = React.useState("user");

  const handleChange = (event, newAlignment) => {
    console.log(newAlignment);
    setAlignment(newAlignment);
  };

  //Handle submit:
  const onSubmit = async (data) => {
    console.log("user type?: ", alignment);
    console.log(data);
    //
    //
    setLoadingQuery(true);
    //Check acc type, and make query
    if (alignment === "user") {
      //Try login data
      try {
        let userLoginQ = await userLogin(data);
        // console.log("Response: ", userLoginQ);
        //Save data in cookies after good login:
        logInAddCookies({
          ajt: userLoginQ.data.jwtToken,
          accType: "user",
          accId: userLoginQ.data.userData.id,
          name: userLoginQ.data.userData.first_name,
          email: userLoginQ.data.userData.email,
        });
        //Finish all log in process
        setLoginSuccessfully(true);
        setLoadingQuery(false);
        //After succes login, redirect to homePage
        if (setLoginSuccessfully) {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } catch (error) {
        //In case of bad attemp:
        //First. Get the error message:
        // console.log("testing: ", error.response.data.error);
        if (error.response.data.error === "Email does not exist") {
          setLoginErrorMessage(
            "No se pudo encontrar el correo. Por favor revise los datos e intente nuevamente"
          );
        } else if (error.response.data.error === "Password incorrect") {
          setLoginErrorMessage(
            "Contraseña incorrecta o invalida. Por favor revise los datos e intente nuevamente"
          );
        }
        //Make loginError state true
        setLoginError(true);
        //Stop the loading query spinner
        setLoadingQuery(false);
      }
      //same but for store login
    } else if (alignment === "store") {
      setLoadingQuery(true);
      try {
        let storeLoginQ = await storeLogin(data);
        // console.log("Response: ", storeLoginQ);
        logInAddCookies({
          ajt: storeLoginQ.data.jwtToken,
          accType: "store",
          accId: storeLoginQ.data.storeAcc.id,
          name: storeLoginQ.data.storeAcc.name,
          email: storeLoginQ.data.storeAcc.email,
        });
        //Finish all log in process
        setLoginSuccessfully(true);
        setLoadingQuery(false);
        //Redirect to homePage
        //if theres userLogin.user.uid it bc login was 100% succesfull
        if (setLoginSuccessfully) {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } catch (error) {
        //In case of bad attemp:
        //First. Make login error true
        if (error.response.data.error === "Email not vinculated to any store") {
          setLoginErrorMessage(
            "No se pudo encontrar el correo. Por favor revise los datos e intente nuevamente"
          );
        } else if (error.response.data.error === "Password incorrect") {
          setLoginErrorMessage(
            "Contraseña incorrecta o invalida. Por favor revise los datos e intente nuevamente"
          );
        }
        //Make loginError state true
        setLoginError(true);
        //Stop the loading query spinner
        setLoadingQuery(false);
      }
    }
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
            <AlertBootstrap
              heading={"Ingreso exitoso!"}
              t1="En instantes sera redireccionado... aguarde por favor!"
              t2=""
            />
            <br />
            <br />
          </>
        )}
      </div>

      {loadingQuery === false && loginsuccessfully === false && (
        <>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            {/* form group for radio input for user/store */}
            <Grid>
              <Paper elevation={8} style={{ padding: 20, margin: "20px auto" }}>
                <Grid align="center">
                  <h3>Inicie sesion</h3>
                </Grid>
                <Grid align="center" className="mt-3 mb-3">
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="user">USUARIO</ToggleButton>
                    <ToggleButton value="store">TIENDA</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid align="center" className="mb-3">
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "75%", md: "58%" } }}
                  >
                    <TextField
                      type="text"
                      label="Correo"
                      variant="outlined"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                      <Alert severity="error" align="center">
                        <Typography align="center">
                          Por favor ingrese su correo registrado
                        </Typography>
                      </Alert>
                    )}
                  </FormControl>
                </Grid>

                <Grid align="center" className="mb-2">
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "75%", md: "58%" } }}
                  >
                    <TextField
                      type="password"
                      label="contraseña"
                      variant="outlined"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 18,
                      })}
                    />

                    {errors.password?.type === "required" && (
                      <Alert severity="error">
                        <Typography>Por favor ingrese su contraseña</Typography>
                      </Alert>
                    )}
                    {errors.password?.type === "minLength" && (
                      <Alert severity="error">
                        <Typography>
                          Minimo de contraseña: 6 caracteres
                        </Typography>
                      </Alert>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <Alert severity="error">
                        <Typography>
                          Maximo de contraseña: 18 caracteres
                        </Typography>
                      </Alert>
                    )}
                  </FormControl>
                </Grid>

                <Grid align="center" className="mt-3 mb-3">
                  <Button variant="contained" type="submit">
                    Logear
                  </Button>
                </Grid>

                <Grid align="center">
                  <Typography>
                    <Link href="#">Te olvidaste la contraseña?</Link>
                  </Typography>
                  <Typography>
                    No tenes una cuenta?{" "}
                    <Link to={`/register/user`}>Registrate</Link>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </form>
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

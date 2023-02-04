import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { storeRegister } from "../../../services/AuthAPI";
import { getServices } from "../../../services/GeneralAPI";

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
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
//
import Form from "react-bootstrap/Form";

const RegisterStoreForm = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //States:
  const [loadingQuery, setLoadingQuery] = useState(false);

  const [servicesOpts, setServicesOpts] = useState([
    { id: 1, description: "Veterinaria" },
    { id: 2, description: "Peluqueria" },
    { id: 3, description: "Alimento" },
    { id: 4, description: "Guarderia" },
  ]);
  //successfully register
  const [registersuccessfully, setRegisterSuccessfully] = useState(false);
  //In case of an error
  const [registerError, setRegisterError] = useState(false);
  const [registerErrorMessage, setRegisterMessage] = useState(false);

  //Handle service options from db
  //make useEffect to fetch options
  useEffect(() => {
    //create fetch functionn
    const fetchServices = async () => {
      let axiosServ = await getServices();
      let servicesAv = axiosServ.data.servicesAv;
      // console.log(servicesAv);
      setServicesOpts(servicesAv);
    };

    fetchServices();
  }, []);

  //Handle options for province and hood:
  //handle localidades for province onchange
  const [localidades, setLocalidades] = useState(["Seleccione provincia..."]);
  const [localidadesError, setLocalidadesError] = useState(false);

  const provinceOnChange = async (event) => {
    // console.log(event.target.value);
    //name selected: event.target.value
    // create query for getting options:
    try {
      let localidadesOptRaw = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${event.target.value}&campos=nombre&max=1000`
      );
      // console.log(localidadesOptRaw);
      // eslint-disable-next-line
      let localidadesOpt = await localidadesOptRaw.json().then(function (data) {
        let localidadesArray = data.localidades; //array
        let localidadesNames = localidadesArray.map((el) => el.nombre);

        // console.log("localidadesNames ", localidadesNames);
        setLocalidades(localidadesNames);
      });
    } catch (error) {
      setLocalidadesError(true);
      console.log("Error fetch localidades", error);
    }

    // console.log("localidadesOpt.localidades ", localidadesOpt.localidades);
    // setLocalidades(localidadesOpt.localidades);
  };

  //Handle submit:
  const onSubmit = async (data) => {
    //name,type,email,password,phone_number,address,adress_number,apartment,province,barrio,zip
    // console.log(data);

    //Create Query:
    let dataQuery = {
      name: data.name,
      service_types: data.services,
      email: data.email,
      password: data.password,
      phone_number: data.telefono,
      address: data.address,
      address_number: data.address_number,
      apartment: data.apartment,
      province: data.province,
      barrio: data.localidad,
      zip: data.zip,
    };

    try {
      // console.log("pre query dataobj: ", dataQuery);
      // eslint-disable-next-line
      let registerStoreQuery = await storeRegister(dataQuery);

      //After insert:
      setRegisterSuccessfully(true);
      setLoadingQuery(false);
    } catch (error) {
      //In case of error:
      //duplicate:
      // First. create error message to display
      if (
        error.response.data.error === "Store with that email already exists"
      ) {
        setRegisterMessage(
          "Ya existe una tienda con el correo ingresado. Por favor compruebe que ya este registrado o utilice otro correo."
        );
      }
      //Make loginError state true
      setRegisterError(true);
      //Stop the loading query spinner
      setLoadingQuery(false);
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
              heading="Registro exitoso!"
              t1="Revise la casilla de email para poder confirmar su cuenta!"
              t2="En caso de no recibir ningun correo, por favor contactar con soporte"
            />
            <br />
            <br />
          </>
        )}
      </div>
      {/* form */}
      {loadingQuery === false && registersuccessfully === false && (
        <>
          <Box className="mt-3 mb-3 ">
            <Paper elevation={12}>
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} padding={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre de la tienda"
                      variant="outlined"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name?.type === "required" && (
                      <Alert severity="error">
                        Es obligatorio escribir el nombre
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormGroup fullWidth>
                      <Typography align="center">
                        Por favor seleccione los servicios brindados
                      </Typography>
                      {/* render fetch  */}
                      <Grid container align="center">
                        {servicesOpts.map((el) => (
                          <>
                            <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                              <FormControlLabel
                                key={el.id}
                                control={<Checkbox />}
                                label={el.description}
                                value={Number(el.id)}
                                {...register("services", { required: true })}
                              />
                            </Grid>
                          </>
                        ))}
                      </Grid>
                      {errors.services?.type === "required" && (
                        <Alert severity="error">
                          Es obligatorio seleccionar un/varios servicios
                        </Alert>
                      )}
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      fullWidth
                      label="Correo electronico"
                      variant="outlined"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <Alert severity="error">
                        Es obligatorio escribir el correo de contacto.
                      </Alert>
                    )}
                    {errors.email?.type === "pattern" && (
                      <Alert severity="error">
                        Formato de correo invalido.
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      fullWidth
                      type={"password"}
                      label="Contraseña"
                      variant="outlined"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 18,
                      })}
                    />

                    {errors.password?.type === "required" && (
                      <Alert severity="error">
                        Es obligatorio escribir la contraseña.
                      </Alert>
                    )}
                    {errors.password?.type === "minLength" && (
                      <Alert severity="error">
                        Minimo de contraseña: 6 caracteres.
                      </Alert>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <Alert severity="error">
                        Maximo de contraseña: 18 caracteres.
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      fullWidth
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
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      fullWidth
                      label="Calle"
                      variant="outlined"
                      {...register("address", {
                        required: true,
                        minLength: 2,
                        maxLength: 30,
                      })}
                    />
                    {errors.address?.type === "required" && (
                      <Alert severity="error">
                        <Typography>
                          Es obligatorio escribir la calle del local.
                        </Typography>
                      </Alert>
                    )}
                    {errors.address?.type === "minLength" && (
                      <Alert severity="error">
                        <Typography>Minimo 2 caracteres.</Typography>
                      </Alert>
                    )}
                    {errors.address?.type === "maxLength" && (
                      <Alert severity="error">
                        <Typography>Minimo 30 caracteres.</Typography>
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      fullWidth
                      label="Altura"
                      type={"number"}
                      variant="outlined"
                      {...register("address_number", {
                        required: true,
                        minLength: 2,
                        maxLength: 5,
                      })}
                    />
                    {errors.address_number?.type === "required" && (
                      <Alert severity="error">
                        <Typography>
                          Es obligatorio escribir la altura del local.
                        </Typography>
                      </Alert>
                    )}
                    {errors.address_number?.type === "minLength" && (
                      <Alert severity="error">
                        <Typography>Minimo 2 caracteres.</Typography>
                      </Alert>
                    )}
                    {errors.address_number?.type === "maxLength" && (
                      <Alert severity="error">
                        <Typography>Minimo 5 caracteres.</Typography>
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      fullWidth
                      label="Informacion extra"
                      placeholder="Piso, Depto, etc..."
                      variant="outlined"
                      {...register("apartment", {
                        minLength: 2,
                        maxLength: 50,
                      })}
                    />
                    {errors.apartment?.type === "minLength" && (
                      <Alert severity="error">
                        Minimo de comentario: 2 caracteres.
                      </Alert>
                    )}
                    {errors.apartment?.type === "maxLength" && (
                      <Alert severity="error">
                        Maximo de comentario: 50 caracteres.
                      </Alert>
                    )}
                  </Grid>

                  {/* 
                                          NO FUNCIONO, REVISAR EN OTRO PROY
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                          <FormControl fullWidth>
                                            <InputLabel id="province-select">Provincia</InputLabel>
                                            <Select
                                              fullWidth
                                              id="province-select-input"
                                              labelId="province-select"
                                              value={provinceSelected}
                                              label="Provincia"
                                              onChange={provinceOnChange}
                                              {...register("province", {
                                                required: true,
                                              })}
                                            >
                                              <MenuItem value={"Buenos Aires"}>Buenos Aires</MenuItem>
                                              <MenuItem value={"Catamarca"}>Catamarca</MenuItem>
                                              <MenuItem value={"Ciudad Autónoma de Buenos Aires"}>
                                                Ciudad Autónoma de Buenos Aires
                                              </MenuItem>
                                              <MenuItem value="Chaco">Chaco</MenuItem>
                                              <MenuItem value="Chubut">Chubut</MenuItem>
                                              <MenuItem value="Córdoba">Córdoba</MenuItem>
                                              <MenuItem value="Corrientes">Corrientes</MenuItem>
                                              <MenuItem value="Entre Ríos">Entre Ríos</MenuItem>
                                              <MenuItem value="Formosa">Formosa</MenuItem>
                                              <MenuItem value="Jujuy">Jujuy</MenuItem>
                                              <MenuItem value="La Pampa">La Pampa"</MenuItem>
                                              <MenuItem value="La Rioja">La Rioja</MenuItem>
                                              <MenuItem value="Mendoza">Mendoza</MenuItem>
                                              <MenuItem value="Misiones">Misiones</MenuItem>
                                              <MenuItem value="Neuquén">Neuquén</MenuItem>
                                              <MenuItem value="Río Negro">Río Negro</MenuItem>
                                              <MenuItem value="Salta">Salta</MenuItem>
                                              <MenuItem value="San Juan">San Juan</MenuItem>
                                              <MenuItem value="San Luis">San Luis</MenuItem>
                                              <MenuItem value="Santa Cruz">Santa Cruz</MenuItem>
                                              <MenuItem value="Santa Fe">Santa Fe</MenuItem>
                                              <MenuItem value="Santiago del Estero">
                                                Santiago del Estero
                                              </MenuItem>
                                              <MenuItem value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">
                                                Tierra del Fuego, Antártida e Islas del Atlántico Sur
                                              </MenuItem>
                                              <MenuItem value="Tucumán">Tucumán</MenuItem>
                                            </Select>

                                            {errors.province?.type === "required" && (
                                              <Alert severity="error">
                                                Es obligatorio elegir una provincia.
                                              </Alert>
                                            )}
                                          </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                          <FormControl fullWidth>
                                            <InputLabel id="barrio-select">Barrio</InputLabel>
                                            <Select
                                              id="barrio-select-input"
                                              labelId="barrio-select"
                                              label="Barrio"
                                              defaultValue=""
                                              {...register("localidad", {
                                                required: true,
                                              })}
                                            >
                                              {localidades.map((el) => (
                                                <MenuItem
                                                  key={
                                                    el +
                                                    (Math.floor(Math.random() * 50) + 1) +
                                                    (Math.floor(Math.random() * 50) + 1) +
                                                    (Math.floor(Math.random() * 50) + 1)
                                                  }
                                                  value={el}
                                                >
                                                  {el}
                                                </MenuItem>
                                              ))}
                                            </Select>
                                            {errors.localidad?.type === "required" && (
                                              <Alert variant="danger">
                                                Es obligatorio seleccionar un barrio.
                                              </Alert>
                                            )}
                                          </FormControl>
                                        </Grid>
*/}

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicBarrio"
                        onChange={provinceOnChange}
                      >
                        <Form.Select
                          {...register("province", {
                            required: true,
                          })}
                        >
                          <option value="">Provincia</option>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="Catamarca">Catamarca</option>
                          <option value="Ciudad Autónoma de Buenos Aires">
                            Ciudad Autónoma de Buenos Aires
                          </option>
                          <option value="Chaco">Chaco</option>
                          <option value="Chubut">Chubut</option>
                          <option value="Córdoba">Córdoba</option>
                          <option value="Corrientes">Corrientes</option>
                          <option value="Entre Ríos">Entre Ríos</option>
                          <option value="Formosa">Formosa</option>
                          <option value="Jujuy">Jujuy</option>
                          <option value="La Pampa">La Pampa"</option>
                          <option value="La Rioja">La Rioja</option>
                          <option value="Mendoza">Mendoza</option>
                          <option value="Misiones">Misiones</option>
                          <option value="Neuquén">Neuquén</option>
                          <option value="Río Negro">Río Negro</option>
                          <option value="Salta">Salta</option>
                          <option value="San Juan">San Juan</option>
                          <option value="San Luis">San Luis</option>
                          <option value="Santa Cruz">Santa Cruz</option>
                          <option value="Santa Fe">Santa Fe</option>
                          <option value="Santiago del Estero">
                            Santiago del Estero
                          </option>
                          <option value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">
                            Tierra del Fuego, Antártida e Islas del Atlántico
                            Sur
                          </option>
                          <option value="Tucumán">Tucumán</option>
                        </Form.Select>

                        <Form.Text className="text-muted">
                          {errors.province?.type === "required" && (
                            <Alert severity="error">
                              Es obligatorio elegir una provincia.
                            </Alert>
                          )}
                        </Form.Text>
                      </Form.Group>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicLocalidades"
                    >
                      <Form.Select
                        {...register("localidad", {
                          required: true,
                        })}
                      >
                        {/* Si NO hay error que muestre las opciones */}
                        {localidadesError === false && (
                          <>
                            <option value="">Barrio</option>
                            {localidades.map((el) => (
                              <option
                                key={
                                  el +
                                  (Math.floor(Math.random() * 50) + 1) +
                                  (Math.floor(Math.random() * 50) + 1) +
                                  (Math.floor(Math.random() * 50) + 1)
                                }
                                value={el}
                              >
                                {el}
                              </option>
                            ))}
                          </>
                        )}
                        {/* SI HAY error que muestre las opciones */}
                        {localidadesError === true && (
                          <>
                            <option value="">Continue el registro!</option>
                          </>
                        )}
                      </Form.Select>

                      {/* SI HAY error que muestre las opciones */}
                      {localidadesError === true && (
                        <>
                          <Alert severity="error">
                            {`Por favor proporcione el barrio por correo para ser
														actualizado.\n Caso contrario la cuenta sera eliminada
														dentro de 5 dias habiles`}
                          </Alert>
                        </>
                      )}

                      <Form.Text className="text-muted">
                        {errors.address_number?.type === "required" && (
                          <Alert severity="error">
                            Es obligatorio seleccionar el barrio.
                          </Alert>
                        )}
                      </Form.Text>
                    </Form.Group>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                      fullWidth
                      type={"number"}
                      label="Zip"
                      variant="outlined"
                      {...register("zip", {
                        required: true,
                        minLength: 2,
                        maxLength: 6,
                      })}
                    />
                    {errors.zip?.type === "required" && (
                      <Alert severity="error">
                        Es obligatorio escribir la calle del negocio
                      </Alert>
                    )}
                    {errors.zip?.type === "minLength" && (
                      <Alert severity="error">Minimo 3 digitos</Alert>
                    )}
                    {errors.zip?.type === "maxLength" && (
                      <Alert severity="error">Maximo 6 digitos</Alert>
                    )}
                  </Grid>
                  <Grid xs={12} className="mt-4 mb-2" align="center">
                    <Button variant="contained" type="submit" color="success">
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

export default RegisterStoreForm;

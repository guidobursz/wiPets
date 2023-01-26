import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { storeRegister } from "../../../services/AuthAPI";
import { getServices } from "../../../services/GeneralAPI";

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RegisterStoreForm = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //States:
  const [loadingQuery, setLoadingQuery] = useState(false);

  const [servicesOpts, setServicesOpts] = useState([]);
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
  const [localidades, setLocalidades] = useState(["Cargando..."]);
  const pronviceOnChange = async (event) => {
    //name selected: event.target.value
    // create query for getting options:

    let localidadesOptRaw = await fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?provincia=${event.target.value}&campos=nombre&max=1000`
    );
    let localidadesOpt = await localidadesOptRaw.json().then(function (data) {
      let localidadesArray = data.localidades; //array
      let localidadesNames = localidadesArray.map((el) => el.nombre);

      //console.log(localidadesNames);
      setLocalidades(localidadesNames);
    });
    //setLocalidades(localidadesOpt.localidades);
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
            <Alert variant="success">
              <Alert.Heading className="d-flex justify-content-center">
                Registro exitoso!
              </Alert.Heading>
              <br />
              <p className="d-flex justify-content-center">
                Revise la casilla de email para poder confirmar su cuenta!
              </p>
              <p className="d-flex justify-content-center">
                En caso de no recibir ningun correo, por favor contactar con
                soporte
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
            {/* form group for store name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre de la tienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la tienda"
                {...register("name", { required: true })}
              />
              <Form.Text className="text-muted">
                {errors.name?.type === "required" && (
                  <Alert variant="danger">
                    Es obligatorio escribir el correo
                  </Alert>
                )}
              </Form.Text>
            </Form.Group>

            {/* form group for store service type */}
            <Form.Group className="mb-3" controlId="formBasicServType">
              <Form.Label>Tilde los servicios que ofrece</Form.Label>

              {/* display fetched options */}
              {servicesOpts.length > 0 ? (
                servicesOpts.map((el) => (
                  <Form.Check
                    key={el.id}
                    type="checkbox"
                    label={el.description}
                    value={Number(el.id)}
                    {...register("services", { required: true })}
                  />
                ))
              ) : (
                <h6>Por favor refrescar la pagina para ver las opciones</h6>
              )}

              <Form.Text>
                {errors.services?.type === "required" && (
                  <Alert variant="danger">
                    Es obligatorio seleccionar un/varios servicios
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

            {/* form group for phone number */}
            <Form.Group className="mb-3" controlId="formBasicTelefono">
              <Form.Label>Numero de contacto: </Form.Label>
              <Form.Control
                type="number"
                placeholder="Numero de telefono"
                {...register("telefono", {
                  required: true,
                  minLength: 6,
                  maxLength: 18,
                })}
              />
              <Form.Text className="text-muted">
                {errors.telefono?.type === "required" && (
                  <Alert variant="danger">
                    Es obligatorio escribir un telefono de contacto
                  </Alert>
                )}
              </Form.Text>
            </Form.Group>

            {/* Calle y altura */}
            <Row>
              <Col>
                {/* form group for address  */}
                <Form.Group className="mb-3" controlId="formBasicCalleyAltura">
                  <Form.Label>Calle: </Form.Label>
                  <Form.Control
                    inline="true"
                    type="text"
                    placeholder="Nombre de la calle"
                    {...register("address", {
                      required: true,
                      minLength: 2,
                      maxLength: 18,
                    })}
                  />
                  <Form.Text className="text-muted">
                    {errors.address?.type === "required" && (
                      <Alert variant="danger">
                        Es obligatorio escribir la calle del negocio
                      </Alert>
                    )}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                {/* form group for address_number  */}
                <Form.Group className="mb-3" controlId="formBasicAltura">
                  <Form.Label>Altura: </Form.Label>
                  <Form.Control
                    inline="true"
                    type="number"
                    placeholder="Altura direccion"
                    {...register("address_number", {
                      required: true,
                      minLength: 2,
                      maxLength: 18,
                    })}
                  />
                  <Form.Text className="text-muted">
                    {errors.address_number?.type === "required" && (
                      <Alert variant="danger">
                        Es obligatorio escribir la altura de calle del negocio
                      </Alert>
                    )}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            {/* form group for apartment  */}
            <Form.Group className="mb-3" controlId="formBasicApartment">
              <Form.Label>Informacion extra: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Piso,Depto, etc..."
                {...register("apartment", {
                  maxLength: 50,
                })}
              />
              <Form.Text className="text-muted">
                {errors.apartment?.type === "maxLength" && (
                  <Alert variant="danger">
                    Maximo de comentario: 50 caracteres
                  </Alert>
                )}
              </Form.Text>
            </Form.Group>

            <Row>
              <Col>
                {/* form group for province  */}
                <Form.Group
                  className="mb-3"
                  controlId="formBasicBarrio"
                  onChange={pronviceOnChange}
                >
                  <Form.Label>Provincia: </Form.Label>
                  <Form.Select
                    {...register("province", {
                      required: true,
                    })}
                  >
                    <option value="">Elige...</option>
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
                      Tierra del Fuego, Antártida e Islas del Atlántico Sur
                    </option>
                    <option value="Tucumán">Tucumán</option>
                  </Form.Select>

                  <Form.Text className="text-muted">
                    {errors.province?.type === "required" && (
                      <Alert variant="danger">
                        Es obligatorio elegir una provincia
                      </Alert>
                    )}
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* Para localidad: https://apis.datos.gob.ar/georef/api/localidades?provincia=Buenos%20Aires&campos=nombre&max=1000 */}
              <Col>
                {/* form group for address_number  */}
                <Form.Group className="mb-3" controlId="formBasicLocalidades">
                  <Form.Label>Localidad: </Form.Label>

                  <Form.Select
                    {...register("localidad", {
                      required: true,
                    })}
                  >
                    <option value="">Elige...</option>
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
                  </Form.Select>

                  <Form.Text className="text-muted">
                    {errors.address_number?.type === "required" && (
                      <Alert variant="danger">
                        Es obligatorio escribir la altura de calle del negocio
                      </Alert>
                    )}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                {/* form group for zip  */}
                <Form.Group className="mb-3" controlId="formBasicZip">
                  <Form.Label>Codigo posta/ Zip: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    {...register("zip", {
                      required: true,
                      minLength: 2,
                      maxLength: 6,
                    })}
                  />
                  <Form.Text className="text-muted">
                    {errors.address?.type === "required" && (
                      <Alert variant="danger">
                        Es obligatorio escribir la calle del negocio
                      </Alert>
                    )}
                    {errors.address?.type === "minLength" && (
                      <Alert variant="danger">Minimo 3 digitos</Alert>
                    )}
                    {errors.address?.type === "maxLength" && (
                      <Alert variant="danger">Maximo 6 digitos</Alert>
                    )}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Registrar
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

export default RegisterStoreForm;

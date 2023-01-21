import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Import queries
import { newPetByUser } from "../../services/PetsAPI";

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewPetForm = ({ idata }) => {
  const { userId, tokenJ } = idata;

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
  const [registerErrorMessage, setRegisterMessage] = useState("");

  //Handle submit:
  const onSubmit = async (data) => {
    // console.log(data);
    //first loadingQuery true;
    setLoadingQuery(true);

    //create query data obj
    let dataQuery = {};
    //fill properties with the data from the form:
    dataQuery.name = data.name;
    dataQuery.age = Number(data.age);
    dataQuery.gender = data.petGender;
    dataQuery.PetTypeId = data.petType;
    dataQuery.PetBreedId = data.petBreed;

    //check if there is more info.
    if (data.eiOne.length > 0) {
      dataQuery.extra_info_one = data.eiOne;
    }
    if (data.eiTwo.length > 0) {
      dataQuery.extra_info_two = data.eiTwo;
    }
    if (data.eiThree.length > 0) {
      dataQuery.extra_info_three = data.eiThree;
    }

    //Add user related data:
    dataQuery.UserId = Number(userId);

    //Check data for query
    // console.log("Data for query: ", dataQuery);

    //Make insert query;
    try {
      //try insert query:
      let newPet = await newPetByUser(dataQuery, tokenJ);
      console.log(newPet);
      //make register successfully to true;
      setRegisterSuccessfully(true);
      //set loading to false
      setLoadingQuery(false);
      //
    } catch (error) {
      //register error and message
      console.log(error);
      setRegisterError(true);
      setRegisterMessage("Hubo un error en el registro, intente nuevamente.");
      //set loading to false
      setLoadingQuery(false);
    }

    //
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
      <div>Titulo dentro del form file</div>

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

      <div className="border border-warning p-1 mb-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* name,age,gender,extra_info_one,two,three */}
          <Row>
            <Col className="col-7">
              {/* form group for pet name */}
              <Form.Group className="" controlId="formBasicName">
                <div class="d-flex justify-content-center">
                  <Form.Label>
                    <i>
                      <b>Nombre</b>
                    </i>
                  </Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
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
            </Col>
            <Col className="col-5">
              {/* form group for age */}
              <Form.Group className="" controlId="formBasicAge">
                <div class="d-flex justify-content-center">
                  <Form.Label>
                    <i>
                      <b>Edad</b>
                    </i>
                  </Form.Label>
                </div>
                <Form.Control
                  type="number"
                  placeholder="Edad"
                  {...register("age", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.age?.type === "required" && (
                    <Alert variant="danger">
                      Es obligatorio ingresar la edad{" "}
                    </Alert>
                  )}
                </Form.Text>
              </Form.Group>
              {/* form group for age */}
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="col-4">
              <Form.Group className="" controlId="formBasicPetType">
                <div class="d-flex justify-content-center">
                  <Form.Label>Animal</Form.Label>
                </div>
                <Form.Select
                  type="select"
                  {...register("petType", { required: true })}
                >
                  <option value="">Elige clase...</option>
                  <option value="1">Perro</option>
                  <option value="2">Gato</option>
                </Form.Select>

                <Form.Text className="text-muted">
                  {errors.age?.type === "required" && (
                    <Alert variant="danger">
                      Es obligatorio seleccionar la clase de animal
                    </Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group className="" controlId="formBasicPetBreed">
                <div class="d-flex justify-content-center">
                  <Form.Label>Raza</Form.Label>
                </div>
                <Form.Select
                  type="select"
                  {...register("petBreed", { required: true })}
                >
                  <option value="">Elige raza...</option>
                  <option value="1">r1</option>
                  <option value="2">r2</option>
                </Form.Select>

                <Form.Text className="text-muted">
                  {errors.petBreed?.type === "required" && (
                    <Alert variant="danger">
                      Es obligatorio seleccionar la raza
                    </Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>

            <Col className="col-4">
              <Form.Group className="" controlId="formBasicPetGender">
                <div class="d-flex justify-content-center">
                  <Form.Label>Genero</Form.Label>
                </div>
                <Form.Select
                  type="select"
                  {...register("petGender", { required: true })}
                >
                  <option value="">Elige genero...</option>
                  <option value="male">Macho</option>
                  <option value="female">Hembra</option>
                </Form.Select>

                <Form.Text className="text-muted">
                  {errors.petGender?.type === "required" && (
                    <Alert variant="danger">
                      Es obligatorio seleccionar el genero
                    </Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <br />
          {/* ex inf 1 / 2/ 3 */}
          <Row>
            <Col className="col-4">
              {/* form group for exInf1 */}
              <Form.Group className="" controlId="formBasicWord1">
                <div class="d-flex justify-content-center">
                  <Form.Label>Palabra 1</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Ej: Calmada"
                  {...register("eiOne")}
                />
                <Form.Text className="text-muted">
                  {errors.eiOne?.type === "required" && (
                    <Alert variant="danger">Es obligatorio ingresa</Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="col-4">
              {/* form group for exInf2 */}
              <Form.Group className="" controlId="formBasicWord2">
                <div class="d-flex justify-content-center">
                  <Form.Label>Palabra 2</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juguetona"
                  {...register("eiTwo")}
                />
                <Form.Text className="text-muted">
                  {errors.eiTwo?.type === "required" && (
                    <Alert variant="danger">Es ob</Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="col-4">
              {/* form group for exInf3 */}
              <Form.Group className="" controlId="formBasicWord3">
                <div class="d-flex justify-content-center">
                  <Form.Label>Palabra 3</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Ej: linda"
                  {...register("eiThree")}
                />
                <Form.Text className="text-muted">
                  {errors.eiThree?.type === "required" && (
                    <Alert variant="danger"></Alert>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <div class="mt-3 mb-1 d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Agregar!
            </Button>
          </div>
        </Form>
      </div>

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

export default NewPetForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //States:
  const [openState, setOpenState] = useState(false);

  const [data, setData] = useState("");
  //For open/close:
  const openFilters = () => {
    if (openState === false) {
      //hacer la api call
      setData("testing... se deberia ver");
    } else if (openState === true) {
      setData("");
    }
    //Make openState state the opposite
    setOpenState(!openState);
    console.log(openState);
  };
  //End open/close

  //Handle submit
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* If state is closed = not display */}
      {!openState && (
        <>
          <div className="divContainer border border-danger">
            <div className="divTop border border-success p-1">
              <Row className="d-flex align-items-center">
                <Col>
                  <h3 style={{ verticalAlign: "bottom" }}>Filtros</h3>
                </Col>
                <Col className="d-flex justify-content-end">
                  <BsFillArrowLeftCircleFill size={30} onClick={openFilters} />
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
      {/* If state is open = display */}
      {openState && (
        <>
          <div className="divContainer border border-danger">
            <div className="divTop border border-success p-1">
              <Row>
                <Col>
                  <h3 style={{ verticalAlign: "bottom" }}>Filtros</h3>
                </Col>
                <Col className="d-flex justify-content-end">
                  <BsFillArrowDownCircleFill size={30} onClick={openFilters} />
                </Col>
              </Row>
            </div>
            <div className="divChild">
              <p>{data}</p>

              <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="primer-input">
                    {/* form group for store name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nombre de la tienda</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese nombre de la tienda"
                        {...register("storeName")}
                      />
                      <Form.Text className="text-muted">
                        {errors.storeName?.type === "required" && (
                          <Alert variant="danger">Es obligatorio</Alert>
                        )}
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col className="second-input">
                    {/* form group for store name */}
                    <Form.Group className="mb-3" controlId="formBasicPetName">
                      <Form.Label>Nombre de la mascota</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese nombre de la tienda"
                        {...register("petName")}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    {/* form group for store service type */}
                    <Form.Group className="mb-3" controlId="formBasicServType">
                      <Form.Label>Tilde los servicios que ofrece</Form.Label>

                      <Form.Check
                        type="checkbox"
                        label="Veterinaria"
                        {...register("veterinaria")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Peluqueria"
                        {...register("peluqueria")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Lavadero"
                        {...register("lavadero")}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    {/* form group for status filter */}

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicStatuesType"
                    >
                      <Form.Label>Estado:</Form.Label>

                      <Form.Check
                        type="checkbox"
                        label="Pendientes"
                        {...register("pendientes")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="confirmados"
                        {...register("confirmados")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Cancelados"
                        {...register("cancelados")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="contactar"
                        {...register("contactar")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="completados"
                        {...register("completados")}
                      />
                    </Form.Group>
                  </Col>

                  <Button variant="primary" type="submit">
                    Filtrar
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilterInputs;

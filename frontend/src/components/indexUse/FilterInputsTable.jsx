import React, { useState } from "react";
import { useForm } from "react-hook-form";

//import components
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterInputsTable = ({ setQueryParams }) => {
  const { register, handleSubmit } = useForm();

  //States:
  const [openState, setOpenState] = useState(false);

  //For open/close:
  const openFilters = () => {
    //Make openState state the opposite
    setOpenState(!openState);
    // console.log(openState);
  };
  //End open/close

  //Handle submit
  const onSubmit = async (data) => {
    // console.log(data);
    let query = { storeName: data.storeName };
    if (data.services === false) {
      query.services = [];
    } else {
      query.services = data.services;
    }
    // console.log(query);
    setQueryParams(query);
    setOpenState(false);
  };
  return (
    <>
      {/* If state is closed = not display */}
      {!openState && (
        <>
          <div className="divContainer">
            <div className="divTop border border-warning p-1">
              <Row className="d-flex align-items-center">
                <Col>
                  <h4 style={{ verticalAlign: "bottom" }}>
                    Filtros de busqueda
                  </h4>
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
          <div className="divContainer border border-warning">
            <div className="divTop border p-1">
              <Row>
                <Col>
                  <h4 style={{ verticalAlign: "bottom" }}>
                    Filtros de busqueda
                  </h4>
                </Col>
                <Col className="d-flex justify-content-end">
                  <BsFillArrowDownCircleFill size={30} onClick={openFilters} />
                </Col>
              </Row>
            </div>
            <hr />
            <div className="divChild">
              <Form
                autoComplete="off"
                className="p-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Row>
                  <Col className="primer-input col-6">
                    {/* form group for store name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <div class="d-flex justify-content-center">
                        <div>
                          <Form.Label>
                            <u>
                              <i>
                                <b>Nombre del local</b>
                              </i>
                            </u>
                          </Form.Label>
                        </div>
                      </div>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese nombre de la tienda"
                        {...register("storeName")}
                      />
                    </Form.Group>
                  </Col>

                  <Col className="third-input col-6">
                    {/* form group for store service type */}
                    <Form.Group className="mb-3" controlId="formBasicServType">
                      <div class="d-flex justify-content-center">
                        <div>
                          <Form.Label>
                            <u>
                              <i>
                                <b>Servicios</b>
                              </i>
                            </u>
                          </Form.Label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <div>
                          <Form.Check
                            type="checkbox"
                            label="Veterinaria"
                            value={1}
                            {...register("services")}
                          />
                          <Form.Check
                            type="checkbox"
                            label="Peluqueria"
                            value={2}
                            {...register("services")}
                          />
                          <Form.Check
                            type="checkbox"
                            label="Alimento"
                            value="3"
                            {...register("services")}
                          />
                          <Form.Check
                            type="checkbox"
                            label="Guarderia"
                            value="4"
                            {...register("services")}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <div class="d-flex justify-content-center">
                  <Button variant="primary" type="submit">
                    Filtrar
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilterInputsTable;

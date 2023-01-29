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

  //Handling barrio opts

  const [localidades, setLocalidades] = useState(["Elige provincia"]);
  const proviceOnChange = async (event) => {
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

  //Handle submit
  const onSubmit = async (data) => {
    console.log(data);
    let query = {
      storeName: data.storeName,
      province: data.province,
      barrio: data.barrio,
    };
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
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      onChange={proviceOnChange}
                      controlId="formBasicBarrio"
                    >
                      <div class="d-flex justify-content-center">
                        <div>
                          <Form.Label>
                            <u>
                              <i>
                                <b>Provincia</b>
                              </i>
                            </u>
                          </Form.Label>
                        </div>
                      </div>
                      <Form.Select {...register("province")}>
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
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicLocalidades"
                    >
                      <div class="d-flex justify-content-center">
                        <div>
                          <Form.Label>
                            <u>
                              <i>
                                <b>Barrio</b>
                              </i>
                            </u>
                          </Form.Label>
                        </div>
                      </div>
                      <Form.Select {...register("barrio")}>
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

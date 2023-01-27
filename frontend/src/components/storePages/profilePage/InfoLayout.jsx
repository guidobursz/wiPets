import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//Import queries

//import components
import CustomAlert from "../../CustomAlert";
import SpinnerBootstrap from "../../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InfoLayout = ({ loading, storeInfo, storeServices }) => {
  //Having trouble sending and trying to get services with the storeInfo obj
  // console.log(storeInfo);
  // so i get here the store services array by another param
  // console.log(storeServices);
  // console.log(storeInfo.Services);
  // console.log(loading);
  // let loading = false;
  return (
    <>
      {/* div for center spinner */}
      <div className="mx-auto">
        {loading && (
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

      {/* for displaying the user info box */}
      {loading === false && storeInfo && (
        <>
          <div className="mt-2 mb-2 p-2 rounded border border-success justify-content-center text-center">
            <Row>
              <Col sm={5}>
                <Row
                  className="justify-content-center text-center mb-3 d-flex"
                  style={{ height: "100%" }}
                >
                  <div
                    style={{ width: "180px", height: "180px" }}
                    className="border border-success "
                  >
                    Img
                  </div>
                </Row>
              </Col>
              <Col sm={7}>
                <div
                  style={{ height: "100%" }}
                  className="d-flex flex-column justify-content-center"
                >
                  <div className="">
                    <Row className="mt-2 mb-2">
                      <Col>
                        <h5>
                          <b>
                            <i>Nombre de la tienda</i>
                          </b>
                        </h5>
                        <div>{storeInfo.name}</div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Row>
                        <Col>
                          <h5>
                            <b>
                              <i>Servicios</i>
                            </b>
                          </h5>
                        </Col>
                      </Row>
                      <Row>
                        {storeServices.length >= 1 ? (
                          storeInfo.Services.map((el) => (
                            <Col key={el.id}>{el.description}</Col>
                          ))
                        ) : (
                          <Col>Error al cargar</Col>
                        )}
                        {/*
                          storeInfo.Services.map((el) => (
                          <Col>{el.description}</Col>
                        ))
                        */}
                      </Row>
                    </Row>
                  </div>

                  <div>
                    <Row className="mt-2 mb-2">
                      <Col>
                        <h5>
                          <b>
                            <i>Email</i>
                          </b>
                        </h5>
                        <div>{storeInfo.email}</div>
                      </Col>
                      <Col>
                        <h5>
                          <b>
                            <i>Telefono</i>
                          </b>
                        </h5>
                        <div>{storeInfo.phone_number}</div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="mt-2 mb-2">
                      <Col>
                        <h5>
                          <b>
                            <i>Calle</i>
                          </b>
                        </h5>
                        <div>{storeInfo.address}</div>
                      </Col>
                      <Col>
                        <h5>
                          <b>
                            <i>Altura</i>
                          </b>
                        </h5>
                        <div>{storeInfo.address_number}</div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="mt-2 mb-2">
                      <Col>
                        <h5>
                          <b>
                            <i>Provincia</i>
                          </b>
                        </h5>
                        <div>{storeInfo.province}</div>
                      </Col>
                      <Col>
                        <h5>
                          <b>
                            <i>Barrio</i>
                          </b>
                        </h5>
                        <div>{storeInfo.barrio}</div>
                      </Col>
                      <Col>
                        <h5>
                          <b>
                            <i>Zip</i>
                          </b>
                        </h5>
                        <div>{storeInfo.zip}</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="mt-1">
              <Row>
                <Col className="justify-content-center text-center mt-1 mb-2">
                  <div style={{ width: "80%" }}>
                    <Button>Cambiar imagen de perfil</Button>
                  </div>
                </Col>
                <Col className="justify-content-center text-center mt-1 mb-2">
                  <div style={{ width: "80%" }}>
                    <Button>Cambiar Password</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InfoLayout;

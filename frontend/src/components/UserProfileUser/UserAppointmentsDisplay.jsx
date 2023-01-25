import React, { useState } from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getThreeFollwingAppointmentsByUserId } from "../../services/AppointmentsAPI";

//import components
import CustomAlert from "../CustomAlert";
import SpinnerBootstrap from "../SpinnerBootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import ReactDataTable from "../ReactDataTable";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import context
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const UserAppointmentsDisplay = () => {
  //Get userId
  let params = useParams();
  let userId = params.id;
  //Get context data for jwt:
  const { accInfo } = useContext(AuthContext);
  let tokenJ = accInfo.ajt;

  //States:
  //For open/close:
  const [openState, setOpenState] = useState(false);
  //For getting data:
  const [loading, setLoading] = useState(false);
  const [userAppointments, setUserAppointments] = useState([]);

  //For open/close:
  const openFilters = async (e) => {
    if (openState === false) {
      //make loading true bc of the api call
      setLoading(true);
      //Api call:
      let userAppoints = await getThreeFollwingAppointmentsByUserId(
        userId,
        tokenJ
      );
      // console.log(userAppoints.data.ThreeFollowingAppointments);
      //Save the data in the state
      setUserAppointments(userAppoints.data.ThreeFollowingAppointments);
      //Make loading false
      setLoading(false);
    } else if (openState === true) {
      setUserAppointments([]);
    }
    //Make openState state the opposite
    setOpenState(!openState);
  };
  //End open/close

  //Create data for table:
  const columns = [
    {
      name: "Dia",
      selector: (row) => row.date,
    },
    {
      name: "Hora",
      selector: (row) => row.time,
    },
    {
      name: "Comentario",
      selector: (row) => row.comment,
    },
    {
      name: "Local",
      selector: (row) => row.Store.name,
    },
    {
      name: "Mascota",
      selector: (row) => row.Pet.name,
    },
    {
      name: "Estado",
      selector: (row) => row.Status.description,
    },
  ];

  return (
    <>
      {/* If state is closed = not display */}
      {!openState && (
        <>
          <div className="mt-2 mb-1 p-2 rounded border border-warning">
            <div className="divTop p-1">
              <Row className="d-flex align-items-center">
                <Col>
                  <h3>Proximas reservas</h3>
                </Col>
                <Col
                  className="d-flex justify-content-end"
                  style={{ height: "39px" }}
                >
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
          <div className="mt-2 mb-1 p-2 rounded border border-warning">
            <div className="divContainer ">
              <div className="divTop p-1">
                <Row className="d-flex align-items-center">
                  <Col>
                    <h3>Proximas reservas</h3>
                  </Col>
                  <Col
                    className="d-flex justify-content-end"
                    style={{ height: "39px" }}
                  >
                    <BsFillArrowDownCircleFill
                      size={30}
                      onClick={openFilters}
                    />
                  </Col>
                </Row>
              </div>
              {/* comienza el children div: */}
              <div className="divChild">
                {/* Spinner */}
                {/* div for center spinner */}
                <div className="mx-auto">
                  {loading && (
                    <>
                      <br />
                      <br />
                      <h4 className="d-flex justify-content-center">
                        Cargando...
                      </h4>
                      <div className="d-flex justify-content-center">
                        <SpinnerBootstrap />
                      </div>
                      <br />
                      <br />
                    </>
                  )}
                </div>

                {/* displaying pets */}
                {/* displaying animals */}
                <div className="mt-2 mb-1 p-2 ">
                  {/* #TODO: falta confirmar una segunda condicion para el render de lo de adentro */}
                  {/* displaying animals */}
                  {/* #TODO: falta confirmar una segunda condicion para el render de lo de adentro */}
                  {loading === false && (
                    <>
                      <div className="">
                        <div>
                          <div className="d-flex flex-row gx-1 justify-content-center text-center">
                            {/* Aca hacemos el .map de la info que se va a destructurar */}
                            {userAppointments.length === 0 ? (
                              <p>No se reservas en la base de datos...</p>
                            ) : (
                              <ReactDataTable
                                columns={columns}
                                data={userAppointments}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserAppointmentsDisplay;

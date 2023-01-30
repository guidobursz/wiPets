//This will fetch and get verified stores, and make a table
import { Link } from "react-router-dom";
//Bootstrap
import Table from "react-bootstrap/Table";
//MUI
import { Typography } from "@mui/material";
//Import components
import SpinnerBootstrap from "../SpinnerBootstrap";
import MuiTable from "./MuiTable";
//Import components
//

const TableLayout = ({ data }) => {
  // console.log(data);
  if (data.storesList === undefined) {
    return (
      <>
        {/* div for center spinner */}
        <div className="mx-auto">
          {data.loadingQuery === true && (
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

        <div>Hubo un problema al cargar los datos...</div>
      </>
    );
  } else {
    return (
      <>
        {/* div for center spinner */}
        <div className="mx-auto">
          {data.loadingQuery === true && (
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

        <h4>lograr hacer una tablA RESPONSIVE</h4>
        <div className="">
          <Table striped bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>Nombre</th>
                <th>Servicios</th>
                <th>Barrio</th>
                <th>Provincia</th>
              </tr>
            </thead>
            <tbody>
              {data.storesList.map((el) => (
                <>
                  <tr>
                    <td>
                      <Link to={`/store/${el.id}`}>{el.name}</Link>
                    </td>
                    <td>
                      {el.Services.map((serv) => (
                        <>{" " + serv.description + " "}</>
                      ))}
                    </td>
                    <td>{el.barrio}</td>
                    <td>{el.province}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
        <Typography variant="h3">Tit, tabla con mui</Typography>
        <div>
          <MuiTable data={data} />
        </div>
      </>
    );
  }
};

export default TableLayout;

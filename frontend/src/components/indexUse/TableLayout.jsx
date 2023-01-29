//This will fetch and get verified stores, and make a table
import { Link } from "react-router-dom";
//Bootstrap
import Table from "react-bootstrap/Table";
//Import components
import StoreRowIndex from "../general/table/StoreRowIndex";
import SpinnerBootstrap from "../SpinnerBootstrap";
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

        <div className="container">
          {data.storesList.map((el) => (
            <>
              <StoreRowIndex data={el} />
              <hr />
            </>
          ))}
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
        </div>
        {/* 

<div className="border border-warning">
  {data.storesList.map((el) => (
    <div className="border border-primary">
      {el.name} || {el.province} ||{" "}
      {el.Services.length >= 0
        ? el.Services.map((serv) => <div>{serv.id}</div>)
        : ""}
    </div>
  ))}
</div>

*/}
      </>
    );
  }
};

export default TableLayout;

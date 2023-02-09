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
  console.log(data);
  if (data.verifStores === undefined) {
    return (
      <>
        {/* div for center spinner */}
        <div className="mx-auto">
          {data.loadingVerifStores === true && (
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

        <Typography variant="h3">Tit, tabla con mui</Typography>
        <div>
          <MuiTable data={data} />
        </div>
      </>
    );
  }
};

export default TableLayout;

import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Paper } from "@mui/material";


const StoreRegisterOpt = () => {
	return (
<>
      <Paper elevation={10}>
      <div className="mt-2 mb-2 rounded border border-warning">
        <div className="mt-2 mb-2 d-flex justify-content-center">
          ¿Tenes una tienda? ¿Te gustaria verla en la web?
        </div>
        <div className="mt-1 mb-2 d-flex justify-content-center text-center">
          <Link to={"/register/store"}>
            <Button variant="warning">Registra tu tienda ahora!</Button>
          </Link>
        </div>
      </div>

      </Paper>
</>
	);
};

export default StoreRegisterOpt;

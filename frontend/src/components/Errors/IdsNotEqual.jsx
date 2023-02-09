import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import AuthContext from "../../context/AuthContex";
import { useNavigate } from "react-router-dom";

function IdsNotEqual() {
  // const IdsNotEqual = () => {
  const { logOffRemoveCookies } = useContext(AuthContext);
  // console.log(logOffRemoveCookies);
  const navigate = useNavigate();

  //Make redirect & logout
  const logOutAndRedirect = () => {
    console.log(logOffRemoveCookies);
    logOffRemoveCookies();
    // console.log("ir a login y no tener logged acc");
    navigate("/login");
  };

  return (
    <>
      <Box m={2}>
        <Alert variant="danger">
          <Alert.Heading>401 Error!</Alert.Heading>
          <p>No tiene acceso a esta pagina.</p>
          <hr />
          <p className="mb-0">
            Si el error ocurre de nuevo, te sugerimos volver a iniciar sesion!
          </p>
          <hr />
          <p>En caso de no ser redireccionado:</p>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={logOutAndRedirect}>
              Volver A Iniciar Sesion
            </Button>
          </Grid>
          <p>
            No entiendo porque el onclick del boton que ejecuta la funcion de
            logOutAndRedirect, la cual ejecuta: logOffRemoveCookies, de la misma
            manera que el " MenuItem " as Link en el navbar, no funciona
          </p>
        </Alert>
      </Box>
    </>
  );
}

export default IdsNotEqual;

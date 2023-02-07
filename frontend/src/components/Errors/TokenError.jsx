import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";

//
//Cant make work "navigate" from react router dom
//

//Custom hook
import useCountDown from "../../hooks/useCountDown";

const TokenError = () => {
  const { countDown, countDownStatus } = useCountDown(6);
  //Decl
  const navigate = useNavigate();
  //Make redirect
  if (countDownStatus === "done") {
    navigate("/login");
  }

  return (
    <>
      <Box m={2}>
        <Alert variant="danger">
          <Alert.Heading>401 Error!</Alert.Heading>
          <p>
            No pudimos comprobar tu sesion! Vamos a necesitar que vuelvas a
            iniciar sesion.
          </p>
          <hr />
          <p className="mb-0">
            Seras redirigido a la pantalla de login en {countDown}.
          </p>
          <hr />
          <p>En caso de no ser redireccionado:</p>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              as={Link}
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Iniciar Sesion
            </Button>
          </Grid>
        </Alert>
      </Box>
    </>
  );
};

export default TokenError;

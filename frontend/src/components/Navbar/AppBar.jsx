import * as React from "react";

//Components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Styles
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
//Context

import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

function Appbar() {
  //Mui imports
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //Mui imports

  //My logic:
  const navigate = useNavigate();
  //get contxt
  const { authT, accInfo, logOffRemoveCookies } = useContext(AuthContext);

  //Get the first letter of the name if its a user acc:
  let flName;
  if (accInfo.accType === "user") {
    flName = accInfo.name.charAt(0).toUpperCase();
  }

  const makeLogOff = () => {
    logOffRemoveCookies();
    navigate("/");
  };

  if (authT === false) {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid
                xs
                item
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h6"
                    as={Link}
                    to={"/"}
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    WiPet
                  </Typography>
                </Box>
              </Grid>
              <Grid xs display="flex" justifyContent="end" alignItems="center">
                <Box>
                  <Typography
                    variant="h6"
                    as={Link}
                    to={"/login"}
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 600,
                      letterSpacing: ".05rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    LOGIN
                  </Typography>

                  <Typography
                    variant="h6"
                    as={Link}
                    to={"/register"}
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 600,
                      letterSpacing: ".05rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    REGISTRO
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  if (authT === true && accInfo.accType === "user") {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid
                xs
                item
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h6"
                    as={Link}
                    to={"/"}
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    WiPet
                  </Typography>
                </Box>
              </Grid>
              <Grid xs display="flex" justifyContent="end" alignItems="center">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ bgcolor: deepOrange[500] }}
                      >
                        {flName}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem
                      as={Link}
                      to={`/${accInfo.accType}/${accInfo.accId}`}
                    >
                      Mi Perfil
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      to={`/${accInfo.accType}/${accInfo.accId}/reserves`}
                    >
                      Mis Reservas
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={makeLogOff}>Cerrar Sesion</MenuItem>
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  if (authT === true && accInfo.accType === "store") {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid
                xs
                item
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h6"
                    as={Link}
                    to={"/"}
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    WiPet
                  </Typography>
                </Box>
              </Grid>
              <Grid
                xs
                item
                display="flex"
                justifyContent="end"
                alignItems="center"
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <hr />
                    <MenuItem
                      as={Link}
                      to={`/${accInfo.accType}/${accInfo.accId}`}
                    >
                      Mi Perfil
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      to={`/${accInfo.accType}/${accInfo.accId}/reserves`}
                    >
                      Mis Reservas
                    </MenuItem>
                    <MenuItem onClick={makeLogOff}>Cerrar Sesion</MenuItem>
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
export default Appbar;

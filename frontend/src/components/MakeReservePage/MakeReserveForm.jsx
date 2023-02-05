import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//Material Ui
import {
  Box,
  Paper,
  Grid,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Alert,
} from "@mui/material";

//Mui date/time pickers imports:
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

//

//Component:
const MakeReserveForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //custom hook
  //imports context and etcs...
  // useUserPets() ->
  const [loadingUserPets, setLoadingUserPets] = useState(false);
  const [userPets, setUserPets] = useState([]);
  //error case
  const [errorUserPets, setErrorUserPets] = useState(false);
  const [errorUPMessage, setErrorUPMessage] = useState(null);

  //custom hook

  //States for pickers
  const [dateValue, setDateValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);

  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };

  //on submit handler
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Paper elevation={10}>
        <Box>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} padding={1}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Mascota</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Mascota"
                    onChange={handleSelectChange}
                    {...register("mascota", { required: true })}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>

                  {errors.mascota?.type === "required" && (
                    <Alert severity="error">
                      Por favor ingrese su mascota para la cita.
                    </Alert>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Comentarios"
                    variant="outlined"
                    placeholder="pepepepepe"
                    {...register("comment", { required: true })}
                  />
                  {errors.comment?.type === "required" && (
                    <Alert severity="error">Por favor ingrese su nombre</Alert>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={"Fecha"}
                      value={dateValue}
                      onChange={(newValue) => {
                        setDateValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...register("fecha", { required: true })}
                        />
                      )}
                    />

                    {errors.fecha?.type === "required" && (
                      <Alert severity="error">Por favor ingrese la fecha</Alert>
                    )}
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label={"Hora"}
                      value={timeValue}
                      onChange={(newValue) => {
                        setTimeValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...register("hora", { required: true })}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  {errors.hora?.type === "required" && (
                    <Alert severity="error">Por favor ingrese la hora</Alert>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs>
                <Grid container>
                  <Grid xs display={"flex"} justifyContent={"center"}>
                    <Button variant="contained" type="submit">
                      Reservar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </>
  );
};

export default MakeReserveForm;

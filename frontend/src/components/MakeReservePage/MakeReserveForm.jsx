import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

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
  Typography,
} from "@mui/material";

//Mui date/time pickers imports:
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

//Custom hooks
import useUserPets from "../../hooks/useUserPets";

//Component:
const MakeReserveForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  //custom hook
  const { loadingUserPets, userPets, errorUserPets } = useUserPets();
  //custom hook

  //States for pickers
  const [dateValue, setDateValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);

  // const [reqDate, setreqDate] = useState(new Date());
  const [reqDate, setreqDate] = useState(null);
  // console.log(prueba);
  // prueba ? console.log("si") : console.log("es undefined");

  const handleDate = (newValue) => {
    console.log(newValue);
    setDateValue(newValue);
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
                  {userPets ? (
                    <>
                      <InputLabel id="demo-simple-select-label">
                        Mascota
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Mascota"
                        {...register("mascota", { required: true })}
                      >
                        {userPets?.length >= 1 &&
                          userPets.map((el) => (
                            <MenuItem key={el.id} value={el.id}>
                              {el.name}
                            </MenuItem>
                          ))}
                      </Select>
                      {errors.mascota?.type === "required" && (
                        <Alert severity="error">
                          Por favor ingrese su mascota para la cita.
                        </Alert>
                      )}
                    </>
                  ) : (
                    <Typography>Por favor reiniciar la pagina.</Typography>
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
                    placeholder="Por ejemplo: Creo que Ruffo tiene dolor en la oreja."
                    {...register("comment")}
                  />
                  {/*
                      errors.comment?.type === "required" && (
                    <Alert severity="error">Por favor ingrese su nombre</Alert>
                    )
                  */}
                </FormControl>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  {/*
#TODO: lo saque de internet, no se como funca... investigar
https://stackoverflow.com/questions/72842158/material-ui-mui-date-picker-with-react-hook-form
                  */}
                  <Controller
                    name="date"
                    defaultValue={reqDate}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, ...restField } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Fecha "
                          onChange={(event) => {
                            onChange(event);
                            setreqDate(event);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                          {...restField}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  {errors.date?.type === "required" && (
                    <Alert severity="error">Por favor ingrese la fecha</Alert>
                  )}
                  {/* 
<LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={"Fecha"}
                      value={dateValue}
                      onChange={handleDate}
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
                  */}
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  {/* 
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
                  {errors.hora?.type === "required" && (
                    <Alert severity="error">Por favor ingrese la hora</Alert>
                  )}
                    </LocalizationProvider>
                    */}
                  {/* Usando la misma guia que arriba */}
                  <Controller
                    name="time"
                    defaultValue={timeValue}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, ...restField } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Hora "
                          onChange={(event) => {
                            onChange(event);
                            setTimeValue(event);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                          {...restField}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  {errors.time?.type === "required" && (
                    <Alert severity="error">Por favor ingrese la hora</Alert>
                  )}
                </FormControl>
              </Grid>
              {/* test*/}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
              {/* test*/}
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

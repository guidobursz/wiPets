import React from "react";
import { useForm } from "react-hook-form";

//Components:
import DateTimePickerMUI from "./DateTimePickerMUI";

//Material Ui
import {
  Box,
  Paper,
  Grid,
  FormControl,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import DatePickerMUI from "./DatePickerMUI";
import TimePickerMui from "./TimePickerMui";

const MakeReserveForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dateTime, setDateTime] = React.useState();

  const [dateValue, setDateValue] = React.useState(null);
  //on submit handler
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="border border-primary"
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl>
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
            <h3>opcion 1:</h3>
            <Grid>
              <DateTimePickerMUI
                value={{ dateTime, setDateTime }}
                labelText={"Fecha y hora"}
              />
            </Grid>
            <h3>opcion 2</h3>
            <Grid>
              <DatePickerMUI
                value={{ dateValue, setDateValue }}
                label={"Seleccione Dia"}
              />
              <TimePickerMui />
            </Grid>
            <Grid>
              <Button variant="contained" type="submit">
                Reservar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default MakeReserveForm;

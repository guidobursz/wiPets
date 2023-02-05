import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DateTimePickerMUI = ({ value, labelText }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={labelText}
        value={value.dateTime}
        onChange={(newValue) => {
          value.setDateTime(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerMUI;

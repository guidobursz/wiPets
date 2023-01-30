import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MuiTable({ data }) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Servicios</TableCell>
            <TableCell align="center">Barrio</TableCell>
            <TableCell align="center">Provincia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.storesList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/store/${row.id}`}>{row.name}</Link>
              </TableCell>
              <TableCell align="right">
                {row.Services.map((serv) => (
                  <Typography align="center" variant="caption">
                    {" "}
                    {serv.description}{" "}
                  </Typography>
                ))}
              </TableCell>
              <TableCell align="right">{row.barrio}</TableCell>
              <TableCell align="center">{row.province}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

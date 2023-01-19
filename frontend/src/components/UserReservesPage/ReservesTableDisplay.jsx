import React from "react";
import ReactDataTable from "../ReactDataTable";

const ReservesTableDisplay = ({ rowsData }) => {
	console.log("inside table: ", rowsData);

	//Create data for table:
	const columns = [
		{
			name: "Dia",
			selector: (row) => row.date,
		},
		{
			name: "Hora",
			selector: (row) => row.time,
		},
		{
			name: "Comentario",
			selector: (row) => row.comment,
		},
		{
			name: "Servicio",
			selector: (row) => row.comment,
		},
		{
			name: "Local",
			selector: (row) => row.Store.name,
		},
		{
			name: "Mascota",
			selector: (row) => row.Pet.name,
		},
		{
			name: "Estado",
			selector: (row) => row.Status.description,
		},
	];

	return (
		<>
			<div className="mt-3 mb-3 border border-success">
				<div>
					{rowsData.length === 0 ? (
						<p>No se encuentran reservas en la base de datos...</p>
					) : (
						<ReactDataTable columns={columns} data={rowsData} />
					)}
				</div>
			</div>
		</>
	);
};

export default ReservesTableDisplay;

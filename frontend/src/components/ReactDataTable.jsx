import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

createTheme(
	"solarized",
	{
		text: {
			primary: "#268bd2",
			secondary: "#2aa198",
		},
		background: {
			default: "#002b36",
		},
		context: {
			background: "#cb4b16",
			text: "#FFFFFF",
		},
		divider: {
			default: "#073642",
		},
		action: {
			button: "rgba(0,0,0,.54)",
			hover: "rgba(0,0,0,.08)",
			disabled: "rgba(0,0,0,.12)",
		},
	},
	"dark"
);

const ReactDataTable = ({ columns, data }) => {
	return (
		<>
			<DataTable columns={columns} data={data} pagination theme="" />
		</>
	);
};

export default ReactDataTable;

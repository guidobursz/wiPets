import React, { useState, useEffect } from "react";

//import utils
import { POSTVerifiedStores } from "../../services/StoresAPI";

//Import components
import ReactDataTable from "../ReactDataTable";

const TableStoresHome = () => {
	//Get validated stores

	//States:
	const [dataForTable, setDataForTable] = useState([]);

	//State for query
	const [storeTypeQueryParam, setStoreTypeQueryParam] =
		useState("vet hair washer");
	const [isCheckedVet, setIsCheckedVet] = useState(true);
	const [isCheckedHair, setIsCheckedHair] = useState(true);
	const [isCheckedWasher, setIsCheckedWasher] = useState(true);

	//First render => get data without filtering
	useEffect(() => {
		const firstFetchData = async () => {
			let firstData = await POSTVerifiedStores(storeTypeQueryParam);
			setDataForTable(firstData.data.allVStores);
		};
		firstFetchData();
		// eslint-disable-next-line
	}, []);

	//useEffect to modify storeTypeQueryParam when checkbox is checked or no.
	useEffect(() => {}, [
		storeTypeQueryParam,
		isCheckedVet,
		isCheckedHair,
		isCheckedWasher,
	]);

	//Handlers on change:
	const handleOnChangeVet = () => {
		setIsCheckedVet(!isCheckedVet);

		if (!isCheckedVet === true && storeTypeQueryParam.includes("vet")) {
		} else if (!isCheckedVet === true && !storeTypeQueryParam.includes("vet")) {
			setStoreTypeQueryParam(storeTypeQueryParam + " vet ");
		} else if (!isCheckedVet === false && storeTypeQueryParam.includes("vet")) {
			let string = storeTypeQueryParam;
			let newS = string.replace("vet", "");
			setStoreTypeQueryParam(newS);
		}
	};
	const handleOnChangeHair = () => {
		setIsCheckedHair(!isCheckedHair);

		if (!isCheckedHair === true && storeTypeQueryParam.includes("hair")) {
		} else if (
			!isCheckedHair === true &&
			!storeTypeQueryParam.includes("hair")
		) {
			setStoreTypeQueryParam(storeTypeQueryParam + " hair ");
		} else if (
			!isCheckedHair === false &&
			storeTypeQueryParam.includes("hair")
		) {
			let string = storeTypeQueryParam;
			let newS = string.replace("hair", "");
			setStoreTypeQueryParam(newS);
		}
	};
	const handleOnChangeWasher = () => {
		setIsCheckedWasher(!isCheckedWasher);
		if (!isCheckedWasher === true && storeTypeQueryParam.includes("washer")) {
		} else if (
			!isCheckedWasher === true &&
			!storeTypeQueryParam.includes("washer")
		) {
			setStoreTypeQueryParam(storeTypeQueryParam + " washer ");
		} else if (
			!isCheckedWasher === false &&
			storeTypeQueryParam.includes("washer")
		) {
			let string = storeTypeQueryParam;
			let newS = string.replace("washer", "");
			setStoreTypeQueryParam(newS);
		}
	};

	//Handle on click:
	const handleFiltrar = async () => {
		console.log(storeTypeQueryParam);
		//Create new fetch for data for table

		let newData = await POSTVerifiedStores(storeTypeQueryParam);
		// console.log(newData);
		setDataForTable(newData.data.allVStores);
	};

	//Create data for table:
	const columns = [
		{
			name: "Nombre",
			selector: (row) => row.name,
		},
		{
			name: "Servicios",
			selector: (row) => row.type,
		},
		{
			name: "Provincia",
			selector: (row) => row.province,
		},
		{
			name: "Barrio",
			selector: (row) => row.barrio,
		},
	];

	return (
		<div>
			<div>
				<div>
					<input
						type="checkbox"
						name="VetCheckbox"
						id="VetCheckbox"
						value={"vet"}
						checked={isCheckedVet}
						onChange={handleOnChangeVet}
					/>
					<label htmlFor="VetCheckbox"> Veterinaria</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="PeluqueriaCheckbox"
						id="PeluqueriaCheckbox"
						value={"hair"}
						checked={isCheckedHair}
						onChange={handleOnChangeHair}
					/>
					<label htmlFor="PeluqueriaCheckbox"> Peluqueria</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="LavaderoCheckbox"
						id="LavaderoCheckbox"
						value={"washer"}
						checked={isCheckedWasher}
						onChange={handleOnChangeWasher}
					/>
					<label htmlFor="LavaderoCheckbox"> Lavadero</label>
				</div>
				<div>
					<button onClick={handleFiltrar}>Filtrar</button>
				</div>
			</div>
			<ReactDataTable columns={columns} data={dataForTable} />
		</div>
	);
};

export default TableStoresHome;

import React from "react";
import { Link } from "react-router-dom";

const StoreRegisterOpt = () => {
	return (
		<div>
			<div>queres registar tu tienda?</div>
			<Link to={"/register/store"}>
				<button>Registrar Ahora!</button>
			</Link>
		</div>
	);
};

export default StoreRegisterOpt;

import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const StoreRegisterOpt = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				¿Tenes una tienda? ¿Te gustaria verla en la web?
			</div>
			<br />
			<div className="d-flex justify-content-center">
				<Link to={"/register/store"}>
					<Button variant="warning">Registra tu tienda ahora!</Button>
				</Link>
			</div>
		</div>
	);
};

export default StoreRegisterOpt;

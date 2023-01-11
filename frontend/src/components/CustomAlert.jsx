import Alert from "react-bootstrap/Alert";
function CustomAlert({ variant, text }) {
	return (
		<Alert
			key={variant}
			variant={variant}
			className="d-flex justify-content-center"
		>
			{text}
		</Alert>
	);
}

export default CustomAlert;

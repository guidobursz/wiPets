import React from "react";

//import utils
import { dateConverter } from "../../tools/dateHelper";

//import components
import SpinnerBootstrap from "../SpinnerBootstrap";

//Bootstrap styles
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserProfileDisplay = ({ loading, user }) => {
	//user is a obj with all props
	let userBD = dateConverter(user.birthday);

	return (
		<>
			{/* div for center spinner */}
			<div className="mx-auto">
				{loading && (
					<>
						<br />
						<br />
						<h4 className="d-flex justify-content-center">Cargando...</h4>
						<div className="d-flex justify-content-center">
							<SpinnerBootstrap />
						</div>
						<br />
						<br />
					</>
				)}
			</div>

			{/* for displaying the user info box */}
			{loading === false && user && (
				<>
					<div className="mt-2 mb-2 p-2 rounded border border-success justify-content-center text-center">
						<Row>
							<Col sm={5}>
								<Row
									className="justify-content-center text-center mb-3 d-flex"
									style={{ height: "100%" }}
								>
									<div
										style={{ width: "180px", height: "180px" }}
										className="border border-success "
									>
										Img
									</div>
								</Row>
							</Col>
							<Col sm={7}>
								<div
									style={{ height: "100%" }}
									className="d-flex flex-column justify-content-center"
								>
									<div className="">
										<Row className="mt-2 mb-2">
											<Col>
												<div>{user.first_name}</div>
											</Col>
											<Col>
												<div>{user.last_name}</div>
											</Col>
										</Row>
									</div>
									<div>
										<Row className="mt-2 mb-2">
											<Col>
												<div>{user.email}</div>
											</Col>
											<Col>
												<div>{user.phone_number}</div>
											</Col>
										</Row>
									</div>
									<div>
										<Row className="mt-2 mb-2">
											<Col>
												<div>{userBD[3]}</div>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className="justify-content-center text-center mt-1 mb-2">
								<div style={{ width: "80%" }}>
									<Button>Cambiar imagen de perfil</Button>
								</div>
							</Col>
							<Col>
								<div>
									<Button>Cambiar Password</Button>
								</div>
							</Col>
						</Row>
					</div>
				</>
			)}
		</>
	);
};

export default UserProfileDisplay;

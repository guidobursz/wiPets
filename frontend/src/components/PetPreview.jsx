import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PetPreview = ({ data }) => {
	return (
		<Card
			className="justify-content-center text-center"
			style={{ width: "8rem" }}
		>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>{data.PetTypeId} tipo</Card.Text>
				<Card.Text>{data.age} años</Card.Text>
				<Card.Text>{data.gender}</Card.Text>
				<Card.Text>Raza: {data.PetBreedId}</Card.Text>

				<Button variant="primary">Mas Info</Button>
			</Card.Body>
		</Card>
	);
};

export default PetPreview;

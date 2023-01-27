import { Row, Col } from "react-bootstrap";

//will be used in index page, to every store row
const StoreRowIndex = ({ data }) => {
  console.log(data);

  let name = "Pepepe";
  let province = "Buenos aires";
  let barrio = "Caballito";
  let servs = [
    { id: 1, description: "Veterinaria" },
    { id: 3, description: "Alimento" },
  ];

  return (
    <div>
      <Row>
        <Col>{data.name}</Col>
        <Col>Te / te /te</Col>
        <Col>{data.barrio}</Col>
        <Col>{data.province}</Col>
      </Row>
    </div>
  );
};

export default StoreRowIndex;

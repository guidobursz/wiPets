import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//will be used in index page, to every store row
const StoreRowIndex = ({ data }) => {
  // console.log(data);

  return (
    <div className="border border-primary">
      <Row>
        <Col>
          <Link to={`/store/${data.id}`}>{data.name}</Link>
        </Col>
        <Col>
          {data.Services.map((el) => (
            <> {el.description}</>
          ))}
        </Col>
        <Col>{data.barrio}</Col>
        <Col>{data.province}</Col>
      </Row>
    </div>
  );
};

export default StoreRowIndex;

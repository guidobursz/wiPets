import Alert from "react-bootstrap/Alert";

const AlertBootstrap = ({ heading, t1, t2, extra }) => {
  return (
    <Alert variant="success">
      <Alert.Heading className="d-flex justify-content-center">
        {heading}
      </Alert.Heading>
      <br />
      <p className="d-flex justify-content-center">{t1}</p>
      {t2 ? <p className="d-flex justify-content-center">{t2}</p> : ""}
      {extra ? <p className="d-flex justify-content-center">{extra}</p> : ""}
    </Alert>
  );
};

export default AlertBootstrap;

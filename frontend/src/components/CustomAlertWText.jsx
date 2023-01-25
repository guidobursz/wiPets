import Alert from "react-bootstrap/Alert";
function CustomAlertWText({ variant, name }) {
  let pp = `Ahora podes encontrar a ${name} en tu perfil!`;

  return (
    <Alert variant={variant}>
      <Alert.Heading>Tu mascota fue creada correctamente!</Alert.Heading>
      <hr />
      <p>{pp}</p>
      <p>
        Tambien vas a poder reservarle reservas para atenderlo en los mejores
        locales!
      </p>
      <p>Cualquier consulta podes enviarnos un email y te ayudaremos!</p>
    </Alert>
  );
}

export default CustomAlertWText;

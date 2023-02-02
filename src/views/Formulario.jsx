import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto.jsx";

export default () => {
  return (
    <Container className="pt-5 mt-3 text-center">
      <h1 className="mb-4">Cuentanos, ¿En qué te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};

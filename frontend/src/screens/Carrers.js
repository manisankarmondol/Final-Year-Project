import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Carrers = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <h3>Carrers</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>No Job openning right now..</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Carrers;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <h3>About Us</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>
              Kaveri is initiative to make sell products at an affordable price
              and to live long the saving initiative of river kaveri. We prodive
              24/7 customer service that any point of time anyone have a problem
              can contact and tell them their problems regarding anything
              related to our service. We have 13 centers across pan india .We
              deal with small business across villages and the cities where
              online business has not yet been started .We strive to have a
              positive impact on customers, employees, small businesses, the
              economy, and communities. Our workers are passionate builders with
              different backgrounds and goals, who share a common desire to
              always be learning and inventing on behalf of our customers.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;

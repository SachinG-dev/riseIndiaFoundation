import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../../atom/CustomCard/CustomCard";

export function ImpactSection() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
          <Row>
            <Col md={6}>
              <h2>Impact Section Heading</h2>
            </Col>
            <Col md={6}>
              <p>
                This is the description of the impact section. You can add more
                details here.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <Row>
            <Col>
              <CustomCard />
            </Col>
            <Col>
              <CustomCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomCard />
            </Col>
            <Col>
              <CustomCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

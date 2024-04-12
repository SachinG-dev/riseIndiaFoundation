import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css"; // Import CSS file for background gradient

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col md={6} className="text-container">
            <h1>Hope & Empowering Change Rise India Foundation</h1>
            <p>
              At Rise India Foundation, we are committed to creating positive
              change and uplifting communities across the nation. Our relentless
              dedication drives us to provide vital support and opportunities to
              those in need, empowering them to realize their full potential.
            </p>
            <Button variant="light">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

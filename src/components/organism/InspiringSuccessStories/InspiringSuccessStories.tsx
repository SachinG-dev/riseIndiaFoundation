import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InspiringSuccessStories.css"; // Import CSS file for custom styling
import InspiringCard from "../../molecule/InspiringCard/InspiringCard"; // Assuming you have a component for the individual cards

const InspiringSuccessStories = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-end">
        <Col md={8}>
          <InspiringCard
            imageSrc="image1.jpg"
            title="Title 1"
            description="Description 1"
          />
        </Col>
      </Row>
      <Row className="zigzag-row">
        <Col md={8}>
          <InspiringCard
            imageSrc="image3.jpg"
            title="Title 3"
            description="Description 3"
          />
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={8}>
          <InspiringCard
            imageSrc="image5.jpg"
            title="Title 5"
            description="Description 5"
          />
        </Col>
      </Row>
      {/* Add more rows as needed */}
    </Container>
  );
};

export default InspiringSuccessStories;

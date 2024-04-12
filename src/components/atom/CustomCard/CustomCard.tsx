import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = () => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        backgroundColor: "#FFFFFF40",
        color: "white",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a sample card text. You can add more details here.
            </Card.Text>
            <Button variant="warning">Learn More</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;

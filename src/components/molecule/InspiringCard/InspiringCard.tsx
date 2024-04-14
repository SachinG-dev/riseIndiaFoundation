import React from "react";
import { Card } from "react-bootstrap";

interface InspiringCardProps {
  imageSrc: string;
  title: string;
  description: string;
}
const InspiringCard = ({
  imageSrc,
  title,
  description,
}: InspiringCardProps) => {
  return (
    <div className="inspiring-card">
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img src={imageSrc} alt="Card image" />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default InspiringCard;

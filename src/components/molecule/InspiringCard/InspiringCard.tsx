import React from "react";
import { Card } from "react-bootstrap";
import "./InspiringCard.css";
interface InspiringCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageAlignment?: string;
}

const InspiringCard = ({
  imageSrc,
  title,
  description,
  imageAlignment = "left", // Default value is "left"
}: InspiringCardProps) => {
  const isRightAligned = imageAlignment === "right";

  return (
    <div className="inspiring-card">
      <div className="row g-0">
        {isRightAligned && (
          <div className="col-md-8  p-3">
            <Card.Body className="text-end">
              <Card.Title className="inspiring-card-title text-primary">
                {title}
              </Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </div>
        )}
        <div className="col-md-4 p-3">
          <Card.Img src={imageSrc} alt="Card image" />
        </div>
        {!isRightAligned && (
          <div className="col-md-8  p-3">
            <Card.Body>
              <Card.Title className="inspiring-card-title text-primary">
                {title}
              </Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </div>
        )}
      </div>
    </div>
  );
};

export default InspiringCard;

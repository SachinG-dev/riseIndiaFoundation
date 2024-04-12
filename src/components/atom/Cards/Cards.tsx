import React from "react";
import "./Card.css"; // Import your CSS file for styling

interface CardProps {
  // title: string;
  children: React.ReactNode;
  className?: string; // Add className prop
}

function Card({
  //  title,
  children,
  className, // Receive className prop
}: CardProps) {
  return (
    <div className={`card ${className}`}>
      {/* <h2>{title}</h2> */}
      {children}
    </div>
  );
}

export default Card;

import React from "react";
interface AboutUsCustomeCardInfoProps {
  number: number;
  heading: string;
  description: string;
}

export function AboutUsCustomeCardInfo({
  number,
  heading,
  description,
}: AboutUsCustomeCardInfoProps) {
  const backgroundColor = number % 2 === 0 ? "bg-gray" : "";
  const headingColor = number % 2 === 0 ? "font-color-orange" : "";
  return (
    <div className={`p-3 ${backgroundColor} p-4`}>
      <div className="container">
        <h3 className={`fw-bold ${headingColor}`}>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

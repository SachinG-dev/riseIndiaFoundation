import React from "react";

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  description: string;
}
export function TeamMemberCard({
  imageUrl,
  name,
  description,
}: TeamMemberCardProps) {
  return (
    <div className="card shadow">
      <img
        src={imageUrl}
        className="card-img-top mx-auto mt-3 rounded-circle"
        alt={name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;

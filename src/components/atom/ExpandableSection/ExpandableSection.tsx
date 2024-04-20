import React, { useState } from "react";
interface ExpandableSectionProps {
  title: string;
  description: string;
}
export function ExpandableSection({
  title,
  description,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <button
          className="btn btn-link"
          onClick={toggleExpand}
          aria-expanded={expanded ? "true" : "false"}
          aria-controls="collapseDescription"
        >
          {expanded ? "-" : "+"}
        </button>
      </div>
      {expanded && (
        <div id="collapseDescription" className="card-body">
          {description}
        </div>
      )}
    </div>
  );
}

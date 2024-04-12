import React from "react";

interface IconProps {
  className: string; // Icon class name, like "fa fa-plus me-2 fs-5"
}

function Icon({ className }: IconProps) {
  return <i className={className} />;
}

export default Icon;

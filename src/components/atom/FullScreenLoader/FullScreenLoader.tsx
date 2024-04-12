import React from "react";
import { Spinner } from "react-bootstrap";

interface FullScreenLoaderProps {
  show: boolean;
}

export function FullScreenLoader({ show }: FullScreenLoaderProps) {
  if (show) {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return <div />;
}

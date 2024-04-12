import React from "react";
import { Nav } from "react-bootstrap";

interface TabButtonProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export function TabButton({ title, active, onClick }: TabButtonProps) {
  return (
    <Nav.Item>
      <Nav.Link active={active} onClick={onClick}>
        {title}
      </Nav.Link>
    </Nav.Item>
  );
}

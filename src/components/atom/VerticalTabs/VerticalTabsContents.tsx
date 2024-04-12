import React from "react";
import { Tab } from "react-bootstrap";

interface TabContentProps {
  children: React.ReactNode;
  active: boolean;
}

export function TabContent({ children, active }: TabContentProps) {
  return <Tab.Pane active={active}>{children}</Tab.Pane>;
}

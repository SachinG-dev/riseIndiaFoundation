import React, { ReactNode } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode; // Allow ReactNode for content
}

interface AccordionAtomProps {
  items: AccordionItem[];
}

export function AccordionAtom({ items }: AccordionAtomProps) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={item.id}>
          <Accordion.Header className="AccordionHeader">
            {item.title}
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            {item.content}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

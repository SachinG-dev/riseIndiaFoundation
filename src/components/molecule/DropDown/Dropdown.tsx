import { NavDropdown } from "react-bootstrap";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onChange: (eventKey: string | null) => void;
  title: string;
}

function Dropdown({ options, onChange, title }: DropdownProps) {
  return (
    <NavDropdown
      title={title || "Select an option"}
      id="navbarScrollingDropdown"
      onSelect={onChange}
    >
      {options.map((option) => (
        <NavDropdown.Item key={option.value} eventKey={option.value}>
          {option.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default Dropdown;

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

interface Option {
  value: string;
  label: string;
}

interface InputDropdownProps {
  options: Option[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  name?: string;
  value?: string; // New optional value prop
}

function InputDropdown({
  options,
  onSelect,
  className,
  name,
  value, // Destructure the value prop
}: InputDropdownProps) {
  const [selectedValue, setSelectedValue] = useState(value || "");

  useEffect(() => {
    setSelectedValue(value || ""); // Update selected value when value prop changes
  }, [value]);

  return (
    <Form.Select
      className={className}
      onChange={onSelect}
      name={name}
      value={selectedValue} // Assign the value prop to the select element
    >
      <option value="">Select an option</option>
      {options &&
        options.length > 0 &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </Form.Select>
  );
}

export default InputDropdown;

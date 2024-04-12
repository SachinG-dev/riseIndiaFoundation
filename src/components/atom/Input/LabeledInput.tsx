import React from "react";
import Input from "./Input";

interface LabeledInputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  className: string;
  // style?: React.CSSProperties;
}

function LabeledInput({
  type,
  placeholder,
  value,
  onChange,
  id,
  label,
  className,
  //  style
}: LabeledInputProps) {
  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label htmlFor={id}>{label}:</label>}
      <br />

      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
        // style={style}
      />
    </div>
  );
}

export default LabeledInput;

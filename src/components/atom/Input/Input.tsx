import React from "react";
import "./Input.css";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string; // Make the 'id' property optional
  label?: string; // New label prop,
  name?: string;
  className: string;
  disabled?: boolean;
  ariaLabel?: string;
  max?: string;
  min?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

function Input({
  type,
  placeholder,
  value,
  onChange,
  id,
  label,
  name,
  className,
  disabled = false,
  ariaLabel,
  max,
  min,
  ref,
  //  style
}: InputProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}:</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
        name={name}
        disabled={disabled}
        aria-label={ariaLabel}
        max={max}
        min={min}
        ref={ref}
      />
    </div>
  );
}

export default Input;

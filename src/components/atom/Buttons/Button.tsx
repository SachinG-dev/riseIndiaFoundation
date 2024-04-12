import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  type?: "button" | "reset" | "submit"; // Make the type prop optional
  disabled?: boolean;
  label?: string;
  children?: React.ReactNode; // Add children prop
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";
  size?: "small" | "medium" | "large";
  variant?:
    | "text"
    | "outlined"
    | "contained"
    | "primary"
    | "secondary"
    | "link";
  className?: string;
  isLoading?: boolean;
}

function Button({
  onClick,
  type,
  disabled = false,
  label,
  children, // Destructure children prop
  color,
  size,
  variant,
  className,
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      // type="button"
      type={type !== "submit" ? "button" : "submit"} // Use the provided type or default to 'button'
      disabled={disabled}
      className={`${color || ""} ${size || ""} ${variant || ""} ${className || ""}`}
    >
      {isLoading ? (
        <>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        label || children
      )}
    </button>
  );
}

export default Button;

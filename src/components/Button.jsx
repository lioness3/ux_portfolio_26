import React from "react";
import "../styles/button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  icon = null,
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;

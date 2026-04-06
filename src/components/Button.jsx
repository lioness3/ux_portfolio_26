import "../styles/button.css";

export default function Button({
  classN = "",
  icon = null,
  onClick,
  btnText = "",
  primary = true,
  link = "",
}) {
  // PRIMARY BUTTON (real button)
  if (primary) {
    return (
      <button
        type="button"
        className={`custom-primary-button ${classN}`}
        onClick={onClick}
      >
        {icon && <span className="button-icon">{icon}</span>}
        {btnText && <span className="button-text">{btnText}</span>}
      </button>
    );
  }

  // SECONDARY BUTTON (opens Figma link)
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`custom-secondary-button ${classN}`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {btnText && <span className="button-text">{btnText}</span>}
    </a>
  );
}

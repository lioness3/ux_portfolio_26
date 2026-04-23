// used for hover interactions as a tool tip

import { useState, useRef, useEffect } from "react";
import "../styles/Tooltip.css";

export default function Tooltip({ label, position = "top", children }) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  // Close tooltip when tapping outside (mobile)
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div
      ref={wrapperRef}
      className="tooltip-wrapper"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={() => setVisible(!visible)} // mobile tap toggle
    >
      {children}

      {visible && (
        <div className={`tooltip-bubble tooltip-${position}`}>
          <span className="tooltip-text">{label}</span>
        </div>
      )}
    </div>
  );
}

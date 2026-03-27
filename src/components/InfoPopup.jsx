import { useState, useEffect } from "react";
import "../styles/infoPopup.css";
import "../styles/hero.css";
export default function InfoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handlePointerDown() {
      setOpen(false);
    }

    if (open) {
      document.addEventListener("pointerdown", handlePointerDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div className="info-wrapper">
      {!open && (
        <div>
          <h4 className="info-trigger" onClick={() => setOpen(!open)}>
            User Experience Engineer
          </h4>
          <p className="hero-description">
            Designing intuitive, accessible experiences that empower every user.
          </p>
        </div>
      )}
      {open && (
        <div className="info-popup">
          A <span id="title-bold">User Experience Engineer</span> uses how
          people feel when interacting with a product to make technology easier
          to use.
        </div>
      )}
    </div>
  );
}

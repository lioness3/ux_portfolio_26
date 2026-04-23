import { useEffect, useRef, useState } from "react";
import "../../styles/cards/headerCard.css";

export default function HeaderCard({
  title,
  type,
  catchPhrase,
  summary,
  image,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const lastScroll = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Fully expand when user scrolls to the top
      if (current <= 0) {
        setCollapsed(false);
        lastScroll.current = 0;
        return;
      }

      // Collapse when scrolling down
      if (current > lastScroll.current + 10) {
        setCollapsed(true);
      }

      // Expand when scrolling up
      if (current < lastScroll.current - 10) {
        setCollapsed(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`header-card ${collapsed ? "collapsed" : ""}`}
    >
      <div className="header-card-left">
        <h1 className="header-card-title">{title}</h1>
        <span className="header-card-type">{type}</span>

        {!collapsed && (
          <>
            <h2 className="header-card-catchphrase">{catchPhrase}</h2>
            <p className="header-card-summary">{summary}</p>
          </>
        )}
      </div>

      {!collapsed && (
        <div className="header-card-right">
          <img src={image} alt={title} className="header-card-image" />
        </div>
      )}
    </div>
  );
}

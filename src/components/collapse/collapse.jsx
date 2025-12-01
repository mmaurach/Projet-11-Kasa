import React, { useState } from "react";
import "./collapse.scss";
import arrow from "../../assets/arrow-back.png";

function Collapse({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <img
          src={arrow}
          alt="toggle icon"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;

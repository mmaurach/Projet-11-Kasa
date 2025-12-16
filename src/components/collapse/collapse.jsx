import { useState } from "react";
import "./collapse.scss";
import arrow from "../../assets/arrow-back.png";

function Collapse({ title, content, defaultOpen = false, size = "" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${size}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <img
          src={arrow}
          alt="toggle icon"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;

import React, { useState } from 'react';


function Accordion({ header, children, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = () => {
    if (activeAccordion === id) {
      setIsOpen(!isOpen);
      setActiveAccordion(null);
    } else {
      setIsOpen(true);
      setActiveAccordion(id);
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
        <p className="accordion-header-text">{header}</p>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
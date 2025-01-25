import React from "react";
import "./Button.scss";
import ReactGA from 'react-ga4'; 

export default function Button({ text, className, href, newTab }) { 

  const handleClick = (event) => {
    ReactGA.event({
      action: 'click',
      category: 'button',
      label: text, 
    });

    if (href) {
      event.preventDefault(); 
    }

    if (href) {
      window.location.href = href; 
    }
  };

  return (
    <div className={className}>
      <a 
        className="main-button" 
        href={href} 
        target={newTab && "_blank"}
        onClick={handleClick} 
      >
        {text}
      </a>
    </div>
  );
}
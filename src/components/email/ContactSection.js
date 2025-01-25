import React from 'react';
import ReactGA from 'react-ga4';
import {illustration, contactInfo} from "../../portfolio";

ReactGA.initialize('G-NXMFK2HZRH');

const ContactSection = ({ contactInfo, isDark }) => {

  const handlePhoneClick = () => {
    ReactGA.event({
      action: 'phone_click',
      category: 'Contact',
      label: 'Phone Number' 
    });
  };

  const handleEmailClick = () => {
    ReactGA.event({
      action: 'email_click',
      category: 'Contact',
      label: 'Email Address' 
    });
  };

  return (
    <div
      className={
        isDark ? "dark-mode contact-text-div" : "contact-text-div"
      }
    >
      {contactInfo.number && (
        <>
          <a 
            className="contact-detail" 
            href={"tel:" + contactInfo.number} 
            onClick={handlePhoneClick}
          >
            {contactInfo.number}
          </a>
          <br />
          <br />
        </>
      )}
      <a 
        className="contact-detail-email" 
        href={"mailto:" + contactInfo.email_address} 
        onClick={handleEmailClick}
      >
        {contactInfo.email_address}
      </a>
      <br />
      <br />
      {/* Your SocialMedia component here */}
    </div>
  );
};

export default ContactSection;
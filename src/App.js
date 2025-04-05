import "./App.scss";
import Main from "./containers/Main";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Import your GTM_ID from the constants file
import { GTM_ID } from './constants'; // Assuming constants.js is in the same directory
// If constants.js is in a different location, adjust the path accordingly
// For example: import { GTM_ID } from './utils/constants';

const App = () => {
  useEffect(() => {
    // Initialize Google Tag Manager
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GTM_ID);

    // Optional: Clean up the script tag on unmount
    return () => {
      const gtmScript = document.querySelector(`script[src='https://www.googletagmanager.com/gtag/js?id=${GTM_ID}']`);
      if (gtmScript) {
        document.head.removeChild(gtmScript);
      }
    };
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

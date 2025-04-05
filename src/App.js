import "./App.scss";
import Main from "./containers/Main";
import React from 'react';
import ReactGA from 'react-ga4'; 
import { useEffect } from 'react';

GTM_ID = "GTM-KM7WDCDN"
 
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

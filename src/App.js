import "./App.scss";
import Main from "./containers/Main";
import React from 'react';
import ReactGA from 'react-ga4'; 
import { useEffect } from 'react';


const App = () => {
   useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-KM7WDCDN`; // Correct - using the variable

    gtag('config', GTM_ID); // Correct - using the variable
    // ...
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

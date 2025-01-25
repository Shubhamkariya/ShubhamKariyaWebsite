import "./App.scss";
import Main from "./containers/Main";
import React from 'react';
import ReactGA from 'react-ga4'; 


const App = () => {
  ReactGA.initialize('GTM-KM7WDCDN'); 
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

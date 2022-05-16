import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { About, Header, Home, Footer, Results} from './components';
import App from './App' ;
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import { GlobalStateProvider } from "./GlobalStateProvider";
import { Auth0Provider } from "@auth0/auth0-react" ;
import {RecoilRoot} from 'recoil' ;

ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStateProvider>
      <Auth0Provider
        domain="dev-2j9425tp.us.auth0.com"
        clientId="naSs6wCWGvtue07SbrdGyQsv2gjqN1Sx"
        redirectUri={window.location.origin}
      > 
        
            <App />
          
        
      </Auth0Provider>
      </GlobalStateProvider>
      
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

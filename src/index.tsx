import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { About, Header, Home, Footer, Results, LoginButton, LogoutButton} from './components';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import { GlobalStateProvider } from "./GlobalStateProvider";
import { Auth0Provider } from "@auth0/auth0-react" ;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-2j9425tp.us.auth0.com"
        clientId="naSs6wCWGvtue07SbrdGyQsv2gjqN1Sx"
        redirectUri={window.location.origin}
      >
      <Header />
      <LoginButton />
      <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
      </GlobalStateProvider>
      </Auth0Provider>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

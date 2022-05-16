import React from 'react';
import { About, Hero, Header, Home, Footer, Results} from './components';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuth0();
    return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>}></Route>
          <Route path="/about" element={<><Hero /><About /></>}></Route>
          <Route path="/results" element={<Results />}></Route>
        
        </Routes>
      </BrowserRouter>
    );
}

export default App;

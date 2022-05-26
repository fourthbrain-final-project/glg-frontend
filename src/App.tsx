import React from 'react';
import { About, Hero, Header, Home, Footer, Results} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {  
    return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>}></Route>
          <Route path="/about" element={<><Hero /><About /></>}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="*" element={<div className='container title'><br /><br /><p className='title is-2 has-text-centered' style={{fontFamily: 'Source Code Pro'}}>404 - Resource Not Found</p></div>}></Route>        
        </Routes>
      </BrowserRouter>
    );    
}

export default App;

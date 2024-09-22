import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

function App() {

  return (
    <>
      <div className=''>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter,Routes, Route} from 'react-router-dom'; 
import Detail from './components/Detail';
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default />
          {/* here we will learn how to make a view component folder */}
          <Route element={<Detail/>} path="/people/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

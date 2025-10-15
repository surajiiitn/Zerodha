import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      {/* <Route path='/about' element={<About />}></Route> */}
      {/* <Route path='/product' element={< />}></Route> */}

    </Routes>
  </BrowserRouter>
);



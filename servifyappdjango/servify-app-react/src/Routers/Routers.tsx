import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../modules/Home/Home';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
    </BrowserRouter>
  );
};

export default Routers;
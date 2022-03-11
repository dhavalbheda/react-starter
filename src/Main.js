import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exect  element={<HomePage />} />
        </Routes>
  </BrowserRouter>
  );
}

export default Main;
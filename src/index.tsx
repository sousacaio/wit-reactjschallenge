import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OperationsRoute from './Routes/OperationsRoute';
import DashboardRoute from './Routes/DashboardRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/dashboard" element={<DashboardRoute />} />
        <Route path="/operations" element={<OperationsRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

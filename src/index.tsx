import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OperationsRoute from './Routes/OperationsRoute';
import DashboardRoute from './Routes/DashboardRoute';
import SettingsRoute from './Routes/SettingsRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardRoute />} />
        <Route path="/operations" element={<OperationsRoute />} />
        <Route path="/settings" element={<SettingsRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

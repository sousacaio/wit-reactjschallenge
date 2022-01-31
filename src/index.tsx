import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OperationsRoute from './Routes/OperationsRoute';
import DashboardRoute from './Routes/DashboardRoute';
import SettingsRoute from './Routes/SettingsRoute';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
//#2850e4

const mdTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/operations" element={<OperationsRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

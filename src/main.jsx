import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './index.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter } from 'react-router-dom';
import ScrollProvider from './context/ScrollContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <ScrollProvider>
          <App />
        </ScrollProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)

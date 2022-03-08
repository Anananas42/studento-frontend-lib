import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './component-library/UserProvider';
import ThemeProvider from './component-library/ThemeProvider';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider><UserProvider>
          <App />
        </UserProvider></ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  ,document.getElementById('root') 
);


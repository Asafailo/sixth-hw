import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App'; 
import First from './components/first';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <First />
    
  </React.StrictMode>,
  document.getElementById('root')
);

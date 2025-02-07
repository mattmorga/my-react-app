// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18/19
import './index.css'; // This imports the index.css file
import App from './App';

// Create the root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

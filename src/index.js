import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// setting up redux
import { Provider } from "react-redux";
import Store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provider will take in store and pass down information - providing access to child elements */}
    <Provider store={Store}>
    <App />
    </ Provider>
  </React.StrictMode>
);


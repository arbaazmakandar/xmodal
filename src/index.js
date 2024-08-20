import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Modal from "react-modal";


const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement(document.getElementById('root'));

root.render(
    <App />
);

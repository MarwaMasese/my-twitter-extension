// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './components/InspectButton.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

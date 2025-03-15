import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import startProc from "./lib/startProc";
startProc.start();

ReactDOM.createRoot(document.getElementById('app')).render(
  <App />
)
console.log('createRoot');

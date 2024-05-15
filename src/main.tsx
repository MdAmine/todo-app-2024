import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import Details from "./components/Todo/Details/Details";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)

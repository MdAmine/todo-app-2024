import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail/Detail.tsx';
import Todo from './components/Todo/Todo.tsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App></App>
  </React.StrictMode>
);


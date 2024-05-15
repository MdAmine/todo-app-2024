import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterOutlet from "./routes/RouterOutlet.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterOutlet/>
  </React.StrictMode>,
)

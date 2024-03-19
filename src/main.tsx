import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BackgroundImageProvider } from './context/climate.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BackgroundImageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BackgroundImageProvider>
)

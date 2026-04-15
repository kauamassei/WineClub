import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const container = document.getElementById('root')

if (!container) {
  throw new Error("Elemento com id 'root' não encontrado no DOM.")
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

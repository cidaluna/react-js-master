import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    { /* Criando Provider */ }
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
)

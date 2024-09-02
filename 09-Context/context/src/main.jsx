import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  //</StrictMode>,
)

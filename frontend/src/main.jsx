import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css' // Temporarily commented out to bypass PostCSS issues
import App from './App.jsx'
// import BottomNav from './components/BottomNav.jsx' // Remove direct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <BottomNav /> */}
  </StrictMode>,
)

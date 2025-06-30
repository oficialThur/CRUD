import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center min-h-screen p-4 pt-0 bg-[#212121]">
      <App />
    </div>
  </StrictMode>,
)

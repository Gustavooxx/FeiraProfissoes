import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Site from './pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Site />
  </StrictMode>,
)

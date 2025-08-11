import { StrictMode } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login/index.jsx'

export default function Navegacao() {
    return (
         <StrictMode>
            <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Site />} />
                 <Route path="/Login" element={<Login/>} />
              </Routes>
            </BrowserRouter>
          </StrictMode>
    )
}
import { StrictMode } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import Site from './pages/Home/index.jsx'
import Admin from './pages/Admin/index.jsx'
import LoginConnect from './pages/LoginConect/index.jsx'
import Conta from './pages/Conta/index.jsx'

export default function Navegacao() {
    return (
         <StrictMode>
            <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Site />} />
                 <Route path="/Cadastro" element={<Login/>} />
                 <Route path='/Admin' element={<Admin/>}/>
                 <Route path='/LoginConect' element={<LoginConnect/>}/>
                 <Route path="/Login" element={<Conta/>} />

              </Routes>
            </BrowserRouter>
          </StrictMode>
    )
}
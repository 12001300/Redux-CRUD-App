import React from 'react'

import "./App.css"
import Home from './Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Create from './Create'

export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
    </Routes>
    
    </BrowserRouter>
     
    
  )
}

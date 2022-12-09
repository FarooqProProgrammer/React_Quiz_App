import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Results from './pages/Results'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Questions' element={<Questions/>}/>
          <Route path='/Results' element={<Results/>}/>
          
        </Routes>

    </BrowserRouter>
  )
}

export default App
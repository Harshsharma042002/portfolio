import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/education' element={<Education/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

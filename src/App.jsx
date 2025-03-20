import React from "react";
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Work from "../pages/work"
import Contact from "../pages/contact"
import About from "../pages/About"



const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
    
  )
}

export default App;   
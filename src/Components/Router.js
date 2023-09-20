import React from "react"
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Logement from "../pages/Logement"
import Error from "../pages/Error"
import Header from "../Components/Header"

function AppRouter () {
      return (
      <Router>
        <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement" element={<Logement />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </Router>
)}

export default AppRouter
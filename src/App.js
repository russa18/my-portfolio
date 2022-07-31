import './App.css';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Project from './component/Project/Project';
import Navbars from './component/Navbar/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState,useEffect } from 'react';
function App() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 768);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
  return (
    <div className="App">
      { isDesktop ?(
        <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
      ):(
        <>
      {/* <Navbars/> */}
      <Home/>
      <Project/>
      <Contact/>
      </>
      )
    } 

    </div>
  );
}

export default App;

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

function App() {

  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

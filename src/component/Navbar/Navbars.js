import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbars.css";
import Button from 'react-bootstrap/Button';
import Resume from "../../RushikeshSawantMandrekarResume.pdf";
import { useState } from 'react';

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Navbar.Brand className="n-brand" as={Link} to="/">RUSHiKESH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto " >
          <Nav.Link className="n-link" as={Link} to="/" eventKey="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
          <Nav.Link className="n-link" as={Link} to="/Project" eventKey="/Project" onClick={() => setExpanded(false)}>Project</Nav.Link>
          <Nav.Link className="n-link" as={Link} to="/Contact" eventKey="/Contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          <Nav.Link className="n-link" as={Link} to="/About" eventKey="/About" onClick={() => setExpanded(false)}>About</Nav.Link>
          <a href={Resume} className="n-btn" target='_blank' rel="noreferrer" style={{ marginLeft: "10px" }}>
            <Button variant="primary">Resume</Button>{' '}
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
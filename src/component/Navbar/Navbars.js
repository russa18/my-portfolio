import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbars.css";
import Button from 'react-bootstrap/Button';
import Resume from "../../RushikeshSawantMandrekarResume.pdf";

function Navbars() {

  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="n-brand" as={Link} to="/">RUSHiKESH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <Nav.Link className="n-link" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="n-link" as={Link} to="/Project">Project</Nav.Link>
          <Nav.Link className="n-link" as={Link} to="/Contact">Contact</Nav.Link>
        
          <a href={Resume} className="n-btn" target='_blank' rel="noreferrer" style={{marginLeft:"10px"}}>
            <Button variant="success">Resume</Button>{' '}
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
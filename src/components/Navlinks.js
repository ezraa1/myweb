import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Navlinks(){
return(
    <div >
        <Nav className="justify-content-end"  >
        <Nav.Item>
            <li>
        <Nav.Link  href="/">Home</Nav.Link>
        </li>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/about">About</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/skills">Skills</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/projects">Projects</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/contact">Contact</Nav.Link>

        </Nav.Item>
        </Nav>
    </div>
)
}
export default Navlinks;
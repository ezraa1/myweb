import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Navlinks(){
return(
    <div >
        <Nav className="justify-content-end"  >
        <Nav.Item>
            <li>
        <Nav.Link  href="/" style={{ color: '#d8e2dc',fontSize: 20 }}>Home</Nav.Link>
        </li>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/about" style={{ color: '#d8e2dc',fontSize: 20 }}>About</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/skills" style={{ color: '#d8e2dc',fontSize: 20 }}>Skills</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/projects" style={{ color: '#d8e2dc',fontSize: 20 }}>Projects</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link  href="/contact" style={{ color: '#d8e2dc' ,fontSize: 20}}>Contact</Nav.Link>

        </Nav.Item>
        </Nav>
    </div>
)
}
export default Navlinks;
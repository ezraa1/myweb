import React from "react";
import { Link } from "react-router-dom";


function Navlinks(){
return(
    <div>
        <li>
            <Link to="/">About</Link>

        </li>
        <li>
            <Link to="skills">Skills</Link>
        </li>
        <li>
            <Link to="projects">Projects</Link>
        </li>
        <li>
            <Link to="contact">Contact</Link>
        </li>

    </div>
)
}
export default Navlinks;
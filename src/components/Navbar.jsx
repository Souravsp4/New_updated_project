import { Link } from 'react-router-dom'
import React from 'react';


const Navbar = () => {
    return (
        <div className="container mb-4 mt-4">
            <ul className="nav nav-pills ">
                <li className="nav-item">
                    <Link className="nav-link" to="/registration"> Resgister </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login"> Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
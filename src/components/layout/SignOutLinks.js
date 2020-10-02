import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-router-dom';

function SignOutLinks() {
    return (
            <li><NavLink to = '/' exact className = "nav-link" >Login</NavLink></li>
    )
}

export default SignOutLinks

import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './signInLinks';
import SignOutLinks from './SignOutLinks';
import { useSelector } from 'react-redux';

function Navbar() {

    const stat = useSelector(state => state.firebase);

    const auth = useSelector(state => state.firebase.auth);

    const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;

    console.log(stat);

    return (
        <nav className = "nav">
            <ul className = "nav-list">
                 <Link to = "/" className = "nav-logo">Campus Recruitement System</Link>
                 <div className = "nav-links">
                    {links}
                 </div>
                
            </ul>
            
        </nav>
    )
}

export default Navbar;

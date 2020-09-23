

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignInLinks = () => {

    const dispatch = useDispatch();

    return (
            <li onClick = {() => dispatch(signOut())} className = "nav-link">Logout</li>
    )
}

export default SignInLinks;

import React from 'react';
import logo from '../../img/logos.png';
import front from '../../img/fronts.jpg';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Front() {

    let auth = useSelector(state => state.auth.auth);
    let authbtns;
    
    // if(auth==false) {
    //         authbtns = (
    //             <div className = "front-btns">
    //             <Link to = '/slogin' className = "front-login">Login as Student</Link>
    //             <Link to = '/clogin' className = "front-login">Login as Company</Link>
    //             <Link to = '/alogin' className = "front-login">Login as Admin</Link>
    //             </div>
    //         )
    // } else {
    //    authbtns = ( <Link to = '/' className = "front-login">About Company</Link> )
    // }

    return (
        <div className = "front">
            <nav className = "front-header">
                <h1 className = "front-logo">Campus Recruitement System</h1>
                <ul className = "front-list">
                    <li><Link to = '/' className = "front-link">About</Link></li>
                    <Link to = '/slogin' className = "front-linkbtn">Signin</Link>
                    <Link to = '/s-signup' className = "front-linkbtn">SignUp</Link>
                </ul>
            </nav>
            <div className = "front-ban">
                <div className = "front-left">
                    <h3 className = "front-left-main">Our Recruiting Strategy</h3>
                    <h4 className = "front-left-sub">hit your hiring plan</h4>
                    <p className = "front-left-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book. It has survived not only five centuries
                    </p>
                   <Link to = '/' className = "front-login">About Company</Link>
                </div>
                <div className = "front-right">
                    <img src = {front} className = "front-img" />
                </div>
            </div>
        </div>
    );
}

export default Front;

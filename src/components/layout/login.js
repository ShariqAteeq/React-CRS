import React from 'react';
import logo from '../../img/logos.png';
import { Link } from 'react-router-dom';

function Login( {myImg , myPath , title , email , password , submit , change ,sulink} ) {
    return (
        <div className="login">
            <div className="login-bg">
                <div className="login-left">
                    <h3 className="login-head">{title} Login</h3>
                    <p className="login-text">Lorem Ipsum is the printing and typesetting industry</p>
                    <img src={myImg} className="login-left-img" />
                </div>
                <div className="login-right">
                    <img src={logo} className="login-logo" onSubmit = {submit}/>
                    <form className="login-form">
                        <input type="email" id = "email" className="login-field" placeholder="Email" value = {email} onChange = {change}/>
                        <input type="password" id = "password" className="login-field" placeholder="Password" value = {password} onChange = {change}/>
                        <div className="login-sign">
                            <p>Don't have account?</p>
                            <Link to={sulink}>Create One!</Link>
                        </div>
                        {/* <Link to={myPath} className="login-btn" onSubmit = {submit}>Login</Link> */}
                        <button onClick = {submit} className = "btn">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

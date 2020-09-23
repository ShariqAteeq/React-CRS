import React, { Component } from 'react';
import Login from '../../layout/login';
import adm from '../../../img/admin.png';
import { SignIn } from '../../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AdminLogin extends Component {
    state = {
        email : '',
        password: ''
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render(){
    return (
        <div>
            <Login title = "Admin" myImg = {adm} 
            submit = {this.onSubmit} email = {this.state.email} password = {this.state.password}
            change = {this.handleChange} 
            />
             { this.props.auth ? <Redirect to = '/aboard' /> : null }
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn : (creds) => dispatch(SignIn(creds))
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth.auth
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(AdminLogin);

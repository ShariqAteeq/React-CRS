import React , { Component } from 'react';
import cpy from '../../../img/company.png';
import Login from '../../layout/login';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { SignIn } from '../../../actions/authActions';

class CompanyLogin extends Component {
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
                <Login myImg = {cpy} title = "Company"
                submit = {this.onSubmit} email = {this.state.email} password = {this.state.password}
                change = {this.handleChange} sulink = '/c-signup' />
                { this.props.auth ? <Redirect to = '/cjob' /> : null }
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        err : state.auth.authError,
        auth : state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(SignIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogin);

import { Link, Redirect } from 'react-router-dom';
import React , {Component} from 'react';
import { signUpCompany } from '../../../actions/authActions';
import { connect } from 'react-redux';

class CompanySignUp extends Component {

    state = {
        email : '',
        password: '',
        name: '',
        city : '',
        su: false
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.signUp(this.state);
       this.setState({su : true})
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render(){
        return (
            <div className="signup">
                <div className="signup-bg">
                    <p className="signup-title">Create Company Account!</p>
                    <form className="signup-form">
                        <h3 className="signup-heading">Account Information</h3>
                        <div className="signup-grp">
                            <input type="email" placeholder="Email" className="signup-field" id = "email" onChange = {this.handleChange} value = {this.state.email} />
                            <input type="password" placeholder="Password" className="signup-field" id = "password" onChange = {this.handleChange} value = {this.state.password} />
                            <input type="text" placeholder="Company Name" className="signup-field" id = "name" onChange = {this.handleChange} value = {this.state.name} />
                        </div>
                        <h3 className="signup-heading">Contact Information</h3>
                        <div className="signup-grp">
                        <input type="text" placeholder="City" id = "city" className="signup-field" onChange = {this.handleChange} value = {this.state.city}/>
                            <input type="number" placeholder="Phone Number" className="signup-field" />
                            <input type="text" placeholder="Country" className="signup-field" />
                        </div>
                        <h3 className="signup-heading">Description</h3>
                        <div className="signup-grp">
                        <textarea className = "signup-textarea">About Company...</textarea>
                        </div>
                        <div className="signup-grp">
                        </div>
                        <Link className="login-btn" onClick = {this.onSubmit}>Register Company</Link> 
                        {this.state.su ? <Redirect to = '/clogin' /> : null}
                    </form>
                </div>
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch => {
    return {
        signUp : (newUser) => dispatch(signUpCompany(newUser))
    }
}

export default connect(null , mapDispatchToProps)(CompanySignUp);

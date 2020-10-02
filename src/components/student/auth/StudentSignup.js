import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signUpStudent} from '../../../actions/authActions';

class Studentsignup extends Component {

    state = {
        email : '',
        password: '',
        name: '',
        dev : '',
        quali : '',
        city: '',
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        return <Redirect to =  '/slogin' />
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    

    render() {
        console.log(this.state.quali , this.state.skills);
        return (
            
            <div className="signup">
                <div className="signup-bg">
                    <p className="signup-title">Create Student Account!</p>
                    <form className="signup-form" onSubmit = {this.onSubmit}>
                        <h3 className="signup-heading">Account Information</h3>
                        <div className="signup-grp">
                            <input type="email"  id = "email" placeholder="Email" className="signup-field" onChange = {this.handleChange} value = {this.state.email} required/>
                            <input type="password" id = "password" placeholder="Password" className="signup-field" onChange = {this.handleChange} value = {this.state.password} required/>
                            <input type="text" id = "name" placeholder="Name" className="signup-field" onChange = {this.handleChange} value = {this.state.name} required/>
                        </div>
                        <h3 className="signup-heading">Contact Information</h3>
                        <div className="signup-grp">
                            <input type="text" id = "dev" placeholder="Developer" className="signup-field" onChange = {this.handleChange} value = {this.state.dev} required/>
                            <input type="text" id = "quali" placeholder="Qualification" className="signup-field" onChange = {this.handleChange} value = {this.state.quali} required/>
                            <input type="text" id = "city" placeholder="City" className="signup-field" onChange = {this.handleChange} value = {this.state.city} required/>
                        </div>
                        <h3 className="signup-heading">Skills</h3>
                        <div className="signup-grp">
                            <div className="signup-grp mr-small">
                                <input type="text" placeholder="Skill Name" id = "sk1t" className="signup-field" />
                                <input type="Number" placeholder="Skill Mastery Level" id = "sk1p" className="signup-field" />
                            </div>
                            <div className="signup-grp">
                                <input type="text" placeholder="Skill Name" className="signup-field" id = "sk2t"/>
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" id = "sk2p" />
                            </div>
                        </div>
                        <div className="signup-grp">
                            <div className="signup-grp mr-small">
                                <input type="text" placeholder="Skill Name" className="signup-field" id = "sk3t" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" id = "sk3p" />
                            </div>
                            <div className="signup-grp">
                                <input type="text" placeholder="Skill Name" className="signup-field" id = "sk4t" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" id = "sk4p"/>
                            </div>
                        </div>
                        <button className="login-btn" type = "submit">Register Student</button>
                    </form>
                </div>
            </div>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUpStudent(newUser))
    }
}

export default connect(null,mapDispatchToProps)(Studentsignup);

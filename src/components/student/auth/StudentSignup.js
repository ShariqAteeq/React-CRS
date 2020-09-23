import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signUpStudent} from '../../../actions/authActions';

class Studentsignup extends Component {

    state = {
        email : '',
        password: '',
        name: '',
        phone : '',
        address : '',
        city: ''
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render() {

        return (
            <div className="signup">
                <div className="signup-bg">
                    <p className="signup-title">Create Student Account!</p>
                    <form className="signup-form">
                        <h3 className="signup-heading">Account Information</h3>
                        <div className="signup-grp">
                            <input type="email"  id = "email" placeholder="Email" className="signup-field" onChange = {this.handleChange} value = {this.state.email}/>
                            <input type="password" id = "password" placeholder="Password" className="signup-field" onChange = {this.handleChange} value = {this.state.password}/>
                            <input type="text" id = "name" placeholder="Name" className="signup-field" onChange = {this.handleChange} value = {this.state.name}/>
                        </div>
                        <h3 className="signup-heading">Contact Information</h3>
                        <div className="signup-grp">
                            <input type="text" id = "phone" placeholder="Phone Number" className="signup-field" onChange = {this.handleChange} value = {this.state.phone}/>
                            <input type="text" id = "address" placeholder="Address" className="signup-field" onChange = {this.handleChange} value = {this.state.address}/>
                            <input type="text" id = "city" placeholder="City" className="signup-field" onChange = {this.handleChange} value = {this.state.city}/>
                        </div>
                        <h3 className="signup-heading">Academic Qualification</h3>
                        <div className="signup-grp">
                            <input type="text" placeholder="Institute" className="signup-field" />
                            <input type="text" placeholder="Department" className="signup-field" />
                            <input type="text" placeholder="Degree" className="signup-field" />
                            <input type="text" placeholder="Grade" className="signup-field" />
                        </div>
                        <div className="signup-grp">
                            <input type="text" placeholder="Institute" className="signup-field" />
                            <input type="text" placeholder="Department" className="signup-field" />
                            <input type="text" placeholder="Degree" className="signup-field" />
                            <input type="text" placeholder="Grade" className="signup-field" />
                        </div>
                        <div className="signup-grp">
                            <input type="text" placeholder="Institute" className="signup-field" />
                            <input type="text" placeholder="Department" className="signup-field" />
                            <input type="text" placeholder="Degree" className="signup-field" />
                            <input type="text" placeholder="Grade" className="signup-field" />
                        </div>
                        <h3 className="signup-heading">Skills</h3>
                        <div className="signup-grp">
                            <div className="signup-grp mr-small">
                                <input type="text" placeholder="Skill Name" className="signup-field" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" />
                            </div>
                            <div className="signup-grp">
                                <input type="text" placeholder="Skill Name" className="signup-field" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" />
                            </div>
                        </div>
                        <div className="signup-grp">
                            <div className="signup-grp mr-small">
                                <input type="text" placeholder="Skill Name" className="signup-field" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" />
                            </div>
                            <div className="signup-grp">
                                <input type="text" placeholder="Skill Name" className="signup-field" />
                                <input type="Number" placeholder="Skill Mastery Level" className="signup-field" />
                            </div>
                        </div>
                        <button className="login-btn" onClick = {this.onSubmit}>Register Student</button>
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

import React, { Component } from "react";
import Login from "../../layout/login";
import std from "../../../img/student.png";
import { SignIn , checkAuth } from "../../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from 'firebase';

class StudentLogin extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Login
          myImg={std}
          myPath="/sboard"
          title="Student"
          submit={this.onSubmit}
          email={this.state.email}
          password={this.state.password}
          change={this.handleChange}
          sulink="/s-signup"
        />
        {this.props.auth ? <Redirect to="/sboard" /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    err: state.auth.authError,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(SignIn(creds)),
    checkAuth : () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentLogin);

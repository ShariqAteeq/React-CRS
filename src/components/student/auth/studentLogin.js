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

//   componentDidMount() {
//     if(this.props.auth) {
//       return <Redirect to="/sboard" /> 
//     }
// else {
//   return null;
// }
//   }
 
  render() {
    console.log('hee',this.props.role);
   let he = "stu";
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
        {this.props.auth && he == "stu"? <Redirect to="/cprofile" /> : null}
        {/* {this.props.auth && this.props.role == "company"? <Redirect to="/cboard" /> : null} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    err: state.auth.authError,
    auth: state.auth.auth,
    role: state.auth.authRole
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(SignIn(creds)),
    checkAuth : () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentLogin);

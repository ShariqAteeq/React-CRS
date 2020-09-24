import React, { Component } from "react";
import StudentList from "../student/studentList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/navbar";

class StudentDashboard extends Component {
  render() {
    if (this.props.auth == false) return <Redirect to="/" />;

    return (
      <div>
        {this.props.auth ? <Navbar /> : null}
        <StudentList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps)(StudentDashboard);
